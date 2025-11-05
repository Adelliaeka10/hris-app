"use client";

import Card from "@/components/card";
import {
  Clock,
  Mail,
  XCircle,
  CheckSquare,
  ClipboardClock,
} from "lucide-react";
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
    <div className="flex flex-col flex-1 overflow-y-auto bg-gray-100">
      {/* Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card
          title="Work Hours"
          value="120h 20m"
          color="bg-blue-100"
          icon={<Clock className="w-6 h-6 text-blue-600" />}
        />
        <Card
          title="On Time"
          value="15"
          color="bg-purple-100"
          icon={<CheckSquare className="w-6 h-6 text-purple-600" />}
        />
        <Card
          title="Late"
          value="5"
          color="bg-yellow-100"
          icon={<ClipboardClock className="w-6 h-6 text-yellow-600" />}
        />
        <Card
          title="Leave/Sick"
          value="3"
          color="bg-green-100"
          icon={<Mail className="w-6 h-6 text-green-600" />}
        />
        <Card
          title="Alpha"
          value="5"
          color="bg-red-100"
          icon={<XCircle className="w-6 h-6 text-red-600" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
  );
}
