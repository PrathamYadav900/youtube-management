import React from 'react'

const AdminVideo = () => {
  return (
    <div className="p-6 bg-gray-100 ">
      <h2 className="text-2xl font-semibold mb-4">Admin Video Review</h2>
      
      <table className="w-full border border-gray-300 shadow-md bg-white">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Video</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">
              <iframe 
                width="300" 
                height="170" 
                src="https://www.youtube.com/embed/SVRH-pBw0cc?si=BcQQo-iEU7jEpA2d" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </td>
            <td className="p-3">Pending</td>
            <td className="p-3">
              <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded mr-2">
                Approve
              </button>
              <button className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdminVideo

