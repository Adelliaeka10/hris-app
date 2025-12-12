"use client";

import React, { useState } from "react";
import { CirclePlus } from "lucide-react";

const attendanceData = [
  {
    no: 1,
    fullName: "Savannah Nguyen",
    employeeId: "EMP-C2-2912503002",
    company: "PT. Sinter Top Tbk",
    workSchedule: "Morning Shift",
    date: "2025-05-08",
    checkIn: "07:00:54",
    checkOut: "18:02:36",
    workType: "WFO",
    location: "Inside",
    lat: "-7.696620",
    long: "112.623632",
    distance: "3m",
    attendance: "On Time",
    proof: "/proof/sample.jpg",
    status: "✓",
  },
];

export default function AttendancePage() {
  const [showModal, setShowModal] = useState(false);

  // input modal
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [workType, setWorkType] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const handlePhoto = (e: any) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div className="p-6 dashboard-container">

      {/* CARD */}
      <div className="card card-shadow border border-gray-200">

        {/* HEADER */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold" style={{ color: "var(--color-black)" }}>Attendance Information</h2>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center font-bold px-4 py-2 rounded-md text-white transition"
            style={{ background: "#2D8EFF" }}
          >
            <CirclePlus className="w-4 h-4 mr-2" /> Add Data
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr
                className="text-white text-center font-bold"
                style={{ background: "var(--color-primary)" }}
              >
                <th className="p-3 border w-12">No.</th>
                <th className="p-3 border">Full Name</th>
                <th className="p-3 border">Employee ID</th>
                <th className="p-3 border">Company</th>
                <th className="p-3 border">Work Schedule</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Check-In</th>
                <th className="p-3 border">Check-Out</th>
                <th className="p-3 border">Work Type</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">Latitude</th>
                <th className="p-3 border">Longitude</th>
                <th className="p-3 border">Distance</th>
                <th className="p-3 border">Attendance</th>
                <th className="p-3 border">Proof</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>

            <tbody>
              {attendanceData.map((row, i) => (
                <tr key={i} className="border text-center hover:bg-gray-100 bg-white">
                  <td className="p-3 border">{row.no}</td>
                  <td className="p-3 border">{row.fullName}</td>
                  <td className="p-3 border">{row.employeeId}</td>
                  <td className="p-3 border">{row.company}</td>
                  <td className="p-3 border">{row.workSchedule}</td>
                  <td className="p-3 border">{row.date}</td>
                  <td className="p-3 border">{row.checkIn}</td>
                  <td className="p-3 border">{row.checkOut}</td>
                  <td className="p-3 border">{row.workType}</td>
                  <td className="p-3 border">{row.location}</td>
                  <td className="p-3 border">{row.lat}</td>
                  <td className="p-3 border">{row.long}</td>
                  <td className="p-3 border">{row.distance}</td>
                  <td className="p-3 border">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        row.attendance === "On Time"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {row.attendance}
                    </span>
                  </td>

                  {/* === Proof Foto === */}
                  <td className="p-3 border">
                    <img
                      src={row.proof}
                      alt="proof"
                      className="w-10 h-10 rounded object-cover mx-auto cursor-pointer border"
                    />
                  </td>

                  <td className="p-3 border">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ============================================= */}
      {/* =============== MODAL ADD DATA =============== */}
      {/* ============================================= */}
      {showModal && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[900px] shadow-xl overflow-hidden max-h-[90vh]">

            {/* HEADER */}
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-bold" style={{ color: "var(--color-black)" }}>Add Attendance Employee</h2>
            </div>

            <div className="grid grid-cols-2 gap-6 p-6 overflow-y-auto">

              {/* LEFT SIDE FORM */}
              <div className="space-y-5">

                {/* Work Type Radio */}
                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Work Type</label>

                  <div className="mt-2 space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="workType"
                        value="WFO"
                        checked={workType === "WFO"}
                        onChange={() => setWorkType("WFO")}
                      />
                      <span>WFO (Work From Office)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="workType"
                        value="WFA"
                        checked={workType === "WFA"}
                        onChange={() => setWorkType("WFA")}
                      />
                      <span>WFA (Work From Anywhere)</span>
                    </label>
                  </div>
                </div>

                {/* Take Photo */}
                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Take Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhoto}
                    className="input"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - MAP */}
              <div>
                <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Location</label>
                <div className="rounded-md overflow-hidden h-40 border border-gray-300">
                  <iframe
                    src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`}
                    className="w-full h-full"
                  ></iframe>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Latitude</label>
                    <input
                      className="input"
                      value={latitude}
                      onChange={(e) => setLatitude(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Longitude</label>
                    <input
                      className="input"
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER BUTTONS */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t">
              <button
                onClick={() => setShowModal(false)}
                className="btn-cancel font-bold" style={{ color: "var(--color-primary)"}}
              >
                Cancel
              </button>

              <button
                className="px-5 py-2 rounded-md text-white font-bold"
                style={{ background: "var(--color-primary)" }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
