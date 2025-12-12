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
    <div className="dashboard-container">
      {/* Cards */}
      <div className="dashboard-grid">
        <Card
          title="Work Hours"
          value="120h 20m"
          color="bg-blue-100"
          icon={<Clock className="w-6 h-6 text-[var(--color-primary)]" />}
        />

        <Card
          title="On Time"
          value="15"
          color="bg-purple-100"
          icon={<CheckSquare className="w-6 h-6 text-purple-400" />}
        />

        <Card
          title="Late"
          value="5"
          color="bg-yellow-100"
          icon={<ClipboardClock className="w-6 h-6 text-yellow-500" />}
        />

        <Card
          title="Leave/Sick"
          value="3"
          color="bg-green-100"
          icon={<Mail className="w-6 h-6 text-green-700" />}
        />

        <Card
          title="Alpha"
          value="5"
          color="bg-red-100"
          icon={<XCircle className="w-6 h-6 text-red-700" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">

        {/* Radar Chart */}
        <div className="table-box">
          <h3 className="text-lg font-bold mb-4 text-black">Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={overviewData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="var(--color-primary)"
                fill="var(--color-primary)"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="table-box">
          <h3 className="text-lg font-bold mb-4 text-black">Work Hours</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={workHoursData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="var(--color-primary)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
