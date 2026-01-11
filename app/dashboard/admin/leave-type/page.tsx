"use client";

import React, { useState } from "react";
import { Eye, Pencil, Trash, CirclePlus, CirclePlusIcon } from "lucide-react";

type LeaveType = {
  id: number;
  name: string;
  paid: "Yes" | "No";
  maxDays: string;
  description: string;
};

const leaveTypeData: LeaveType[] = [
  {
    id: 1,
    name: "Annual Leave",
    paid: "Yes",
    maxDays: "12 Days",
    description: "Yearly paid leave",
  },
  {
    id: 2,
    name: "Sick Leave",
    paid: "Yes",
    maxDays: "10 Days",
    description: "Medical-related leave",
  },
  {
    id: 3,
    name: "Family Leave",
    paid: "No",
    maxDays: "5 Days",
    description: "Family-related matters",
  },
];

export default function LeaveTypePage(): JSX.Element {
  const [leaveTypes, setLeaveTypes] = useState<LeaveType[]>(leaveTypeData);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    paid: "" as "" | "Yes" | "No",
    maxDays: "",
    description: "",
  });

  const openAddModal = () => setIsAddOpen(true);
  const closeAddModal = () => {
    setIsAddOpen(false);
    setForm({ name: "", paid: "", maxDays: "", description: "" });
  };

  const handleAdd = () => {
    if (!form.name.trim()) return;

    const newItem: LeaveType = {
      id: Date.now(),
      name: form.name.trim(),
      paid: (form.paid || "No") as "Yes" | "No",
      maxDays: form.maxDays.trim() || "-",
      description: form.description.trim() || "-",
    };

    setLeaveTypes((prev) => [...prev, newItem]);
    closeAddModal();
  };

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState<LeaveType | null>(null);

  const openViewModal = (item: LeaveType) => {
    setSelectedLeave(item);
    setIsViewOpen(true);
  };

  const closeViewModal = () => {
    setIsViewOpen(false);
    setSelectedLeave(null);
  };

  // ================= EDIT MODAL STATE =================
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    paid: "" as "" | "Yes" | "No",
    maxDays: "",
    description: "",
  });

  const openEditModal = (item: LeaveType) => {
    setEditId(item.id);
    setEditForm({
      name: item.name,
      paid: item.paid,
      maxDays: item.maxDays,
      description: item.description,
    });
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
    setEditId(null);
    setEditForm({ name: "", paid: "", maxDays: "", description: "" });
  };

  const handleSaveEdit = () => {
    if (editId === null) return;
    if (!editForm.name.trim()) return;

    setLeaveTypes((prev) =>
      prev.map((lt) =>
        lt.id === editId
          ? {
              ...lt,
              name: editForm.name.trim(),
              paid: ((editForm.paid || "No") as "Yes" | "No"),
              maxDays: editForm.maxDays.trim() || "-",
              description: editForm.description.trim() || "-",
            }
          : lt
      )
    );

    closeEditModal();
  };

  // ================= DELETE MODAL STATE =================
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const openDeleteModal = (id: number) => {
    setDeleteId(id);
    setIsDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
    setDeleteId(null);
  };

  const handleConfirmDelete = () => {
    if (deleteId === null) return;
    setLeaveTypes((prev) => prev.filter((lt) => lt.id !== deleteId));
    closeDeleteModal();
  };

  return (
    <div className="p-6 dashboard-container">
      <div className="table-box">
        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-xl font-bold"
            style={{ color: "var(--color-black)" }}
          >
            Leave Type Information
          </h2>

          <button
            className="flex items-center gap-2 px-4 py-2 rounded text-white text-sm"
            style={{ background: "#2D8EFF" }}
            onClick={openAddModal}
            type="button"
          >
            <CirclePlusIcon className="w-4 h-4" />
            Add Data
          </button>
        </div>

        <div className="overflow-x-auto">
          {/* ================= TABLE  ================= */}
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr
                className="text-white text-center font-bold"
                style={{ background: "var(--color-primary)" }}
              >
                <th className="p-3 border w-12">No.</th>
                <th className="p-3 border">Leave Name</th>
                <th className="p-3 border">Paid Leave</th>
                <th className="p-3 border">Max Days</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {leaveTypes.map((item, index) => (
                <tr
                  key={item.id}
                  className="bg-white border border-gray-200 hover:bg-gray-100 transition"
                >
                  <td className="p-3 text-center border">{index + 1}</td>

                  <td className="p-3 border font-medium">{item.name}</td>

                  <td className="p-3 border text-center">{item.paid}</td>

                  <td className="p-3 border text-center">{item.maxDays}</td>

                  <td className="p-3 border">{item.description}</td>

                  <td className="p-3 border">
                    <div className="flex gap-2 justify-center">
                      <button
                        type="button"
                        onClick={() => openViewModal(item)}
                        className="px-3 py-1 rounded bg-blue-500 text-white hover:opacity-90 transition"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => openEditModal(item)}
                        className="px-3 py-1 rounded bg-yellow-500 text-white hover:opacity-90 transition"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => openDeleteModal(item.id)}
                        className="px-3 py-1 rounded bg-red-700 text-white hover:opacity-90 transition"
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

        {/* ================= ADD MODAL ================= */}
        {isAddOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
          >
            {/* overlay */}
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              onClick={closeAddModal}
              aria-label="Close modal"
            />

            {/* modal card */}
            <div className="relative w-[780px] max-w-[95vw] bg-white rounded-md shadow-lg">
              {/* title */}
              <div className="px-6 pt-6 pb-4 border-b">
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--color-black)" }}
                >
                  Add Leave Type
                </h3>
              </div>

              {/* content */}
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* left */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Leave Type
                      </label>
                      <input
                        className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                        placeholder="Insert Leave Type..."
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Paid Leave
                      </label>
                      <input
                        className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                        placeholder="Is this paid leave?"
                        value={form.paid}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            paid: e.target.value as "Yes" | "No" | "",
                          }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Max Days
                      </label>
                      <input
                        className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                        placeholder="Insert max days..."
                        value={form.maxDays}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, maxDays: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  {/* right */}
                  <div className="md:border-l md:pl-6">
                    <label className="block text-sm font-bold mb-2">
                      Description
                    </label>
                    <textarea
                      className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 min-h-[170px] resize-none"
                      placeholder="Insert Description..."
                      value={form.description}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, description: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* footer */}
              <div className="px-6 py-4 border-t flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeAddModal}
                  className="px-6 py-2 rounded-md text-sm font-bold border"
                  style={{
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                    background: "transparent",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleAdd}
                  className="px-8 py-2 rounded-md text-sm font-bold text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW MODAL ================= */}
        {isViewOpen && selectedLeave && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
          >
            {/* overlay */}
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              onClick={closeViewModal}
              aria-label="Close modal"
            />

            {/* modal card */}
            <div className="relative w-[900px] max-w-[95vw] bg-white rounded-md shadow-lg">
              {/* title */}
              <div className="px-6 pt-6 pb-4 border-b">
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--color-black)" }}
                >
                  View Leave Type
                </h3>
              </div>

              {/* content */}
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* left */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Leave Type
                      </label>
                      <input
                        className="w-full border rounded-md px-3 py-3 text-sm bg-white"
                        value={selectedLeave.name}
                        readOnly
                        disabled
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Paid Leave
                      </label>
                      <input
                        className="w-full border rounded-md px-3 py-3 text-sm bg-white"
                        value={selectedLeave.paid}
                        readOnly
                        disabled
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Max Days
                      </label>
                      <input
                        className="w-full border rounded-md px-3 py-3 text-sm bg-white"
                        value={selectedLeave.maxDays}
                        readOnly
                        disabled
                      />
                    </div>
                  </div>

                  {/* right */}
                  <div className="md:border-l md:pl-6">
                    <label className="block text-sm font-bold mb-2">
                      Description
                    </label>
                    <textarea
                      className="w-full border rounded-md px-3 py-3 text-sm bg-white min-h-[200px] resize-none"
                      value={selectedLeave.description}
                      readOnly
                      disabled
                    />
                  </div>
                </div>
              </div>

              {/* footer */}
              <div className="px-6 py-4 flex justify-end">
                <button
                  type="button"
                  onClick={closeViewModal}
                  className="px-10 py-2 rounded-md text-sm font-bold text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= EDIT MODAL ================= */}
        {isEditOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
          >
            {/* overlay */}
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              onClick={closeEditModal}
              aria-label="Close modal"
            />

            {/* modal card */}
            <div className="relative w-[900px] max-w-[95vw] bg-white rounded-md shadow-lg">
              {/* title */}
              <div className="px-6 pt-6 pb-4 border-b">
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--color-black)" }}
                >
                  Edit Leave Type
                </h3>
              </div>

              {/* content */}
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* left */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Leave Type
                      </label>
                      <input
                        className="w-full border rounded-md px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm((p) => ({ ...p, name: e.target.value }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Paid Leave
                      </label>
                      <input
                        className="w-full border rounded-md px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                        value={editForm.paid}
                        onChange={(e) =>
                          setEditForm((p) => ({
                            ...p,
                            paid: e.target.value as "Yes" | "No" | "",
                          }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Max Days
                      </label>
                      <input
                        className="w-full border rounded-md px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                        value={editForm.maxDays}
                        onChange={(e) =>
                          setEditForm((p) => ({ ...p, maxDays: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  {/* right */}
                  <div className="md:border-l md:pl-6">
                    <label className="block text-sm font-bold mb-2">
                      Description
                    </label>
                    <textarea
                      className="w-full border rounded-md px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 min-h-[200px] resize-none"
                      value={editForm.description}
                      onChange={(e) =>
                        setEditForm((p) => ({
                          ...p,
                          description: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* footer */}
              <div className="px-6 py-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-6 py-2 rounded-md text-sm font-bold border"
                  style={{
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                    background: "transparent",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="px-8 py-2 rounded-md text-sm font-bold text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= DELETE MODAL ================= */}
        {isDeleteOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
          >
            {/* overlay */}
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              onClick={closeDeleteModal}
              aria-label="Close modal"
            />

            {/* modal card */}
            <div className="relative w-[520px] max-w-[92vw] bg-white rounded-md shadow-lg">
              <div className="px-8 pt-10 pb-8">
                <h3 className="text-xl font-bold text-center">
                  Delete This Data?
                </h3>

                <div className="mt-8 flex justify-center gap-6">
                  <button
                    type="button"
                    onClick={closeDeleteModal}
                    className="w-40 py-2 rounded-md border text-sm font-bold"
                    style={{
                      borderColor: "#BDBDBD",
                      color: "#8A8A8A",
                      background: "transparent",
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleConfirmDelete}
                    className="w-40 py-2 rounded-md text-sm font-bold text-white"
                    style={{ background: "#C00000" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
