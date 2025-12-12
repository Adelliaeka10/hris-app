"use client";

import * as React from "react";
import { CirclePlus, Eye, Pencil, Trash2 } from "lucide-react";

type WorkScheduleRow = {
  id: number;
  companyId: string;
  scheduleGroup: string;
  dayOfWeek: string;
  startTime: string;
  breakStart: string;
  breakEnd: string;
  endTime: string;
};

const scheduleGroups = [
  "Security Reguler",
  "Employee Morning Shift",
  "Employee Day Shift",
] as const;

const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

const timeToDot = (v: string) => (v ? v.replace(":", ".") : "");
const dotToTime = (v: string) => (v ? v.replace(".", ":") : "");

const initialRows: WorkScheduleRow[] = [
  {
    id: 1,
    companyId: "536",
    scheduleGroup: "Security Reguler",
    dayOfWeek: "Monday",
    startTime: "08.00",
    breakStart: "12.00",
    breakEnd: "13.00",
    endTime: "16.00",
  },
  {
    id: 2,
    companyId: "536",
    scheduleGroup: "Employee Morning Shift",
    dayOfWeek: "Monday",
    startTime: "07.00",
    breakStart: "12.00",
    breakEnd: "13.00",
    endTime: "16.00",
  },
  {
    id: 3,
    companyId: "536",
    scheduleGroup: "Employee Day Shift",
    dayOfWeek: "Monday",
    startTime: "13.00",
    breakStart: "08.00",
    breakEnd: "16.00",
    endTime: "19.00",
  },
];

