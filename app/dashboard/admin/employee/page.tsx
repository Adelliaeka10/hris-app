"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebaradmin";
import { Eye, Edit, Trash, Plus, CirclePlus } from "lucide-react";

const employees = [
  { id: 1, name: "Jacob Jones", nik: 3933, gender: "Male", phone: "(252) 555-0126", dept: "IT", position: "FE" },
  { id: 2, name: "Darlene Robertson", nik: 5028, gender: "Male", phone: "(307) 555-0133", dept: "IT", position: "BE" },
  { id: 3, name: "Courtney Henry", nik: 6690, gender: "Male", phone: "(302) 555-0107", dept: "HR", position: "HR Manager" },
  { id: 4, name: "Robert Fox", nik: 9374, gender: "Male", phone: "(219) 555-0114", dept: "HR", position: "HR Director" },
  { id: 5, name: "Darrell Steward", nik: 4846, gender: "Male", phone: "(270) 555-0117", dept: "Finance", position: "Financial Analyst" },
  { id: 6, name: "Savannah Nguyen", nik: 7791, gender: "Female", phone: "(308) 555-0121", dept: "Finance", position: "Accountant" },
  { id: 7, name: "Dianne Russell", nik: 1439, gender: "Female", phone: "(406) 555-0120", dept: "QA", position: "Quality Inspector" },
  { id: 8, name: "Floyd Miles", nik: 1577, gender: "Male", phone: "(671) 555-0110", dept: "QA", position: "Compliance Specialist" },
];

export default function EmployeePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

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
                  {employees.map((emp, index) => (
                    <tr
                      key={emp.id}
                      className={`border border-gray-300 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition`}
                    >
                      <td className="p-3 text-center border border-gray-300">{index + 1}</td>
                      <td className="p-3 border border-gray-300">{emp.name}</td>
                      <td className="p-3 border border-gray-300 text-center">{emp.nik}</td>
                      <td className="p-3 border border-gray-300 text-center">{emp.gender}</td>
                      <td className="p-3 border border-gray-300">{emp.phone}</td>
                      <td className="p-3 border border-gray-300 text-center">{emp.dept}</td>
                      <td className="p-3 border border-gray-300">{emp.position}</td>
                      <td className="p-3 flex justify-center space-x-2 border border-gray-300">
                        <button className="bg-[#0DCAF0] p-2 rounded text-white hover:bg-sky-600 transition">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="bg-[#198754] p-2 rounded text-white hover:bg-green-600 transition">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="bg-[#DC3545] p-2 rounded text-white hover:bg-red-600 transition">
                          <Trash className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}