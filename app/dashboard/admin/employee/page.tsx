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
      <div className="bg-white border border-gray-300 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold text-gray-900">
            All Employee Information
          </h2>
          <button className="flex items-center bg-[#007BFF] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            <CirclePlus className="w-4 h-4 mr-2" /> Add Data
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#123E73] text-white text-center font-semibold">
                <th className="p-3 border border-gray-300 w-12 text-center">No.</th>
                <th className="p-3 border border-gray-300">Full Name</th>
                <th className="p-3 border border-gray-300">NIK</th>
                <th className="p-3 border border-gray-300">Gender</th>
                <th className="p-3 border border-gray-300">Mobile Number</th>
                <th className="p-3 border border-gray-300">Department</th>
                <th className="p-3 border border-gray-300">Position</th>
                <th className="p-3 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((emp, index) => (
                <tr
                  key={emp.id}
                  className={`border border-gray-300 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="p-3 text-center border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="p-3 border border-gray-300">{emp.name}</td>
                  <td className="p-3 border border-gray-300 text-center">
                    {emp.nik}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {emp.gender}
                  </td>
                  <td className="p-3 border border-gray-300">{emp.phone}</td>
                  <td className="p-3 border border-gray-300 text-center">
                    {emp.dept}
                  </td>
                  <td className="p-3 border border-gray-300">{emp.position}</td>
                  <td className="p-3 flex justify-center space-x-2 border border-gray-300">
                    <button
                      onClick={() => setSelectedEmployee(emp)}
                      className="bg-[#0DCAF0] p-2 rounded text-white hover:bg-sky-600 transition"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setEditEmployee(emp)}
                      className="bg-[#198754] p-2 rounded text-white hover:bg-green-600 transition"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteEmployee(emp)}
                      className="bg-[#DC3545] p-2 rounded text-white hover:bg-red-600 transition"
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

      {/* ---------------- VIEW MODAL ---------------- */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto relative">
            <div className="relative mb-4 flex justify-center items-center">
              <button
                onClick={() => setSelectedEmployee(null)}
                className="absolute left-0 text-gray-700 hover:text-gray-900"
              >
                <CircleArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold text-gray-900 text-center">
                View Profile
              </h2>
            </div>

            <div className="flex justify-center mb-5">
              <Image
                src="/avatar.png"
                alt="Profile Picture"
                width={90}
                height={90}
                className="rounded-full border border-gray-300 object-cover"
              />
            </div>

            <div className="space-y-4">
              {[
                { label: "Full Name", value: selectedEmployee.name },
                { label: "NIK", value: selectedEmployee.nik },
                { label: "Gender", value: selectedEmployee.gender },
                { label: "Mobile Number", value: selectedEmployee.phone },
                { label: "Department", value: selectedEmployee.dept },
                { label: "Position", value: selectedEmployee.position },
              ].map((item, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {item.label}
                  </label>
                  <input
                    type="text"
                    value={item.value}
                    readOnly
                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 text-sm focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------------- EDIT MODAL ---------------- */}
      {editEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto relative">
            <div className="relative mb-4 flex justify-center items-center">
              <button
                onClick={() => setEditEmployee(null)}
                className="absolute left-0 text-gray-700 hover:text-gray-900"
              >
                <CircleArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold text-gray-900 text-center">
                Edit Profile
              </h2>
            </div>

            <div className="flex justify-center mb-5">
              <Image
                src="/avatar.png"
                alt="Profile Picture"
                width={90}
                height={90}
                className="rounded-full border border-gray-300 object-cover"
              />
            </div>

            <div className="space-y-4">
              {[
                { key: "name", label: "Full Name" },
                { key: "nik", label: "NIK" },
                { key: "gender", label: "Gender" },
                { key: "phone", label: "Mobile Number" },
                { key: "dept", label: "Department" },
                { key: "position", label: "Position" },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {item.label}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={editEmployee[item.key]}
                      onChange={(e) =>
                        setEditEmployee({
                          ...editEmployee,
                          [item.key]: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none pr-8"
                    />
                    <Pencil className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleSaveChanges}
                className="px-5 py-2 bg-[#123E73] text-white rounded-md font-semibold hover:bg-blue-800"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- DELETE CONFIRMATION MODAL ---------------- */}
      {deleteEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-[350px] p-6 text-center">
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Delete This Data?
            </h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setDeleteEmployee(null)}
                className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 bg-[#DC3545] text-white rounded-md font-semibold hover:bg-red-700"
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
