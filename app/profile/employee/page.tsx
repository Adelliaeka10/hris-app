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
    <div className="dashboard-container">
      {/* Header */}
      <header
        className="flex items-center px-6 py-4 text-white"
        style={{ background: "var(--gradient-blue)" }}
      >
        <Link href="/dashboard/employee" className="flex items-center">
          <CircleArrowLeft className="w-6 h-6 mr-2 text-white" />
        </Link>
        <h1 className="text-xl font-bold text-white">My Profile</h1>
      </header>

      {/* Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Section */}
          <div className="md:col-span-2 space-y-6">

            {/* Edit Profile */}
            <div className="card card-shadow p-6">
              <h2 className="text-lg font-bold text-[var(--color-accent)] mb-4">
                Edit Profile
              </h2>

              <div className="space-y-4" style={{ color: "var(--color-black)" }}>
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
                    <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>{field.label}</label>
                    <input
                      type="text"
                      defaultValue={field.value}
                      className="input"
                    />
                  </div>
                ))}

                {/* Upload Profile Photo */}
                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Profile Photo</label>

                  <label
                    htmlFor="photo-upload"
                    className="upload-box flex items-center space-x-2 text-white text-sm px-3 py-2 rounded cursor-pointer transition w-fit"
                    style={{ background: "var(--color-primary)" }}
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Photo</span>
                  </label>

                  <input id="photo-upload" type="file" accept="image/*" className="hidden" />
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="card card-shadow p-6">
              <h2 className="text-lg font-bold text-[var(--color-accent)] mb-4">
                Change Password
              </h2>

              <form className="space-y-4">
                
                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>
                    Current Password <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input type="password" className="input" />
                </div>

                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>
                    New Password <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input type="password" className="input" />

                  <p className="text-xs italic mt-2 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <span>Must be at least 8 characters long.</span><br />
                    Must contain characters of the following classes:
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-0.5">
                      <li>uppercase (A–Z)</li>
                      <li>lowercase (a–z)</li>
                      <li>special (% ! @)</li>
                      <li>numeric (0–9)</li>
                    </ul>
                  </p>
                </div>

                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>
                    Confirm Password <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input type="password" className="input" />
                </div>

                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="card card-shadow p-6 text-center">

            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/profile2.jpeg"
                alt="Employee Profile"
                width={100}
                height={100}
                className="avatar-img w-[100px] h-[100px]"
              />
              <h3 className="text-lg font-semibold">Jane Cooper</h3>
              <p className="text-sm" style={{ color: "var(--text-black)" }}>
                tim.jennings@example.com
              </p>

              <span className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-primary)"
                }}>
                EMPLOYEE
              </span>
            </div>

            {/* Summary List */}
            <div className="border-t mt-4 pt-4 text-left space-y-2">

              {[
                { icon: IdCardLanyard, label: "Employee ID", value: "EMP-C1-2409250001" },
                { icon: Phone, label: "Phone Number", value: "(207) 555-0119" },
                { icon: CalendarDays, label: "Date of Birth", value: "10/28/2003" },
                { icon: FileText, label: "NIK", value: "3275012309870001" },
                { icon: Mars, label: "Gender", value: "Female" },
                { icon: House, label: "Address", value: "2972 Westheimer Rd. Santa Ana, Illinois" },
                { icon: SquareUser, label: "Position", value: "Frontend Engineer" },
                { icon: Building, label: "Department", value: "IT" },
                { icon: FileBadge2, label: "Promotion History", value: "Promoted to Manager in 2025" },
                { icon: ClipboardList, label: "Status", value: "Active" },
                { icon: Building2, label: "Company", value: "PT Rumah Dewata Indah" },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="font-bold text-sm flex items-center">
                    <item.icon
                      className="w-4 h-4 mr-2"
                      style={{ color: "var(--color-black)" }}
                    />
                    {item.label}
                  </p>
                  <p className="text-sm ml-6" style={{ color: "var(--color-black)" }}>
                    {item.value}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
