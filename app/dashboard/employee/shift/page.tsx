"use client";

import { useState } from "react";
import { EyeIcon } from "lucide-react";

export default function ShiftPage() {
  const [isViewOpen, setIsViewOpen] = useState(false);

  const [viewData, setViewData] = useState({ company: "", shift: "" });

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">

      {/* MAIN CARD */}
      <div className="card-shadow bg-white rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">All Shift Information</h2>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-[var(--color-primary)] text-white text-center">
                <th className="py-2 px-4 border">No.</th>
                <th className="py-2 px-4 border">Company Name</th>
                <th className="py-2 px-4 border">Name of Shift</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border text-center">1</td>
                <td className="py-2 px-4 border">PT Rumah Dewata Indah</td>
                <td className="py-2 px-4 border">Security Reguler</td>

                <td className="py-2 px-4 border text-center">
                  <div className="flex justify-center space-x-3">

                    {/* VIEW BUTTON */}
                    <button
                      onClick={() => {
                        setViewData({
                          company: "PT Rumah Dewata Indah",
                          shift: "Security Reguler",
                        });
                        setIsViewOpen(true);
                      }}
                      className="p-2 rounded-md bg-blue-500 text-white"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* =============================================================== */}
      {/* VIEW MODAL */}
      {/* =============================================================== */}

      {isViewOpen && (
        <div className="modal-backdrop fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
          <div className="modal-content max-w-lg bg-white p-6 rounded-lg shadow-lg w-full">

            <h3 className="modal-title border-b pb-3 mb-6 font-bold text-lg" style={{ color: "var(--color-black)" }}>
              View Shift
            </h3>

            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>
              Company Name
            </label>
            <input
              type="text"
              readOnly
              value={viewData.company}
              className="input mb-4 w-full border p-2 rounded-md bg-gray-100"
            />

            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>
              Name of Shift
            </label>
            <input
              type="text"
              readOnly
              value={viewData.shift}
              className="input mb-6 w-full border p-2 rounded-md bg-gray-100"
            />

            <div className="modal-footer flex justify-end">
              <button
                onClick={() => setIsViewOpen(false)}
                className="btn-primary px-4 py-2 rounded-md text-white"
                style={{ background: "var(--color-primary)" }}
              >
                Back
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
