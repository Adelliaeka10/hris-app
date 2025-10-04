"use client";

import { useState } from "react";
import { Bell, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white shadow border-b">
      {/* Left: Title */}
      <h2 className="text-xl font-bold text-red-600">Dashboard</h2>

      {/* Center: Search */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded-full pl-8 pr-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-2 w-4 text-gray-400" />
        </div>
      </div>

      {/* Right: Notification + Avatar */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />

        {/* Avatar dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-1 focus:outline-none"
          >
            <img
              src="/profile.png"
              alt="Admin"
              className="w-9 h-9 rounded-full border-2 border-white shadow"
            />
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border overflow-hidden z-50">
              <ul className="flex flex-col">
                <li>
                  <button className="w-full text-center px-4 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    My profile
                  </button>
                </li>
                <li>
                  <button className="w-full text-center px-4 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    My company
                  </button>
                </li>
                <li>
                  <button className="w-full text-center px-4 py-2 bg-red-500 text-white font-semibold hover:bg-red-600">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
