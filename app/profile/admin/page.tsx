"use client";

import Image from "next/image";
import { CircleArrowLeft, ClipboardList, Building2 } from "lucide-react";
import Link from "next/link";

export default function AdminProfilePage() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header
        className="flex items-center text-white px-6 py-4"
        style={{ background: "var(--gradient-blue)" }}
      >
        <Link href="/dashboard/admin" className="flex items-center">
          <CircleArrowLeft className="w-6 h-6 mr-2 text-white" />
        </Link>
        <h1 className="text-xl font-bold text-white">My Profile</h1>
      </header>

      {/* Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT CONTENT */}
          <div className="md:col-span-2 space-y-6">
            {/* EDIT PROFILE */}
            <div className="bg-white rounded-lg card-shadow p-6">
              <h2
                className="text-lg font-bold mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                Edit Profile
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Full Name</label>
                  <input type="text" defaultValue="John Doe" className="input" />
                </div>

                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="input"
                  />
                </div>

                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Status</label>
                  <input
                    type="text"
                    defaultValue="Active"
                    className="input"
                  />
                </div>

                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>Company</label>
                  <input
                    type="text"
                    defaultValue="PT Rumah Dewata Indah"
                    className="input"
                  />
                </div>
              </div>
            </div>

            {/* CHANGE PASSWORD */}
            <div className="bg-white rounded-lg card-shadow p-6">
              <h2
                className="text-lg font-bold mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                Change Password
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>
                    Current Password <span className="text-red-600">*</span>
                  </label>
                  <input type="password" className="input" />
                </div>

                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>
                    New Password <span className="text-red-600">*</span>
                  </label>
                  <input type="password" className="input" />

                  <p className="text-xs italic mt-2 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <span>Must be at least 8 characters long.</span>
                    <br />
                    Must contain:
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-0.5">
                      <li>uppercase letters</li>
                      <li>lowercase letters</li>
                      <li>special characters</li>
                      <li>numbers</li>
                    </ul>
                  </p>
                </div>

                <div>
                  <label className="input-label font-bold" style={{ color: "var(--color-black)" }}>
                    Confirm Password <span className="text-red-600">*</span>
                  </label>
                  <input type="password" className="input" />

                  <p className="text-xs italic text-gray-700 mt-2 leading-relaxed">
                    Password confirmation must match the new password.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{background: "var(--color-primary)"}}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT PROFILE PANEL */}
          <div className="bg-white rounded-lg card-shadow p-6 text-center">
            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/profile1.jpeg"
                alt="Admin Profile"
                width={100}
                height={100}
                className="rounded-full object-cover border border-gray-300"
              />

              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-sm" style={{ color: "var(--color-black)" }}>john.doe@example.com</p>

              <span className="text-xs px-3 py-1 rounded-full font-meedium"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-primary)",
                }}
              >
                ADMIN
              </span>
            </div>

            <div className="border-t mt-4 pt-4 text-left space-y-2">
              {/* Status */}
              <div>
                <p className="font-bold text-sm flex items-center text-black">
                  <ClipboardList
                    className="w-4 h-4 mr-2"
                    style={{ color: "var(--color-black)" }}
                  />
                  Status
                </p>
                <p className="text-black text-sm ml-6">Active</p>
              </div>

              {/* Company */}
              <div>
                <p className="font-bold text-sm flex items-center text-black">
                  <Building2
                    className="w-4 h-4 mr-2"
                    style={{ color: "var(--color-black)" }}
                  />
                  Company
                </p>
                <p className="text-black text-sm ml-6">
                  PT Rumah Dewata Indah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
