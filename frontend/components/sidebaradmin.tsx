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
            href="/dashboard"
            className="flex items-center p-2 rounded-lg bg-blue-100 text-blue-600 font-semibold"
          >
            <LayoutDashboard className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Dashboard</span>}
          </Link>

          <Link
            href="#"
            className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <Users className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Employee</span>}
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
            {!isCollapsed && <span className="ml-2">Leaves</span>}
          </Link>

          <Link
            href="#"
            className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <CalendarDays className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Work Schedule</span>}
          </Link>

          <Link
            href="#"
            className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <HandCoins className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Transactions</span>}
          </Link>
        </nav>
      </div>

      {/* Upgrade Plan */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="bg-[#2F6FB0] text-white text-center rounded-xl p-6 shadow">
            <p className="mb-2 text-lg font-semibold">Upgrade Plan</p>
            <p className="mb-4 text-sm text-gray-200">
              choose the plan that best suits your business!
            </p>
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-4 py-2 rounded-md font-bold shadow hover:opacity-90">
              get plans
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
