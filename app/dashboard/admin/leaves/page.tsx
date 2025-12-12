"use client";

import React, { useState } from "react";
import { Eye, Trash } from "lucide-react";

type Leave = {
  id: number;
  name: string;
  type: string;
  start: string;
  end: string;
  days: string;
  reason: string;
  attachment: string;
  status: "pending" | "approved" | "rejected";
  rejectedReason: string;
  approvedAt: string;
};

const leavesData: Leave[] = [
  {
    id: 1,
    name: "Courtney Henry",
    type: "Sick Leave",
    start: "2025-11-06",
    end: "2025-11-06",
    days: "1 Day",
    reason: "Medical Check Up",
    attachment: "/proof/attachment1.jpg",
    status: "approved",
    rejectedReason: "-",
    approvedAt: "11:24:08",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    type: "Family Leave",
    start: "2025-11-06",
    end: "2025-11-07",
    days: "2 Days",
    reason: "Sister's Wedding",
    attachment: "/proof/attachment2.jpg",
    status: "pending",
    rejectedReason: "-",
    approvedAt: "-",
  },
];

export default function LeavesAdminPage(): JSX.Element {
  const [leaveList, setLeaveList] = useState<Leave[]>(leavesData);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState<Leave | null>(null);
  const [deleteLeave, setDeleteLeave] = useState<Leave | null>(null);

  // ================== STATUS HANDLER ==================
  const approveLeave = (id: number) => {
    setLeaveList(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              status: "approved",
              rejectedReason: "-",
              approvedAt: new Date().toLocaleTimeString(),
            }
          : item
      )
    );
  };

  const rejectLeave = (id: number) => {
    setLeaveList(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              status: "rejected",
              approvedAt: "-",
              rejectedReason: "Rejected by Admin",
            }
          : item
      )
    );
  };

  // ================== VIEW HANDLER ==================
  const openView = (leave: Leave) => {
    setSelectedLeave(leave);
    setShowViewModal(true);
  };

  const closeView = () => {
    setSelectedLeave(null);
    setShowViewModal(false);
  };

  // ================== DELETE ==================
  const handleDelete = () => {
    if (!deleteLeave) return;
    setLeaveList(leaveList.filter(item => item.id !== deleteLeave.id));
    setDeleteLeave(null);
  };

  return (
    <div className="p-6 dashboard-container">
      <div className="table-box">
        <h2 className="card-title text-xl mb-6 font-bold" style={{ color: "var(--color-black)" }}>
          Leaves Information
        </h2>

        <div className="overflow-x-auto">
          {/* TABLE */}
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="text-white text-center font-bold" style={{ background: "var(--color-primary)" }}>
                <th className="p-3 border w-12">No.</th>
                <th className="p-3 border">Full Name</th>
                <th className="p-3 border">Leave Type</th>
                <th className="p-3 border">Start Date</th>
                <th className="p-3 border">End Date</th>
                <th className="p-3 border">Total Days</th>
                <th className="p-3 border">Reason</th>
                <th className="p-3 border">Attachment</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Approved At</th>
                <th className="p-3 border">Rejected Reason</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {leaveList.map((item, index) => (
                <tr key={item.id} className="bg-white border border-gray-200 hover:bg-gray-100 transition">
                  <td className="p-3 text-center border">{index + 1}</td>
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.type}</td>
                  <td className="p-3 border text-center">{item.start}</td>
                  <td className="p-3 border text-center">{item.end}</td>
                  <td className="p-3 border text-center">{item.days}</td>
                  <td className="p-3 border">{item.reason}</td>

                  <td className="p-3 text-center border">
                    <img
                      src={item.attachment}
                      className="w-10 h-10 rounded object-cover mx-auto cursor-pointer border"
                      onClick={() => openView(item)}
                      alt=""
                    />
                  </td>

                  {/* ================== STATUS BUTTONS ================== */}
                  <td className="p-3 text-center border">
                    <div className="flex justify-center gap-2">

                      {/* ✖ REJECT BUTTON — tampil jika status pending atau rejected */}
                      {item.status !== "approved" && (
                        <button
                          onClick={() => rejectLeave(item.id)}
                          className={`w-8 h-8 flex items-center justify-center rounded-md border 
                            ${
                              item.status === "rejected"
                                ? "bg-red-100 border-red-500"
                                : "bg-white border-gray-300"
                            }`}
                        >
                          <span className="text-red-600 text-lg">✖</span>
                        </button>
                      )}

                      {/* ✔ APPROVE BUTTON — tampil jika status pending atau approved */}
                      {item.status !== "rejected" && (
                        <button
                          onClick={() => approveLeave(item.id)}
                          className={`w-8 h-8 flex items-center justify-center rounded-md border 
                            ${
                              item.status === "approved"
                                ? "bg-green-100 border-green-600"
                                : "bg-white border-gray-300"
                            }`}
                        >
                          <span className="text-green-600 text-lg">✔</span>
                        </button>
                      )}

                    </div>
                  </td>

                  <td className="p-3 text-center border">{item.approvedAt}</td>
                  <td className="p-3 text-center border">{item.rejectedReason}</td>

                  <td className="p-3 border">
                    <div className="flex gap-2 justify-center">
                      <button
                        className="px-3 py-1 rounded bg-blue-500 text-white hover:opacity-90 transition"
                        onClick={() => openView(item)}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="px-3 py-1 rounded bg-red-700 text-white hover:opacity-90 transition"
                        onClick={() => setDeleteLeave(item)}
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========================= VIEW MODAL ========================= */}
      {showViewModal && selectedLeave && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-11/12 max-w-5xl p-8 overflow-y-auto max-h-[90vh] border border-gray-200">
            <h3 className="modal-title text-lg font-bold text-black border-b border-gray-300 pb-3 mb-6">
              View Request Leave
            </h3>

            <div className="grid grid-cols-2 gap-8">
              {/* LEFT */}
              <div>
                <label className="input-label font-bold">Employee Name</label>
                <input className="input" value={selectedLeave.name} readOnly />

                <label className="input-label mt-4 font-bold">Leave Type</label>
                <input className="input" value={selectedLeave.type} readOnly />

                <label className="input-label mt-4 font-bold">Date (Start - End)</label>
                <div className="flex items-center gap-3">
                  <input className="input flex-1" value={selectedLeave.start} readOnly />
                  <span>-</span>
                  <input className="input flex-1" value={selectedLeave.end} readOnly />
                </div>

                <label className="input-label mt-4 font-bold">Reason</label>
                <textarea className="input" value={selectedLeave.reason} readOnly />
              </div>

              {/* RIGHT */}
              <div>
                <label className="input-label font-bold">Attachment</label>
                <div className="flex items-center gap-4 mb-6 pt-4">
                  <img
                    src={selectedLeave.attachment}
                    className="w-32 h-32 object-cover rounded border"
                    alt="preview"
                  />
                </div>

                <label className="input-label font-bold">Status</label>
                <div className="flex items-center gap-2 mb-4">
                  {selectedLeave.status === "approved" ? (
                    <span className="text-green-600 text-xl">✔</span>
                  ) : selectedLeave.status === "rejected" ? (
                    <span className="text-red-600 text-xl">✖</span>
                  ) : (
                    <span className="text-yellow-600 text-xl">•</span>
                  )}
                  <span>
                    {selectedLeave.status === "approved"
                      ? "Approved"
                      : selectedLeave.status === "rejected"
                      ? "Rejected"
                      : "Pending"}
                  </span>
                </div>

                <label className="input-label font-bold">Approved At</label>
                <input className="input mb-4" value={selectedLeave.approvedAt} readOnly />

                <label className="input-label font-bold">Reason Rejected</label>
                <input className="input" value={selectedLeave.rejectedReason} readOnly />

                <div className="modal-footer mt-6">
                  <button
                    className="btn-cancel font-bold"
                    style={{ background: "var(--color-primary)", color: "white" }}
                    onClick={closeView}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ======================== DELETE MODAL ======================== */}
      {deleteLeave && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
          <div className="modal-delete">
            <h3 className="modal-delete-title">Delete This Data?</h3>
            <div className="modal-delete-actions">
              <button onClick={() => setDeleteLeave(null)} className="btn-cancel">
                Cancel
              </button>
              <button onClick={handleDelete} className="btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
