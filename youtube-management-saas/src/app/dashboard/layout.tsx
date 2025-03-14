// wraps all dashboard pages 
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen">
        {/* Sidebar (Persistent) */}
        <aside className="w-64 bg-gray-900 text-white p-4">
          <h2 className="text-xl font-bold">YT SaaS</h2>
          <nav>
            <ul>
              <li className="py-2 px-4 hover:bg-gray-800 rounded">Dashboard</li>
              <li className="py-2 px-4 hover:bg-gray-800 rounded">Videos</li>
              <li className="py-2 px-4 hover:bg-gray-800 rounded">Settings</li>
            </ul>
          </nav>
        </aside>
  
        {/* Main Page Content (Changes with navigation) */}
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    );
  }
  