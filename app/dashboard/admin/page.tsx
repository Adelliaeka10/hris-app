"use client";

import Card from "@/components/card";
import { Users, CheckSquare, Mail, XCircle, ClipboardClock } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      
      {/* Cards */}
      <div className="dashboard-grid">
        <Card
          title="Total Employees"
          value="500"
          color="bg-blue-100"
          icon={<Users className="w-6 h-6" style={{ color: "var(--color-primary)" }}/>}
        />
        <Card
          title="On Time"
          value="330"
          color="bg-purple-100"
          icon={<CheckSquare className="w-6 h-6 text-purple-400" />}
        />
        <Card
          title="Late"
          value="70"
          color="bg-yellow-100"
          icon={<ClipboardClock className="w-6 h-6 text-yellow-500" />}
        />
        <Card
          title="Leave/Sick"
          value="95"
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

      {/* Data Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 pb-6">
        <div className="table-box">
          <h4>Employee Data Entry</h4>
          <ol>
            <li>1. Leslie Alexander</li>
            <li>2. Annette Black</li>
            <li>3. Esther Howard</li>
            <li>4. Devon Lane</li>
            <li>5. Wade Warren</li>
          </ol>
        </div>

        <div className="table-box">
          <h4>Employee Data Leave/Sick</h4>
          <ol>
            <li>1. Leslie Alexander</li>
            <li>2. Annette Black</li>
            <li>3. Esther Howard</li>
            <li>4. Devon Lane</li>
          </ol>
        </div>

        <div className="table-box">
          <h4>Employee Data Alpha</h4>
          <ol>
            <li>1. Leslie Alexander</li>
            <li>2. Annette Black</li>
            <li>3. Esther Howard</li>
            <li>4. Devon Lane</li>
          </ol>
        </div>

        <div className="table-box">
          <h4>Employee Data Late</h4>
          <ol>
            <li>1. Leslie Alexander</li>
            <li>2. Annette Black</li>
            <li>3. Esther Howard</li>
            <li>4. Devon Lane</li>
          </ol>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="px-6 pb-6">
        <div className="chart-box">
          [ Chart Statistik Akan Ditempatkan di Sini ]
        </div>
      </div>
    </div>
  );
}
