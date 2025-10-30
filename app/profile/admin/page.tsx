"use client";

import Image from "next/image";
import { CircleArrowLeft, ClipboardList, Building2 } from 'lucide-react';
import Link from "next/link";

export default function AdminProfilePage() {
  return (
    <div className="flex flex-col h-full bg-gray-100 overflow-y-auto">
      {/* Header */}
      <header className="flex items-center bg-gradient-to-b from-blue-500 to-blue-900 text-white px-6 py-4">
        <Link href="/dashboard/admin" className="flex items-center">
          <CircleArrowLeft className="w-6 h-6 mr-2 text-white"/>
        </Link> 
        <h1 className="text-xl font-semibold text-white">My Profile</h1>
      </header>

      {/* Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Edit Profile + Change Password */}
          <div className="md:col-span-2 space-y-6">
            {/* Edit Profile Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-red-600 mb-4">
                Edit Profile
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Status
                  </label>
                  <input
                    type="text"
                    defaultValue="Active"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    defaultValue="PT Rumah Dewata Indah"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Change Password Section */}
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
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold block mb-1">
                    New Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Enter new password"
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
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Confirm new password"
                  />
                  <p className="text-xs italic text-black-700 mt-2 leading-relaxed">
                  <span>Confirm new password.</span>
                  <br />
                  'Password confirmation' should match the input in the 'New password' field.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-3 rounded font-semibold hover:opacity-90 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Profile Summary */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/profile1.jpeg"
                alt="Admin Profile"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-sm text-gray-600">john.doe@example.com</p>
              <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">
                ADMIN
              </span>
            </div>

            <div className="border-t mt-4 pt-4 text-left space-y-2">
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
