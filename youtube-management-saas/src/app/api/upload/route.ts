import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

if (!cloudinary.config().cloud_name) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Use server-side env variable
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

export async function POST(req: Request) {
    try {
      const formData = await req.formData();
      const file = formData.get("file") as Blob;
  
      if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
      }
  
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      (error,result)=>{
        if(error){
          console.error("Upload error:",error);
          reject(NextResponse.json({error : "Upload failed"},{status:500}))
        }else{
          resolve(NextResponse.json({url:result?.secure_url},{status:200}))
        }
      }).end(buffer);
    })
  }catch(error){
    console.log("Upload Error: ",error)
    return NextResponse.json({error :"Upload failed"},{status:500})
  }}
