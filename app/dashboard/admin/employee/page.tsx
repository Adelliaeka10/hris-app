"use client";

import { useState, useRef } from "react";
import {
  Eye,
  Trash,
  CirclePlus,
  CircleArrowLeft,
  Pencil,
  Upload,
  Download
} from "lucide-react";
import * as XLSX from "xlsx";
import Image from "next/image";

const employees = [
  { id: 1, name: "Jacob Jones", nik: 3933, gender: "Male", phone: "(252) 555-0126", dept: "IT", position: "Frontend Engineer" },
  { id: 2, name: "Darlene Robertson", nik: 5028, gender: "Female", phone: "(307) 555-0133", dept: "IT", position: "Backend Engineer" },
];

export default function EmployeePage() {
  const [employeeList, setEmployeeList] = useState(employees);
  const [selectedEmployee, setSelectedEmployee] = useState<any | null>(null);
  const [editEmployee, setEditEmployee] = useState<any | null>(null);
  const [deleteEmployee, setDeleteEmployee] = useState<any | null>(null);
  const [addEmployee, setAddEmployee] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);


  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    address: "",
    email: "",
    dob: "",
    password: "",
    department: "",
    fullName: "",
    position: "",
    nik: "",
    status: "",
    gender: "",
    promotionHistory: "",
    phone: "",
    scheduleGroup: "",
  });

  const handleDelete = () => {
    setEmployeeList(employeeList.filter(emp => emp.id !== deleteEmployee.id));
    setDeleteEmployee(null);
  };

  const handleUpdateEmployee = () => {
  setEmployeeList((prev) =>
    prev.map((emp) =>
      emp.id === editEmployee.id
        ? {
            ...emp,
            name: editEmployee.fullName,
            nik: editEmployee.nik,
            gender: editEmployee.gender,
            phone: editEmployee.phone,
            dept: editEmployee.department,
            position: editEmployee.position,
          }
        : emp
    )
  );
  setEditEmployee(null);
};

  const formatDateForInput = (date?: string) => {
  if (!date) return "";

  // jika sudah format YYYY-MM-DD
  if (date.includes("-")) return date;

  // jika format DD/MM/YYYY
  const [day, month, year] = date.split("/");
  return `${year}-${month}-${day}`;
};

// ================= EXPORT EXCEL =================
const handleExportExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(employeeList);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
  XLSX.writeFile(workbook, "employee-data.xlsx");
};

