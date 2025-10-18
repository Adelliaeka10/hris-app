"use client";

import { Clock, Mail, XCircle, SquareCheck, ClipboardClock } from "lucide-react";
import Sidebar from "@/components/sidebaremployee";
import Navbar from "@/components/navbar";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const overviewData = [
  { subject: "On Time", A: 15, fullMark: 20 },
  { subject: "Late", A: 5, fullMark: 20 },
  { subject: "Leave/Sick", A: 3, fullMark: 20 },
  { subject: "Alpha", A: 1, fullMark: 20 },
];

const workHoursData = [
  { day: "Mon", hours: 8 },
  { day: "Tue", hours: 8 },
  { day: "Wed", hours: 7 },
  { day: "Thu", hours: 10 },
  { day: "Fri", hours: 0 },
];

export default function EmployeeDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-gray-100">
        <Navbar />

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Top Cards */}
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-blue-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">Work Hours</p>
                <h3 className="text-2xl font-bold">120h 20m</h3>
              </div>
              <Clock className="w-6 h-6 text-blue-600" />
            </div>

            <div className="bg-purple-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">On Time</p>
                <h3 className="text-2xl font-bold">15</h3>
              </div>
              <SquareCheck className="w-6 h-6 text-purple-600" />
            </div>

            <div className="bg-yellow-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">Late</p>
                <h3 className="text-2xl font-bold">5</h3>
              </div>
              <ClipboardClock className="w-6 h-6 text-yellow-600" />
            </div>

            <div className="bg-green-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">Leave/Sick</p>
                <h3 className="text-2xl font-bold">3</h3>
              </div>
              <Mail className="w-6 h-6 text-green-600" />
            </div>

            <div className="bg-red-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">Alpha</p>
                <h3 className="text-2xl font-bold">1</h3>
              </div>
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            {/* Radar Chart */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4">Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={overviewData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Performance"
                    dataKey="A"
                    stroke="#2F6FB0"
                    fill="#2F6FB0"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4">Work Hours</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={workHoursData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#2F6FB0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
