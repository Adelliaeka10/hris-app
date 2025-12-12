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
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-white font-semibold active-link"
      : "text-[var(--color-primary)] font-semibold hover:bg-gray-100 hover:text-[var(--color-primary)]";

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white h-screen shadow-md flex flex-col justify-between transition-smooth`}
    >
      {/* Logo + Toggle */}
      <div>
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img src="/logo.png" alt="HRIS" className="h-8" />

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded hover:bg-gray-100 transition-smooth"
          >
            <PanelLeft className="w-6 h-6 text-[var(--color-gray-600)]" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            href="/dashboard/admin"
            className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
              "/dashboard/admin"
            )}`}
            style={
              pathname === "/dashboard/admin"
                ? { background: "var(--gradient-blue)" }
                : {}
            }
          >
            <LayoutDashboard className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </Link>

          <Link
            href="/dashboard/admin/employee"
            className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
              "/dashboard/admin/employee"
            )}`}
            style={
              pathname === "/dashboard/admin/employee"
                ? { background: "var(--gradient-blue)" }
                : {}
            }
          >
            <Users className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Employee</span>}
          </Link>

          <Link
            href="/dashboard/admin/attendance"
            className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
              "/dashboard/admin/attendance"
            )}`}
            style={
              pathname === "/dashboard/admin/attendance"
                ? { background: "var(--gradient-blue)" }
                : {}
            }
          >
            <Clock className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Attendance</span>}
          </Link>

          <Link
            href="/dashboard/admin/leaves"
            className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
              "/dashboard/admin/leaves"
            )}`}
            style={
              pathname === "/dashboard/admin/leaves"
                ? { background: "var(--gradient-blue)" }
                : {}
            }
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Leaves</span>}
          </Link>

          <Link
            href="/dashboard/admin/workschedule"
            className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
              "/dashboard/admin/workschedule"
            )}`}
            style={
              pathname === "/dashboard/admin/workschedule"
                ? { background: "var(--gradient-blue)" }
                : {}
            }
          >
            <CalendarDays className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Work Schedule</span>}
          </Link>

          <Link
            href="/dashboard/admin/transactions"
            className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
              "/dashboard/admin/transactions"
            )}`}
            style={
              pathname === "/dashboard/admin/transactions"
                ? { background: "var(--gradient-blue)" }
                : {}
            }
          >
            <HandCoins className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Transactions</span>}
          </Link>

          <Link
            href="/dashboard/admin/shift"
            className={`flex items-center p-2 rounded-lg transition-smooth ${isActive(
              "/dashboard/admin/shift"
            )}`}
            style={
              pathname === "/dashboard/admin/shift"
                ? { background: "var(--gradient-blue)" }
                : {}
            }
          >
            <UserCog className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Shift</span>}
          </Link>
        </nav>
      </div>

      {/* UPGRADE PLAN FIX */}
      {!isCollapsed && (
        <div className="p-4">
          <div
            className="
              bg-blue-100
              rounded-xl 
              p-6 
              shadow 
              border
              text-center 
              transition-smooth
            "
            style={{ borderColor: "#1e3a5f" }}
          >
            <p className="mb-2 text-lg font-bold text-[var(--color-primary)]">
              Upgrade Plan
            </p>

            <p className="mb-4 text-sm font-medium" style={{ color: "var(--color-primary)" }}>
              choose the plan that best suits your business!
            </p>

            <button
              className="px-4 py-2 rounded-md font-bold text-white shadow transition-smooth w-full"
              style={{background: "linear-gradient(to right, #8E5800, #FFAA00)",}}>
              get plans
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
