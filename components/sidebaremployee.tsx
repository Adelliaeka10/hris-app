"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Clock,
  LayoutDashboard,
  LogOut,
  PanelLeft,
  UserCog,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-white font-semibold active-link"
      : "text-[var(--color-primary)] font-semibold hover:bg-gray-100 hover:text-[var(--color-primary)]";

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } h-screen bg-white shadow transition-all duration-300 flex flex-col`}
    >
      {/* Logo + Toggle */}
      <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="HRIS" className="h-8" />

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded hover:bg-gray-100 transition-smooth"
        >
          <PanelLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col p-4 space-y-2">
        <Link
          href="/dashboard/employee"
          className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
            "/dashboard/employee"
          )}`}
          style={
            pathname === "/dashboard/employee"
              ? { background: "var(--gradient-blue)" }
              : {}
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          {!isCollapsed && <span className="ml-2">Dashboard</span>}
        </Link>

        <Link
          href="/dashboard/employee/attendance"
          className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
            "/dashboard/employee/attendance"
          )}`}
          style={
            pathname === "/dashboard/employee/attendance"
              ? { background: "var(--gradient-blue)" }
              : {}
          }
        >
          <Clock className="w-5 h-5" />
          {!isCollapsed && <span className="ml-2">Attendance</span>}
        </Link>

        <Link
          href="/dashboard/employee/leaves"
          className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
            "/dashboard/employee/leaves"
          )}`}
          style={
            pathname === "/dashboard/employee/leaves"
              ? { background: "var(--gradient-blue)" }
              : {}
          }
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span className="ml-2">Leaves Request</span>}
        </Link>

        <Link
          href="/dashboard/employee/shift"
          className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
            "/dashboard/employee/shift"
          )}`}
          style={
            pathname === "/dashboard/employee/shift"
              ? { background: "var(--gradient-blue)" }
              : {}
          }
        >
          <UserCog className="w-5 h-5" />
          {!isCollapsed && <span className="ml-2">Shift</span>}
        </Link>

        <Link
          href="/dashboard/employee/workschedule"
          className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
            "/dashboard/employee/workschedule"
          )}`}
          style={
            pathname === "/dashboard/employee/workschedule"
              ? { background: "var(--gradient-blue)" }
              : {}
          }
        >
          <CalendarDays className="w-5 h-5" />
          {!isCollapsed && <span className="ml-2">Work Schedule</span>}
        </Link>
      </nav>
    </div>
  );
}
