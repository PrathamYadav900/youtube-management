"use client";
import React, { useState, useEffect } from "react";

const EditorVideo = () => {
  const [file, setFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };

  // Effect to create object URL and clean up on unmount
  useEffect(() => {
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setVideoPreview(previewURL);

      return () => URL.revokeObjectURL(previewURL); // Clean up memory
    }
  }, [file]);

  const upload = async () => {
    if (!file || !title || !description) {
      alert("Please fill all the fields");
      return;
    }
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log("Upload successful:", data.url);
      alert("Upload successful");

      // Reset the form after successful upload
      setFile(null);
      setTitle("");
      setDescription("");
      setVideoPreview(null);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Upload a Video</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={uploading}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={uploading}
        />

        <input type="file" accept="video/*" onChange={handleFile} disabled={uploading} />

        <button onClick={upload} disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {videoPreview && (
          <video width="320" height="240" controls>
            <source src={videoPreview} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
};

export default EditorVideo;
