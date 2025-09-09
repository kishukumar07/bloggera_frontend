import React from "react";
import { Bell, Search } from "lucide-react";
function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-lg border-b border-gray-700">
      <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-40"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1.5 rounded-full">
            3
          </span>
        </button>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full border border-gray-500"
        />
      </div>
    </header>
  );
}

export default Header;
