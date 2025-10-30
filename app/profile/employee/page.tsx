"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Building2,
  CircleArrowLeft,
  Upload,
  IdCardLanyard,
  CalendarDays,
  Mars,
  House,
  SquareUser,
  Building,
  FileBadge2,
  ClipboardList,
  FileText
} from "lucide-react";

export default function EmployeeProfilePage() {
  return (
    <div className="flex flex-col h-full bg-gray-100 overflow-y-auto">
      {/* Header */}
      <header className="flex items-center bg-gradient-to-b from-blue-500 to-blue-900 text-white px-6 py-4">
        <Link href="/dashboard/employee" className="flex items-center">
          <CircleArrowLeft className="w-6 h-6 mr-2 text-white" />
        </Link>
        <h1 className="text-xl font-semibold text-white">My Profile</h1>
      </header>

      {/* Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="md:col-span-2 space-y-6">
            {/* Edit Profile */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-red-600 mb-4">
                Edit Profile
              </h2>

              <div className="space-y-4">
                {[
                  { label: "Employee ID", value: "EMP-CI-2409205001" },
                  { label: "Full Name", value: "Jane Cooper" },
                  { label: "Email", value: "tim.jennings@example.com" },
                  { label: "Phone Number", value: "(201) 555-0119" },
                  { label: "Date of Birth", value: "10/28/2003" },
                  { label: "NIK", value: "3275012309870001" },
                  { label: "Gender", value: "Female" },
                  { label: "Address", value: "2972 Westheimer Rd. Santa Ana, Illinois 85486" },
                  { label: "Position", value: "Frontend Engineer" },
                  { label: "Department", value: "IT" },
                  { label: "Promotion History", value: "Promoted to Manager in 2025" },
                  { label: "Status", value: "Active" },
                  { label: "Company", value: "PT Rumah Dewata Indah" },
                ].map((field, idx) => (
                  <div key={idx}>
                    <label className="text-sm font-semibold block mb-1">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      defaultValue={field.value}
                      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}

                {/* Upload Profile Photo (no preview) */}
                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Profile Photo
                  </label>
                  <label
                    htmlFor="photo-upload"
                    className="flex items-center space-x-2 bg-blue-600 text-white text-sm px-3 py-2 rounded cursor-pointer hover:bg-blue-700 transition w-fit"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Photo</span>
                  </label>
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-red-600 mb-4">
                Change Password
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Current Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    // placeholder="Enter current password"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold block mb-1">
                    New Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    // placeholder="Enter new password"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs italic text-black-700 mt-2 leading-relaxed">
                  <span>Must be at least 8 characters long.</span>
                  <br />
                  Must contain characters of the following classes (at least 1 of 4):
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-0.5">
                    <li>uppercase (e.g. 'A')</li>
                    <li>lowercase (e.g. 'a')</li>
                    <li>special (e.g. '%')</li>
                    <li>numeric (e.g. '1')</li>
                  </ul>
                </p>
                </div>

                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Confirm Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    // placeholder="Confirm new password"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-3 rounded font-semibold hover:opacity-90 transition"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>

          {/* Right Section: Profile Summary */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/profile2.jpeg"
                alt="Employee Profile"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <h3 className="font-semibold text-lg">Jane Cooper</h3>
              <p className="text-sm text-gray-600">tim.jennings@example.com</p>
              <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">
                EMPLOYEE
              </span>
            </div>

            <div className="border-t mt-4 pt-4 text-left space-y-2">
              {/* Employee ID */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <IdCardLanyard className="w-4 h-4 mr-2 text-blue-600" />
                  Employee ID
                </p>
                <p className="text-gray-700 text-sm ml-6">EMP-C1-2409250001</p>
              </div>

              {/* Phone Number */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  Phone Number
                </p>
                <p className="text-gray-700 text-sm ml-6">(207) 555-0119</p>
              </div>

              {/* Date of Birth */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <CalendarDays className="w-4 h-4 mr-2 text-blue-600" />
                  Date of Birth
                </p>
                <p className="text-gray-700 text-sm ml-6">10/28/2003</p>
              </div>

              {/* NIK */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <FileText className="w-4 h-4 mr-2 text-blue-600" />
                  NIK
                </p>
                <p className="text-gray-700 text-sm ml-6">3275012309870001</p>
              </div>

              {/* Gender */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <Mars className="w-4 h-4 mr-2 text-blue-600" />
                  Gender
                </p>
                <p className="text-gray-700 text-sm ml-6">Female</p>
              </div>

              {/* Address */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <House className="w-4 h-4 mr-2 text-blue-600" />
                  Address
                </p>
                <p className="text-gray-700 text-sm ml-6">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              </div>

              {/* Position */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <SquareUser className="w-4 h-4 mr-2 text-blue-600" />
                  Position
                </p>
                <p className="text-gray-700 text-sm ml-6">Frontend Engineer</p>
              </div>

            {/* Department */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <Building className="w-4 h-4 mr-2 text-blue-600" />
                  Department
                </p>
                <p className="text-gray-700 text-sm ml-6">IT</p>
              </div>

              {/* Promotion History */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <FileBadge2 className="w-4 h-4 mr-2 text-blue-600" />
                  Promotion History
                </p>
                <p className="text-gray-700 text-sm ml-6">Promoted to Manager in 2025</p>
              </div>

              {/* Status */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <ClipboardList className="w-4 h-4 mr-2 text-blue-600" />
                  Status
                </p>
                <p className="text-gray-700 text-sm ml-6">Active</p>
              </div>

              {/* Company */}
              <div>
                <p className="font-semibold text-sm flex items-center text-gray-800">
                  <Building2 className="w-4 h-4 mr-2 text-blue-600" />
                  Company
                </p>
                <p className="text-gray-700 text-sm ml-6">PT Rumah Dewata Indah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