export default function WorkScheduleAdminPage() {
  const [rows, setRows] = React.useState<WorkScheduleRow[]>(initialRows);

  /* ---------------------- ADD MODAL ---------------------- */

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [form, setForm] = React.useState<Omit<WorkScheduleRow, "id">>({
    companyId: "",
    scheduleGroup: "Security Reguler",
    dayOfWeek: "Monday",
    startTime: "",
    breakStart: "",
    breakEnd: "",
    endTime: "",
  });

  const openAdd = () => {
    setForm({
      companyId: "",
      scheduleGroup: "Security Reguler",
      dayOfWeek: "Monday",
      startTime: "",
      breakStart: "",
      breakEnd: "",
      endTime: "",
    });
    setShowAddModal(true);
  };

  const closeAdd = () => setShowAddModal(false);

  const handleSaveAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.companyId ||
      !form.scheduleGroup ||
      !form.dayOfWeek ||
      !form.startTime ||
      !form.breakStart ||
      !form.breakEnd ||
      !form.endTime
    ) {
      alert("Semua field wajib diisi.");
      return;
    }

    const nextId = Math.max(0, ...rows.map((r) => r.id)) + 1;

    setRows((prev) => [
      ...prev,
      {
        id: nextId,
        ...form,
        startTime: timeToDot(form.startTime),
        endTime: timeToDot(form.endTime),
        breakStart: timeToDot(form.breakStart),
        breakEnd: timeToDot(form.breakEnd),
      },
    ]);

    closeAdd();
  };

  /* ---------------------- VIEW MODAL ---------------------- */

  const [showViewModal, setShowViewModal] = React.useState(false);
  const [selectedView, setSelectedView] =
    React.useState<WorkScheduleRow | null>(null);

  const openViewModal = (row: WorkScheduleRow) => {
    setSelectedView({
      ...row,
      startTime: dotToTime(row.startTime),
      endTime: dotToTime(row.endTime),
      breakStart: dotToTime(row.breakStart),
      breakEnd: dotToTime(row.breakEnd),
    });
    setShowViewModal(true);
  };

  const closeViewModal = () => setShowViewModal(false);

  /* ---------------------- EDIT MODAL ---------------------- */

  const [showEditModal, setShowEditModal] = React.useState(false);
  const [editForm, setEditForm] = React.useState<WorkScheduleRow | null>(null);

  const openEditModal = (row: WorkScheduleRow) => {
    setEditForm({
      ...row,
      startTime: dotToTime(row.startTime),
      endTime: dotToTime(row.endTime),
      breakStart: dotToTime(row.breakStart),
      breakEnd: dotToTime(row.breakEnd),
    });
    setShowEditModal(true);
  };

  const closeEditModal = () => setShowEditModal(false);

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!editForm) return;

    setRows((prev) =>
      prev.map((r) =>
        r.id === editForm.id
          ? {
              ...editForm,
              startTime: timeToDot(editForm.startTime),
              endTime: timeToDot(editForm.endTime),
              breakStart: timeToDot(editForm.breakStart),
              breakEnd: timeToDot(editForm.breakEnd),
            }
          : r
      )
    );

    closeEditModal();
  };

  /* ---------------------- DELETE MODAL ---------------------- */

  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [deleteTarget, setDeleteTarget] =
    React.useState<WorkScheduleRow | null>(null);

  const openDeleteModal = (row: WorkScheduleRow) => {
    setDeleteTarget(row);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => setShowDeleteModal(false);

  const handleDelete = () => {
    if (deleteTarget) {
      setRows((prev) => prev.filter((x) => x.id !== deleteTarget.id));
      closeDeleteModal();
    }
  };

  /* ---------------------- PAGE RENDER ---------------------- */

  return (
    <div className="p-6 dashboard-container">
      {/* HEADER */}
      <div className="table-box">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold card-title" style={{ color: "var(--color-black)" }}>
            Work Schedule Information
          </h2>

          <button
            onClick={openAdd}
            className="px-3 py-2 rounded text-white font-bold"
            style={{ background: "#2D8EFF" }}
          >
            <span className="inline-flex items-center gap-2">
              <CirclePlus className="w-4 h-4" />
              Add Data
            </span>
          </button>
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
                <th className="p-3 border">Company ID</th>
                <th className="p-3 border">Schedule Group</th>
                <th className="p-3 border">Day of Week</th>
                <th className="p-3 border">Start Time</th>
                <th className="p-3 border">Break Start</th>
                <th className="p-3 border">Break End</th>
                <th className="p-3 border">End Time</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, index) => (
                <tr key={r.id} className="border hover:bg-gray-100">
                  <td className="p-3 text-center border">{index + 1}</td>
                  <td className="p-3 text-center border">{r.companyId}</td>
                  <td className="p-3 border">{r.scheduleGroup}</td>
                  <td className="p-3 text-center border">{r.dayOfWeek}</td>
                  <td className="p-3 text-center border">{r.startTime}</td>
                  <td className="p-3 text-center border">{r.breakStart}</td>
                  <td className="p-3 text-center border">{r.breakEnd}</td>
                  <td className="p-3 text-center border">{r.endTime}</td>

                  <td className="p-3 flex gap-2 justify-center border">
                    <button
                      onClick={() => openViewModal(r)}
                      className="px-3 py-1 rounded text-white"
                      style={{ background: "#2D8EFF" }}
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => openEditModal(r)}
                      className="px-3 py-1 rounded text-white bg-yellow-500"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => openDeleteModal(r)}
                      className="px-3 py-1 rounded text-white bg-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50">
          <div className="modal-content max-w-3xl">
            <h3 className="modal-title border-b pb-3 mb-6 font-bold" style={{ color: "var(--color-black)" }}>
              Add Work Schedule
            </h3>

            <form onSubmit={handleSaveAdd}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Company ID</label>
                  <input
                    className="input"
                    placeholder="Insert Company ID"
                    value={form.companyId}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, companyId: e.target.value }))
                    }
                  />
                </div>

                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Day of Week</label>
                  <select
                    className="input"
                    value={form.dayOfWeek}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, dayOfWeek: e.target.value }))
                    }
                  >
                    {dayOptions.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Schedule Group</label>
                  <select
                    className="input"
                    value={form.scheduleGroup}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, scheduleGroup: e.target.value }))
                    }
                  >
                    {scheduleGroups.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Work (Start - End)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="time"
                      className="input"
                      value={form.startTime}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, startTime: e.target.value }))
                      }
                    />
                    <span>-</span>
                    <input
                      type="time"
                      className="input"
                      value={form.endTime}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, endTime: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Break (Start - End)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="time"
                      className="input"
                      value={form.breakStart}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, breakStart: e.target.value }))
                      }
                    />
                    <span>-</span>
                    <input
                      type="time"
                      className="input"
                      value={form.breakEnd}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, breakEnd: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer gap-3">
                <button
                  onClick={closeAdd}
                  type="button"
                  className="btn-cancel font-bold" style={{ color: "var(--color-primary)" }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ background: "var(--color-primary)" }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {showViewModal && selectedView && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50">
          <div className="modal-content max-w-3xl">
            <h3 className="modal-title border-b pb-3 mb-6 font-bold" style={{ color: "var(--color-black)" }}>
              View Work Schedule
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Company ID</label>
                <input className="input" readOnly value={selectedView.companyId} />
              </div>

              <div>
                <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Day of Week</label>
                <input className="input" readOnly value={selectedView.dayOfWeek} />
              </div>

              <div className="md:col-span-2">
                <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Schedule Group</label>
                <input className="input" readOnly value={selectedView.scheduleGroup} />
              </div>

              <div className="md:col-span-2">
                <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Work (Start - End)</label>
                <div className="flex items-center gap-3">
                  <input className="input" readOnly value={selectedView.startTime} />
                  <span>-</span>
                  <input className="input" readOnly value={selectedView.endTime} />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Break (Start - End)</label>
                <div className="flex items-center gap-3">
                  <input className="input" readOnly value={selectedView.breakStart} />
                  <span>-</span>
                  <input className="input" readOnly value={selectedView.breakEnd} />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                onClick={closeViewModal}
                className="btn-primary"
                style={{ background: "var(--color-primary)" }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {showEditModal && editForm && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50">
          <div className="modal-content max-w-3xl">
            <h3 className="modal-title border-b pb-3 mb-6 font-bold" style={{ color: "var(--color-black)" }}>
              Edit Work Schedule
            </h3>

            <form onSubmit={handleSaveEdit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Company ID</label>
                  <input
                    className="input"
                    value={editForm.companyId}
                    onChange={(e) =>
                      setEditForm((p) => ({
                        ...(p as any),
                        companyId: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Day of Week</label>
                  <select
                    className="input"
                    value={editForm.dayOfWeek}
                    onChange={(e) =>
                      setEditForm((p) => ({
                        ...(p as any),
                        dayOfWeek: e.target.value,
                      }))
                    }
                  >
                    {dayOptions.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Schedule Group</label>
                  <select
                    className="input"
                    value={editForm.scheduleGroup}
                    onChange={(e) =>
                      setEditForm((p) => ({
                        ...(p as any),
                        scheduleGroup: e.target.value,
                      }))
                    }
                  >
                    {scheduleGroups.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Work (Start - End)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="time"
                      className="input"
                      value={editForm.startTime}
                      onChange={(e) =>
                        setEditForm((p) => ({
                          ...(p as any),
                          startTime: e.target.value,
                        }))
                      }
                    />
                    <span>-</span>
                    <input
                      type="time"
                      className="input"
                      value={editForm.endTime}
                      onChange={(e) =>
                        setEditForm((p) => ({
                          ...(p as any),
                          endTime: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Break (Start - End)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="time"
                      className="input"
                      value={editForm.breakStart}
                      onChange={(e) =>
                        setEditForm((p) => ({
                          ...(p as any),
                          breakStart: e.target.value,
                        }))
                      }
                    />
                    <span>-</span>
                    <input
                      type="time"
                      className="input"
                      value={editForm.breakEnd}
                      onChange={(e) =>
                        setEditForm((p) => ({
                          ...(p as any),
                          breakEnd: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer gap-3">
                <button
                  onClick={closeEditModal}
                  type="button"
                  className="btn-cancel font-bold" style={{ color: "var(--color-primary)" }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ background: "var(--color-primary)" }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {showDeleteModal && deleteTarget && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50">
          <div className="modal-delete">
            <h3 className="modal-delete-title">Delete This Data?</h3>

            <div className="modal-delete-actions">
              <button onClick={closeDeleteModal} className="btn-cancel">
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
