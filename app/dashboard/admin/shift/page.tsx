"use client";

import { useState } from "react";
import { EyeIcon, Pencil, TrashIcon, CirclePlus } from "lucide-react";

export default function ShiftPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [shiftName, setShiftName] = useState("");
  const [viewData, setViewData] = useState({ company: "", shift: "" });
  const [editData, setEditData] = useState({ shift: "" });

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">

      {/* MAIN CARD */}
      <div className="card-shadow bg-white rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">All Shift Information</h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-white font-bold"
            style={{ background: "#2D8EFF" }}
          >
            <CirclePlus className="w-5 h-5" />
            Add Data
          </button>
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

                    {/* VIEW */}
                    <button
                      onClick={() => {
                        setViewData({ company: "PT Rumah Dewata Indah", shift: "Security Reguler" });
                        setIsViewOpen(true);
                      }}
                      className="p-2 rounded-md bg-blue-500 text-white"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>

                    {/* EDIT */}
                    <button
                      onClick={() => {
                        setEditData({ shift: "Security Reguler" });
                        setIsEditOpen(true);
                      }}
                      className="p-2 rounded-md bg-yellow-500 text-white"
                    >
                      <Pencil className="w-5 h-5" />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => setIsDeleteOpen(true)}
                      className="p-2 rounded-md bg-red-700 text-white"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>

                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* =============================================================== */}
      {/* ADD MODAL */}
      {/* =============================================================== */}
      {isModalOpen && (
        <div className="modal-backdrop fixed inset-0 flex justify-center items-center z-50 p-4">
          <div className="modal-content max-w-lg">

            {/* TITLE MATCHING WorkScheduleAdminPage */}
            <h3 className="modal-title border-b pb-3 mb-6 font-bold" style={{ color: "var(--color-black)" }}>
              Add Shift
            </h3>

            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Name of Shift</label>
            <input
              type="text"
              className="input mb-6"
              placeholder="Insert shift name"
              value={shiftName}
              onChange={(e) => setShiftName(e.target.value)}
            />

            <div className="modal-footer gap-3">
              <button onClick={() => setIsModalOpen(false)} className="btn-cancel font-bold">
                Cancel
              </button>

              <button
                onClick={() => {
                  alert("Shift Added: " + shiftName);
                  setIsModalOpen(false);
                  setShiftName("");
                }}
                className="btn-primary"
                style={{ background: "var(--color-primary)" }}
              >
                Add
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =============================================================== */}
      {/* VIEW MODAL */}
      {/* =============================================================== */}
      {isViewOpen && (
        <div className="modal-backdrop fixed inset-0 flex justify-center items-center z-50 p-4">
          <div className="modal-content max-w-lg">

            <h3 className="modal-title border-b pb-3 mb-6 font-bold" style={{ color: "var(--color-black)" }}>
              View Shift
            </h3>

            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Company Name</label>
            <input type="text" readOnly value={viewData.company} className="input mb-4" />

            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Name of Shift</label>
            <input type="text" readOnly value={viewData.shift} className="input mb-6" />

            <div className="modal-footer">
              <button
                onClick={() => setIsViewOpen(false)}
                className="btn-primary"
                style={{ background: "var(--color-primary)" }}
              >
                Back
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =============================================================== */}
      {/* EDIT MODAL */}
      {/* =============================================================== */}
      {isEditOpen && (
        <div className="modal-backdrop fixed inset-0 flex justify-center items-center z-50 p-4">
          <div className="modal-content max-w-lg">

            <h3 className="modal-title border-b pb-3 mb-6 font-bold" style={{ color: "var(--color-black)" }}>
              Edit Shift
            </h3>

            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Name of Shift</label>
            <input
              type="text"
              className="input mb-6"
              value={editData.shift}
              onChange={(e) => setEditData({ shift: e.target.value })}
            />

            <div className="modal-footer gap-3">
              <button onClick={() => setIsEditOpen(false)} className="btn-cancel font-bold">
                Cancel
              </button>

              <button
                onClick={() => {
                  alert("Shift Updated: " + editData.shift);
                  setIsEditOpen(false);
                }}
                className="btn-primary"
                style={{ background: "var(--color-primary)" }}
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =============================================================== */}
      {/* DELETE MODAL */}
      {/* =============================================================== */}
      {isDeleteOpen && (
        <div className="modal-backdrop fixed inset-0 flex justify-center items-center z-50 p-4">
          <div className="modal-delete max-w-lg">

            <h3 className="modal-title pb-3 mb-6 font-bold text-center" style={{ color: "var(--color-black)" }}>
              Delete This Data?
            </h3>

            <div className="modal-delete-actions mt-4">
              <button onClick={() => setIsDeleteOpen(false)} className="btn-cancel font-bold">
                Cancel
              </button>

              <button
                onClick={() => {
                  alert("Data Deleted!");
                  setIsDeleteOpen(false);
                }}
                className="btn-danger font-bold"
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
