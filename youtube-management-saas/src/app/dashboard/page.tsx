// Main dashboard page

import AdminVideo from "./video/AdminVideo";
import EditorVideo from "./video/EditorVideo";

export default function DashboardPage() {
    return(
        <div>
            <h1>Welcome to Your Dashbord</h1>
          <AdminVideo/>
          <EditorVideo/>
        </div>
    )
}