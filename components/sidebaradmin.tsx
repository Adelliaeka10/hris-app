"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname(); // untuk deteksi halaman aktif

  // Helper: menentukan apakah link aktif
  const isActive = (path: string) =>
    pathname === path
      ? "bg-blue-100 text-blue-600 font-semibold"
      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600";

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white h-screen shadow-md flex flex-col justify-between transition-all duration-300`}
    >
      {/* Logo + Toggle */}
      <div>
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="HRIS" className="h-8" />
          </div>

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
            href="/dashboard/admin"
            className={`flex items-center p-2 rounded-lg transition ${isActive(
              "/dashboard/admin"
            )}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Dashboard</span>}
          </Link>

          <Link
            href="/dashboard/admin/employee"
            className={`flex items-center p-2 rounded-lg transition ${isActive(
              "/dashboard/admin/employee"
            )}`}
          >
            <Users className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Employee</span>}
          </Link>

          <Link
            href="#"
            className={`flex items-center p-2 rounded-lg transition ${isActive(
              "/dashboard/admin/attendance"
            )}`}
          >
            <Clock className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Attendance</span>}
          </Link>

          <Link
            href="#"
            className={`flex items-center p-2 rounded-lg transition ${isActive(
              "/dashboard/admin/leaves"
            )}`}
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Leaves</span>}
          </Link>

          <Link
            href="#"
            className={`flex items-center p-2 rounded-lg transition ${isActive(
              "/dashboard/admin/schedule"
            )}`}
          >
            <CalendarDays className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Work Schedule</span>}
          </Link>

          <Link
            href="#"
            className={`flex items-center p-2 rounded-lg transition ${isActive(
              "/dashboard/admin/transactions"
            )}`}
          >
            <HandCoins className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Transactions</span>}
          </Link>

          <Link
            href="#"
            className={`flex items-center p-2 rounded-lg transition ${isActive(
              "/dashboard/admin/shift"
            )}`}
          >
            <UserCog className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Shift</span>}
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
