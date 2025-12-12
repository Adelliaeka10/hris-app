"use client";

import { useState } from "react";
import { Eye, Edit, Trash, CirclePlus, CircleArrowLeft, Pencil } from "lucide-react";
import Image from "next/image";

const employees = [
  { id: 1, name: "Jacob Jones", nik: 3933, gender: "Male", phone: "(252) 555-0126", dept: "IT", position: "Frontend Engineer" },
  { id: 2, name: "Darlene Robertson", nik: 5028, gender: "Female", phone: "(307) 555-0133", dept: "IT", position: "Backend Engineer" },
  { id: 3, name: "Courtney Henry", nik: 6690, gender: "Male", phone: "(302) 555-0107", dept: "HR", position: "HR Manager" },
  { id: 4, name: "Robert Fox", nik: 9374, gender: "Male", phone: "(219) 555-0114", dept: "HR", position: "HR Director" },
  { id: 5, name: "Darrell Steward", nik: 4846, gender: "Male", phone: "(270) 555-0117", dept: "Finance", position: "Financial Analyst" },
  { id: 6, name: "Savannah Nguyen", nik: 7791, gender: "Female", phone: "(308) 555-0121", dept: "Finance", position: "Accountant" },
  { id: 7, name: "Dianne Russell", nik: 1439, gender: "Female", phone: "(406) 555-0120", dept: "QA", position: "Quality Inspector" },
  { id: 8, name: "Floyd Miles", nik: 1577, gender: "Male", phone: "(671) 555-0110", dept: "QA", position: "Compliance Specialist" },
];

export default function EmployeePage() {
  const [selectedEmployee, setSelectedEmployee] = useState<any | null>(null);
  const [editEmployee, setEditEmployee] = useState<any | null>(null);
  const [deleteEmployee, setDeleteEmployee] = useState<any | null>(null);
  const [employeeList, setEmployeeList] = useState(employees);

  const handleDelete = () => {
    setEmployeeList(employeeList.filter((emp) => emp.id !== deleteEmployee.id));
    setDeleteEmployee(null);
  };

  const handleSaveChanges = () => {
    alert("Employee details saved successfully!");
    setEditEmployee(null);
  };

  return (
    <div className="p-6 overflow-y-auto">
      
      {/* Card Container */}
      <div className="card card-shadow border border-gray-200">
        
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold" style={{ color: "var(--color-black)" }}>
            All Employee Information
          </h2>

          <button className="flex items-center font-bold bg-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
            <CirclePlus className="w-4 h-4 mr-2" /> Add Data
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr
                className="text-white text-center font-bold"
                style={{ background: "var(--color-primary)" }}
              >
                <th className="p-3 border w-12">No.</th>
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
              {employeeList.map((emp, index) => (
                <tr
                  key={emp.id}
                  className="bg-white border border-gray-200 hover:bg-gray-100 transition"
                >
                  <td className="p-3 text-center border">{index + 1}</td>
                  <td className="p-3 border">{emp.name}</td>
                  <td className="p-3 border text-center">{emp.nik}</td>
                  <td className="p-3 border text-center">{emp.gender}</td>
                  <td className="p-3 border">{emp.phone}</td>
                  <td className="p-3 border text-center">{emp.dept}</td>
                  <td className="p-3 border">{emp.position}</td>

                  <td className="p-3 flex justify-center space-x-2 border">
                    <button
                      onClick={() => setSelectedEmployee(emp)}
                      className="p-2 rounded text-white bg-blue-500 hover:opacity-90"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setEditEmployee(emp)}
                      className="p-2 rounded text-white bg-yellow-500 hover:opacity-90"
                    >
                      <Edit className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setDeleteEmployee(emp)}
                      className="p-2 rounded text-white bg-red-700 hover:opacity-90"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* ================================================================= */}
      {/*                           VIEW MODAL                               */} 
      {/* ================================================================= */}

      {selectedEmployee && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
          <div className="modal-content">

            <div className="modal-header font-bold">
              <button onClick={() => setSelectedEmployee(null)} className="modal-back-btn">
                <CircleArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="modal-title">View Profile</h2>
            </div>

            <div className="modal-avatar">
              <Image
                src="/profile.png"
                alt="Profile Picture"
                width={50}
                height={50}
                className="avatar-img"
              />
            </div>

            <div className="modal-body space-y-3">

              {[
                { label: "Full Name", value: selectedEmployee.name },
                { label: "NIK", value: selectedEmployee.nik },
                { label: "Gender", value: selectedEmployee.gender },
                { label: "Mobile Number", value: selectedEmployee.phone },
                { label: "Department", value: selectedEmployee.dept },
                { label: "Position", value: selectedEmployee.position },
              ].map((item, idx) => (
                <div key={idx}>
                  <label className="input-label">{item.label}</label>
                  <input type="text" value={item.value} readOnly className="input" />
                </div>
              ))}

            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/*                           EDIT MODAL                              */} 
      {/* ================================================================= */}

      {editEmployee && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
          <div className="modal-content">

            <div className="modal-header">
              <button onClick={() => setEditEmployee(null)} className="modal-back-btn">
                <CircleArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="modal-title">Edit Profile</h2>
            </div>

            <div className="modal-avatar">
              <Image
                src="/avatar.png"
                alt="Profile Picture"
                width={90}
                height={90}
                className="avatar-img"
              />
            </div>

            <div className="modal-body space-y-3">

              {[
                { key: "name", label: "Full Name" },
                { key: "nik", label: "NIK" },
                { key: "gender", label: "Gender" },
                { key: "phone", label: "Mobile Number" },
                { key: "dept", label: "Department" },
                { key: "position", label: "Position" },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <label className="input-label">{item.label}</label>

                  <input
                    type="text"
                    value={editEmployee[item.key]}
                    onChange={(e) =>
                      setEditEmployee({ ...editEmployee, [item.key]: e.target.value })
                    }
                    className="input pr-10"
                  />

                  <Pencil className="input-icon" />
                </div>
              ))}

            </div>

            <div className="modal-footer">
              <button onClick={handleSaveChanges} className="btn-primary w-auto px-6">
                Save Changes
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/*                           DELETE MODAL                            */} 
      {/* ================================================================= */}

      {deleteEmployee && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
          <div className="modal-delete">

            <h3 className="modal-delete-title">Delete This Data?</h3>

            <div className="modal-delete-actions">

              <button
                onClick={() => setDeleteEmployee(null)}
                className="btn-cancel"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="btn-danger"
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