// ================= IMPORT EXCEL =================
const handleImportExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (evt) => {
    const data = evt.target?.result;
    const workbook = XLSX.read(data, { type: "binary" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json<any>(worksheet);

    const formattedData = jsonData.map((item, index) => ({
      id: item.id ?? Date.now() + index,
      name: item.name || item.fullName,
      nik: item.nik,
      gender: item.gender,
      phone: item.phone,
      dept: item.department || item.dept,
      position: item.position,
      ...item,
    }));

    setEmployeeList(formattedData);
  };

  reader.readAsBinaryString(file);
};

  return (
    <div className="p-6 overflow-y-auto">

      {/* ================= HEADER ================= */}
      <div className="card card-shadow border border-gray-200">
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="text-lg font-bold">All Employee Information</h2>

      {/* 🔥 BUTTON GROUP */}
      <div className="flex items-center justify-end gap-1">
        <button
          onClick={handleExportExcel}
          className="flex items-center bg-green-600 text-white px-3 py-2 rounded-md text-sm font-bold"
        >
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center bg-purple-600 text-white px-3 py-2 rounded-md text-sm font-bold"
        >
          <Upload className="w-4 h-4 mr-2" />
          Import
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImportExcel}
          accept=".xlsx,.xls"
          className="hidden"
        />

        <button
          onClick={() => setAddEmployee(true)}
          className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-bold"
        >
          <CirclePlus className="w-4 h-4 mr-2" />
          Add Data
        </button>
      </div>
    </div>

        {/* ================= TABLE ================= */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-white" style={{ background: "var(--color-primary)" }}>
                <th className="p-3 border">No</th>
                <th className="p-3 border">Full Name</th>
                <th className="p-3 border">NIK</th>
                <th className="p-3 border">Gender</th>
                <th className="p-3 border">Mobile Number</th>
                <th className="p-3 border">Department</th>
                <th className="p-3 border">Position</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((emp, i) => (
                <tr key={emp.id} className="hover:bg-gray-100">
                  <td className="p-3 border text-center">{i + 1}</td>
                  <td className="p-3 border">{emp.name}</td>
                  <td className="p-3 border">{emp.nik}</td>
                  <td className="p-3 border">{emp.gender}</td>
                  <td className="p-3 border">{emp.phone}</td>
                  <td className="p-3 border">{emp.dept}</td>
                  <td className="p-3 border">{emp.position}</td>
                  <td className="p-3 border flex justify-center gap-2">
                    <button onClick={() => setSelectedEmployee(emp)} className="p-2 bg-blue-500 text-white rounded">
                      <Eye size={16} />
                    </button>
                    <button onClick={() => setEditEmployee(emp)} className="p-2 bg-yellow-500 text-white rounded">
                      <Pencil size={16} />
                    </button>
                    <button onClick={() => setDeleteEmployee(emp)} className="p-2 bg-red-600 text-white rounded">
                      <Trash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= ADD MODAL ================= */}
      {addEmployee && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
          <div
            className="modal-content w-[96vw] max-w-none px-12"
            style={{ maxWidth: "40vw" }}
          >

            {/* Header */}
            <div className="modal-header">
              <button
                onClick={() => setAddEmployee(false)}
                className="modal-back-btn"
              >
                <CircleArrowLeft />
              </button>
              <h2 className="modal-title">Add Employee</h2>
            </div>

            {/* Body */}
            <div className="modal-body grid grid-cols-2 gap-x-6 gap-y-4">

            {/* ===== KOLOM KIRI ===== */}
            <div>
              <label className="input-label">First Name</label>
              <input
                className="input"
                value={newEmployee.firstName}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, firstName: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Address</label>
              <input
                className="input"
                value={newEmployee.address}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, address: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Email</label>
              <input
                className="input"
                value={newEmployee.email}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Date of Birth</label>
              <input
                type="date"
                className="input"
                value={newEmployee.dob}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, dob: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Password</label>
              <input
                type="password"
                className="input"
                value={newEmployee.password}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, password: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Department</label>
              <input
                className="input"
                value={newEmployee.department}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, department: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Full Name</label>
              <input
                className="input"
                value={newEmployee.fullName}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, fullName: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Position</label>
              <input
                className="input"
                value={newEmployee.position}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, position: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">NIK</label>
              <input
                className="input"
                value={newEmployee.nik}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, nik: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Status</label>
              <input
                className="input"
                value={newEmployee.status}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, status: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Gender</label>
              <input
                className="input"
                value={newEmployee.gender}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, gender: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Promotion History</label>
              <input
                className="input"
                value={newEmployee.promotionHistory}
                onChange={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    promotionHistory: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="input-label">Mobile Number</label>
              <input
                className="input"
                value={newEmployee.phone}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input-label">Schedule Group</label>
              <select
                className="input"
                value={newEmployee.scheduleGroup}
                onChange={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    scheduleGroup: e.target.value,
                  })
                }
              >
                <option value="">Select Schedule Group</option>
                <option value="Security Reguler">Security Reguler</option>
                <option value="Employee Morning Shift">Employee Morning Shift</option>
                <option value="Employee Day Shift">Employee Day Shift</option>
              </select>
            </div>
          </div>

            {/* Footer */}
            <div className="modal-footer mt-6">
              <button
                onClick={() => setAddEmployee(false)}
                className="btn-primary w-full"
              >
                Add Data
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= VIEW MODAL ================= */}
      {selectedEmployee && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
          <div
            className="modal-content w-[96vw] max-w-none px-12"
            style={{ maxWidth: "40vw" }}
          >

            {/* Header */}
            <div className="modal-header">
              <button
                onClick={() => setSelectedEmployee(null)}
                className="modal-back-btn"
              >
                <CircleArrowLeft />
              </button>
              <h2 className="modal-title">View Employee</h2>
            </div>

            {/* Body */}
            <div className="modal-body grid grid-cols-2 gap-x-6 gap-y-4 mt-6">

              <div>
                <label className="input-label">First Name</label>
                <input className="input" value="Jacob" disabled />
              </div>

              <div>
                <label className="input-label">Address</label>
                <input className="input" value="Jl Mangga No. 11, Malang" disabled />
              </div>

              <div>
                <label className="input-label">Email</label>
                <input className="input" value="jacobjones@gmail.com" disabled />
              </div>

              <div>
                <label className="input-label">Date of Birth</label>
                <input className="input" value="12/10/2002" disabled />
              </div>

              <div>
                <label className="input-label">Employee ID</label>
                <input className="input" value="EMP-C2-0512250001" disabled />
              </div>

              <div>
                <label className="input-label">Department</label>
                <input className="input" value={selectedEmployee.dept} disabled />
              </div>

              <div>
                <label className="input-label">Full Name</label>
                <input className="input" value={selectedEmployee.name} disabled />
              </div>

              <div>
                <label className="input-label">Position</label>
                <input className="input" value={selectedEmployee.position} disabled />
              </div>

              <div>
                <label className="input-label">NIK</label>
                <input className="input" value={selectedEmployee.nik} disabled />
              </div>

              <div>
                <label className="input-label">Status</label>
                <input className="input" value="Active" disabled />
              </div>

              <div>
                <label className="input-label">Gender</label>
                <input className="input" value={selectedEmployee.gender} disabled />
              </div>

              <div>
                <label className="input-label">Promotion History</label>
                <input
                  className="input"
                  value="Promoted to Manager in 2025"
                  disabled
                />
              </div>

              <div>
                <label className="input-label">Mobile Number</label>
                <input className="input" value={selectedEmployee.phone} disabled />
              </div>

              <div>
                <label className="input-label">Schedule Group</label>
                <input className="input" value="Reguler" disabled />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDIT MODAL ================= */}
      {editEmployee && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
          <div
            className="modal-content w-[96vw] max-w-none px-12"
            style={{ maxWidth: "45vw" }}
          >
            {/* Header */}
            <div className="modal-header">
              <button
                onClick={() => setEditEmployee(null)}
                className="modal-back-btn"
              >
                <CircleArrowLeft />
              </button>
              <h2 className="modal-title">Edit Employee</h2>
            </div>

            {/* Body */}
            <div className="modal-body grid grid-cols-2 gap-x-6 gap-y-4 mt-6">

              {/* LEFT */}
              <div>
                <label className="input-label">First Name</label>
                <input
                  className="input"
                  value={editEmployee.firstName || editEmployee.name?.split(" ")[0]}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, firstName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">Date of Birth</label>
                <input
                  type="date"
                  className="input"
                  value={formatDateForInput(editEmployee.dob || "12/10/2002")}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, dob: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">Email</label>
                <input
                  className="input"
                  value={editEmployee.email || "jacobjones@gmail.com"}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">Department</label>
                <input
                  className="input"
                  value={editEmployee.department || editEmployee.dept}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, department: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">Full Name</label>
                <input
                  className="input"
                  value={editEmployee.fullName || editEmployee.name}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, fullName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">Position</label>
                <input
                  className="input"
                  value={editEmployee.position}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, position: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">NIK</label>
                <input
                  className="input"
                  value={editEmployee.nik}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, nik: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">Status</label>
                <input
                  className="input"
                  value={editEmployee.status || "Active"}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, status: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">Gender</label>
                <input
                  className="input"
                  value={editEmployee.gender}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, gender: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">Promotion History</label>
                <input
                  className="input"
                  value={editEmployee.promotionHistory || "Promoted to Manager in 2025"}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      promotionHistory: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="input-label">Mobile Number</label>
                <input
                  className="input"
                  value={editEmployee.phone}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="input-label">Schedule Group</label>
                <select
                  className="input"
                  value={editEmployee.scheduleGroup || "Reguler"}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      scheduleGroup: e.target.value,
                    })
                  }
                >
                  <option value="Employee Morning Shift">Employee Morning Shift</option>
                  <option value="Employee Day Shift">Employee Day Shift</option>
                  <option value="Security Reguler">Security Reguler</option>
                </select>
              </div>


              <div>
                <label className="input-label">Address</label>
                <input
                  className="input"
                  value={editEmployee.address || "Jl Mangga No. 11, Malang"}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, address: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer mt-8">
              <button
                onClick={handleUpdateEmployee}
                className="btn-primary w-full"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= DELETE MODAL ================= */}
      {deleteEmployee && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
          <div className="modal-delete">
            <h3 className="modal-delete-title">Delete This Data?</h3>
            <div className="modal-delete-actions">
              <button onClick={() => setDeleteEmployee(null)} className="btn-cancel">
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
