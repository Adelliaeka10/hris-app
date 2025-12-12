"use client";

import React, { useState } from "react";
import { CirclePlus, Check, X, Eye, Pencil, Trash2, Upload } from "lucide-react";

/* ========================================================================
   SAMPLE DATA
   ======================================================================== */
const leavesData = [
  {
    employeeName: "Courtney Henry",
    no: 1,
    type: "Sick Leave",
    start: "2025-11-25",
    end: "2025-11-25",
    reason: "Medical Check Up",
    attachment: "/img/sample-attachment.jpg",
    status: "Approved",
    approvedAt: "11:24:08",
    rejectedReason: "",
  },
  {
    employeeName: "Courtney Henry",
    no: 2,
    type: "Family Leave",
    start: "2025-11-23",
    end: "2025-11-24",
    reason: "Sister's Wedding",
    attachment: "/img/sample-attachment.jpg",
    status: "Pending",
    approvedAt: "-",
    rejectedReason: "",
  },
  {
    employeeName: "Courtney Henry",
    no: 3,
    type: "Annual Leave",
    start: "2025-11-15",
    end: "2025-11-16",
    reason: "Break after project completion",
    attachment: "/img/sample-attachment.jpg",
    status: "Approved",
    approvedAt: "07:10:15",
    rejectedReason: "",
  },
];

/* ========================================================================
   MAIN COMPONENT
   ======================================================================== */
