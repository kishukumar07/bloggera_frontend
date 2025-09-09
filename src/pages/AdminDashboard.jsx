import React, { useState} from "react";
import { Home, UserStar, FileText, Mail, Settings, LogOut } from "lucide-react";

import Dashboard from "../components/admin/Dashboard";
import Blogs from "../components/admin/Blogs";
import Users from "../components/admin/Users";
import Contacts from "../components/admin/Contacts";
import SetTings from "../components/admin/settings";
// import Header from "../components/admin/Header";

function AdminDashboard() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
    
      {/* Sidebar */}
      <aside className="w-64 bg-black/40 backdrop-blur-lg border-r border-gray-700 p-4 flex flex-col">
        <h2 className="text-2xl font-bold text-orange-400 mb-6">
          Bloggera Admin
        </h2>

        <nav className="flex-1 space-y-2">
          <button
            onClick={() => setTab("dashboard")}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800"
          >
            <Home size={18} /> Dashboard
          </button>
          <button
            onClick={() => setTab("users")}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800"
          >
            <UserStar size={18} />
            Users
          </button>
          <button
            onClick={() => setTab("blogs")}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800"
          >
            <FileText size={18} /> Blogs
          </button>
          <button
            onClick={() => setTab("contacts")}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800"
          >
            <Mail size={18} /> Contacts
          </button>
          <button
            onClick={() => setTab("settings")}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800"
          >
            <Settings size={18} /> Settings
          </button>
        </nav>

        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800 text-red-400">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">

        {/* Top Navbar */}
        {/* <Header /> */}

        {/* Page Content */}
        <section className="p-6 overflow-y-auto">
          {/* Dashboard Tab */}
          {tab === "dashboard" && <Dashboard />}
          {/* Users Tab */}
          {tab === "users" && <Users />}
          {/* Blogs Tab */}
          {tab === "blogs" && <Blogs />}
          {/* Contacts Tab */}
          {tab === "contacts" && <Contacts />}
          {/* Settings Tab */}
          {tab === "settings" && <SetTings />}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
