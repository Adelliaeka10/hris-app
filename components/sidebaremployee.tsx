"use client";

import { useState } from "react";
import {
  Users,
  Clock,
  LayoutDashboard,
  CalendarDays,
  HandCoins,
  LogOut,
  PanelLeft,
  UserCog,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white h-screen shadow-md flex flex-col justify-between transition-all duration-300`}
    >
      {/* Logo + Toggle */}
      <div>
        <div className="flex items-center justify-between px-6 py-4 border-b">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="HRIS" className="h-8" />
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded hover:bg-gray-100"
          >
            <PanelLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            href="/dashboard/employee"
            className="flex items-center p-2 rounded-lg bg-blue-100 text-blue-600 font-semibold"
          >
            <LayoutDashboard className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Dashboard</span>}
          </Link>

          <Link
            href="#"
            className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <Clock className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Attendance</span>}
          </Link>

          <Link
            href="#"
            className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Leaves Request</span>}
          </Link>

          <Link
            href="#"
            className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <UserCog className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Shift</span>}
          </Link>
        </nav>
      </div>
    </div>
  );
}