export default function LeavesPage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [addModal, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(null);

  /* ---------------------------------------------------------------
     STATUS ICON HANDLER
     --------------------------------------------------------------- */
  const statusIcon = (status: string) => {
  if (status === "Approved")
    return (
      <div className="flex items-center gap-2">
        <Check className="text-green-600" size={18} />
        <span className="text-green-700 font-medium"></span>
      </div>
    );

  if (status === "Rejected")
    return (
      <div className="flex items-center gap-2">
        <X className="text-red-600" size={18} />
        <span className="text-red-700 font-medium"></span>
      </div>
    );

     // PENDING → TEXT ONLY
  return (
    <span className="text-yellow-600 font-medium">
    </span>
  );
};

  /* ---------------------------------------------------------------
     OPEN MODALS
     --------------------------------------------------------------- */
  const openViewModal = (row: any) => {
    setSelectedRow(row);
    setViewModal(true);
  };

  const openEditModal = (row: any) => {
    setSelectedRow({ ...row });
    setEditModal(true);
  };

  const openDeleteModal = (row: any) => {
    setSelectedRow(row);
    setDeleteModal(true);
  };

  /* ---------------------------------------------------------------
     HANDLE EDIT FORM INPUTS
     --------------------------------------------------------------- */
  const updateField = (key: string, value: string) => {
    setSelectedRow((prev: any) => ({ ...prev, [key]: value }));
  };

  const updateAttachment = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setSelectedRow((prev: any) => ({ ...prev, attachment: url }));
  };

  return (
    <div className="p-6 dashboard-container">
      <div className="card border border-gray-200 shadow-sm">

        {/* ------------------------------------------------------------------ */}
        {/* HEADER */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold" style={{ color: "var(--color-black)" }}>Leaves Information</h2>

          <button
            onClick={() => setAddModal(true)}
            className="flex items-center font-bold px-4 py-2 rounded-md text-white"
            style={{ background: "#2D8EFF" }}
          >
            <CirclePlus className="w-4 h-4 mr-2" /> Add Data
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TABLE */}
        {/* ------------------------------------------------------------------ */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr
                className="text-white text-center font-bold"
                style={{ background: "var(--color-primary)" }}
              >
                <th className="p-3 border">No.</th>
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
              {leavesData.map((row, i) => (
                <tr
                  key={i}
                  className="border text-center bg-white hover:bg-gray-50 transition"
                >
                  <td className="p-3 border">{row.no}</td>
                  <td className="p-3 border">{row.type}</td>
                  <td className="p-3 border">{row.start}</td>
                  <td className="p-3 border">{row.end}</td>
                  <td className="p-3 border">{Math.floor((new Date(row.end).getTime() - new Date(row.start).getTime()) / 86400000) + 1}</td>
                  <td className="p-3 border">{row.reason}</td>

                  <td className="p-3 border">
                    <img
                      src={row.attachment}
                      className="w-10 h-10 rounded object-cover border mx-auto cursor-pointer"
                      onClick={() => setPreviewImage(row.attachment)}
                    />
                  </td>

                  <td className="p-3 border">{statusIcon(row.status)}</td>
                  <td className="p-3 border">{row.approvedAt}</td>
                  <td className="p-3 border">{row.rejectedReason || "-"}</td>

                  <td className="p-3 border">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => openViewModal(row)}
                        className="p-2 rounded text-white bg-blue-500"
                      >
                        <Eye size={14} />
                      </button>

                      <button
                        onClick={() => openEditModal(row)}
                        className="p-2 rounded text-white bg-yellow-500"
                      >
                        <Pencil size={14} />
                      </button>

                      <button
                        onClick={() => openDeleteModal(row)}
                        className="p-2 rounded text-white bg-red-700"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* =========================== ADD MODAL =============================== */}
{addModal && (
  <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
    <div className="bg-white rounded-lg w-[1000px] shadow-xl max-h-[90vh] overflow-hidden">

      {/* HEADER */}
      <div className="px-8 py-6 border-b">
        <h2 className="text-xl font-semibold" style={{ color: "var(--color-black)" }}>Add Request Leave</h2>
      </div>

      {/* FORM CONTAINER WITH DIVIDER */}
      <div className="grid grid-cols-2 gap-10 px-8 py-10 relative">

        {/* --- Vertical Divider --- */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

        {/* LEFT SECTION */}
        <div className="space-y-8 pr-6">

          {/* EMPLOYEE NAME */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Employee Name</label>
            <input className="input h-12" placeholder="" />
          </div>

          {/* LEAVE TYPE */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Leave Type</label>
            <select className="input h-12 bg-white">
              <option value="">Select Leave Type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Family Leave">Family Leave</option>
            </select>
          </div>

          {/* DATE RANGE */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Date (Start - End)</label>
            <div className="flex items-center gap-3">
              <input type="date" className="input h-12" />
              <span className="text-gray-600 text-xl">—</span>
              <input type="date" className="input h-12" />
            </div>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-8 pl-8">

          {/* REASON */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Reason</label>
            <input className="input h-12" placeholder="" />
          </div>

          {/* ATTACHMENT */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Attachment</label>

            <label className="
              upload-box border border-gray-300 border-dashed rounded-lg
              w-full h-[180px] p-6
              flex flex-col items-center justify-center cursor-pointer
              hover:bg-gray-50 transition
            ">
              <Upload size={36} className="text-gray-400" />
              <p className="text-sm text-gray-600 mt-2">Drag and Drop Photo</p>
              <span className="text-sm text-gray-700">Browse</span>
              <input type="file" className="hidden" />
            </label>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-end items-center gap-4 px-8 py-6">

        {/* CANCEL */}
        <button
          onClick={() => setAddModal(false)}
          className="px-6 py-2 border border-[#1D3A5E] text-[#1D3A5E] rounded-md font-bold hover:bg-gray-100"
        >
          Cancel
        </button>

        {/* ADD */}
        <button className="px-10 py-2 bg-[#1D3A5E] text-white rounded-md font-bold hover:opacity-90">
          Add
        </button>

      </div>

    </div>
  </div>
)}



        {/* ======================= VIEW MODAL ======================= */}
{viewModal && selectedRow && (
  <div className="fixed inset-0 modal-backdrop flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-xl w-[1000px] max-h-[90vh] overflow-hidden">

      {/* HEADER */}
      <div className="px-8 py-6 border-b">
        <h2 className="text-xl font-bold" style={{ color: "var(--color-black)" }}>View Request Leave</h2>
      </div>

      {/* CONTENT */}
      <div className="px-8 py-10 grid grid-cols-2 gap-10 relative">

        {/* Vertical Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

        {/* LEFT SIDE */}
        <div className="space-y-6 pr-6">

          {/* Employee Name */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Employee Name</label>
            <input
              value={selectedRow.employeeName}
              readOnly
              className="input h-12 bg-gray-100"
            />
          </div>

          {/* Leave Type */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Leave Type</label>
            <input
              value={selectedRow.type}
              readOnly
              className="input h-12 bg-gray-100"
            />
          </div>

          {/* Date Range */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Date (Start - End)</label>
            <div className="flex items-center gap-4">
              <input
                value={selectedRow.start}
                readOnly
                className="input h-12 bg-gray-100"
              />
              <span className="text-xl text-gray-600">—</span>
              <input
                value={selectedRow.end}
                readOnly
                className="input h-12 bg-gray-100"
              />
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Reason</label>
            <input
              value={selectedRow.reason}
              readOnly
              className="input h-12 bg-gray-100"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 pl-6">

          {/* Attachment */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Attachment</label>

            <div className="flex items-center gap-3">
              <img
                src={selectedRow.attachment}
                className="w-14 h-14 rounded border object-cover"
              />

              <button
                onClick={() => setPreviewImage(selectedRow.attachment)}
              >
              </button>
            </div>
          </div>

          {/* Status */}
          <div>
  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Status</label>

  {/* APPROVED */}
  {selectedRow.status === "Approved" && (
    <div className="flex items-center gap-2">
      <Check size={18} className="text-green-600" />
      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-md text-sm font-medium">
        Approved
      </span>
    </div>
  )}

  {/* REJECTED */}
  {selectedRow.status === "Rejected" && (
    <div className="flex items-center gap-2">
      <X size={18} className="text-red-600" />
      <span className="bg-red-100 text-red-700 px-4 py-1 rounded-md text-sm font-medium">
        Rejected
      </span>
    </div>
  )}

  {/* PENDING */}
  {selectedRow.status === "Pending" && (
    <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-md text-sm font-medium">
      Pending
    </span>
  )}
</div>


          {/* Approved At */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Approved At</label>
            <input
              value={selectedRow.approvedAt}
              readOnly
              className="input h-12 bg-gray-100"
            />
          </div>

          {/* Rejected Reason */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Reason Rejected</label>
            <input
              value={selectedRow.rejectedReason || "-"}
              readOnly
              className="input h-12 bg-gray-100"
            />
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="flex justify-end px-8 py-6">

        <button
          onClick={() => setViewModal(false)}
          className="bg-[#1D3A5E] text-white px-10 py-2 rounded-md font-bold hover:opacity-90"
        >
          Back
        </button>

      </div>

    </div>
  </div>
)}

       {/* ======================= EDIT MODAL ======================= */}
{editModal && selectedRow && (
  <div className="fixed inset-0 modal-backdrop flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-xl w-[1000px] max-h-[90vh] overflow-hidden">

      {/* HEADER */}
      <div className="px-8 py-6 border-b">
        <h2 className="text-xl font-bold" style={{ color: "var(--color-black)" }}>Edit Request Leave</h2>
      </div>

      {/* CONTENT AREA */}
      <div className="px-8 py-10 grid grid-cols-2 gap-10 relative">

        {/* Vertical Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

        {/* LEFT SIDE FORM */}
        <div className="space-y-6 pr-6">

          {/* Employee Name */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Employee Name</label>
            <input
              className="input h-12"
              defaultValue={selectedRow.employeeName}
              onChange={(e) => updateField("employeeName", e.target.value)}
            />
          </div>

          {/* Leave Type */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Leave Type</label>
            <select
              className="input h-12 bg-white"
              defaultValue={selectedRow.type}
              onChange={(e) => updateField("type", e.target.value)}
            >
              <option value="Sick Leave">Sick Leave</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Family Leave">Family Leave</option>
            </select>
          </div>

          {/* Date Range */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Date (Start - End)</label>
            <div className="flex items-center gap-4">
              <input
                type="date"
                className="input h-12"
                defaultValue={selectedRow.start}
                onChange={(e) => updateField("start", e.target.value)}
              />
              <span className="text-xl text-gray-600">—</span>
              <input
                type="date"
                className="input h-12"
                defaultValue={selectedRow.end}
                onChange={(e) => updateField("end", e.target.value)}
              />
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Reason</label>
            <input
              className="input h-12"
              defaultValue={selectedRow.reason}
              onChange={(e) => updateField("reason", e.target.value)}
            />
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="space-y-6 pl-6">

          {/* ATTACHMENT */}
<div>
  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Attachment</label>

  <div className="flex items-center gap-4">

    {/* Preview Image */}
    <div className="w-16 h-16 border rounded-md overflow-hidden flex items-center justify-center bg-gray-50">
      <img
        src={selectedRow.attachment}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Buttons Group */}
    <div className="flex flex-col gap-2">

      {/* VIEW BUTTON */}
      <button
        onClick={() => setPreviewImage(selectedRow.attachment)}>
      </button>

      {/* UPLOAD NEW BUTTON */}
      <label className="border px-4 py-1 rounded-md text-sm cursor-pointer bg-gray-50 hover:bg-gray-100 text-gray-700 flex items-center justify-center">
        Upload New
        <input type="file" className="hidden" onChange={updateAttachment} />
      </label>

    </div>

  </div>
</div>


          {/* Status */}
<div>
  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Status</label>

  {/* APPROVED */}
  {selectedRow.status === "Approved" && (
    <div className="flex items-center gap-2">
      <Check size={18} className="text-green-600" />
      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-md text-sm font-medium">
        Approved
      </span>
    </div>
  )}

  {/* REJECTED */}
  {selectedRow.status === "Rejected" && (
    <div className="flex items-center gap-2">
      <X size={18} className="text-red-600" />
      <span className="bg-red-100 text-red-700 px-4 py-1 rounded-md text-sm font-medium">
        Rejected
      </span>
    </div>
  )}

  {/* PENDING – hanya tulisan */}
  {selectedRow.status === "Pending" && (
    <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-md text-sm font-medium">
      Pending
    </span>
  )}
</div>


          {/* Approved At */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Approved At</label>
            <input
              className="input h-12 bg-gray-100"
              readOnly
              value={selectedRow.approvedAt || "-"}
            />
          </div>

          {/* Rejected Reason */}
          <div>
            <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Reason Rejected</label>
            <input
              className="input h-12 bg-gray-100"
              readOnly
              value={selectedRow.rejectedReason || "-"}
            />
          </div>
        </div>

      </div>

      {/* FOOTER BUTTONS */}
      <div className="flex justify-end gap-3 px-8 py-6">

        <button
          onClick={() => setEditModal(false)}
          className="px-6 py-2 border border-[#1D3A5E] text-[#1D3A5E] rounded-md font-bold hover:bg-gray-100"
        >
          Cancel
        </button>

        <button className="px-8 py-2 rounded-md text-white font-bold"
          style={{ background: "var(--color-primary)" }}
        >
          Save
        </button>

      </div>

    </div>
  </div>
)}


        {/* ===================================================================== */}
        {/* =============================== DELETE MODAL ========================== */}
        {/* ===================================================================== */}

        {deleteModal && selectedRow && (
          <div className="fixed inset-0 modal-backdrop flex justify-center items-center z-50">
            <div className="modal-delete">

              <h3 className="modal-delete-title">Delete This Data?</h3>

              <div className="modal-delete-actions">
                <button
                  onClick={() => setDeleteModal(false)}
                  className="btn-cancel"
                >
                  Cancel
                </button>

                <button
                  onClick={() => setDeleteModal(false)}
                  className="btn-danger"
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* =============================== IMAGE PREVIEW ======================== */}
        {/* ===================================================================== */}

        {previewImage && (
          <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
            <div className="modal-content max-w-lg p-4">
              <img src={previewImage} className="max-h-[70vh] mx-auto rounded" />

              <button
                onClick={() => setPreviewImage(null)}
                className="btn-danger mt-4 w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
