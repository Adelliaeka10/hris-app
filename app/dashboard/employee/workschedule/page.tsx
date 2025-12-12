"use client";

import * as React from "react";
import { CirclePlus, Eye, Pencil, Trash2 } from "lucide-react";

type WorkScheduleRow = {
  id: number;
  scheduleGroup: string;
  dayOfWeek: string;
  startTime: string;
  breakStart: string;
  breakEnd: string;
  endTime: string;
};

const initialRows: WorkScheduleRow[] = [
  {
    id: 1,
    scheduleGroup: "Security Reguler",
    dayOfWeek: "Monday",
    startTime: "08.00",
    breakStart: "12.00",
    breakEnd: "13.00",
    endTime: "16.00",
  },
  {
    id: 2,
    scheduleGroup: "Employee Morning Shift",
    dayOfWeek: "Monday",
    startTime: "07.00",
    breakStart: "12.00",
    breakEnd: "13.00",
    endTime: "16.00",
  },
  {
    id: 3,
    scheduleGroup: "Employee Day Shift",
    dayOfWeek: "Monday",
    startTime: "13.00",
    breakStart: "08.00",
    breakEnd: "16.00",
    endTime: "19.00",
  },
];

export default function WorkScheduleEmployeePage() {
  const [rows, setRows] = React.useState<WorkScheduleRow[]>(initialRows);

  return (
    <div className="p-6 dashboard-container">
      <div className="table-box">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-xl font-bold card-title"
            style={{ color: "var(--color-black)" }}
          >
            Work Schedule Information
          </h2>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr
                className="text-white text-center font-bold"
                style={{ background: "var(--color-primary)" }}
              >
                <th className="p-3 border">No.</th>
                <th className="p-3 border">Schedule Group</th>
                <th className="p-3 border">Day of Week</th>
                <th className="p-3 border">Start Time</th>
                <th className="p-3 border">Break Start</th>
                <th className="p-3 border">Break End</th>
                <th className="p-3 border">End Time</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, index) => (
                <tr key={r.id} className="border hover:bg-gray-100">
                  <td className="p-3 text-center border">{index + 1}</td>
                  <td className="p-3 border">{r.scheduleGroup}</td>
                  <td className="p-3 text-center border">{r.dayOfWeek}</td>
                  <td className="p-3 text-center border">{r.startTime}</td>
                  <td className="p-3 text-center border">{r.breakStart}</td>
                  <td className="p-3 text-center border">{r.breakEnd}</td>
                  <td className="p-3 text-center border">{r.endTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
