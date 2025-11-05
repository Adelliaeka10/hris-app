"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";

export default function EmployeeCompanyPage() {
  const companyName = "PT Rumah Dewata Indah";
  const latitude = "-7.986620";
  const longitude = "112.632832";

  return (
    <div className="flex flex-col h-full bg-gray-100 overflow-y-auto">
      {/* Header */}
      <header className="flex items-center bg-gradient-to-b from-blue-500 to-blue-900 text-white px-6 py-4">
        <Link href="/dashboard/employee" className="flex items-center">
          <CircleArrowLeft className="w-6 h-6 mr-2 text-white" />
        </Link>
        <h1 className="text-xl font-semibold text-white">My Company</h1>
      </header>

      {/* Content */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto bg-white border border-gray-300 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-red-600 mb-4">
            My Company Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 rounded-lg p-6">
            {/* Left Section: Logo + Company Info */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="bg-gray-100 p-4 rounded-full shadow-sm">
                <Image
                  src="/company.png"
                  alt="Company Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="w-full">
                <label className="text-sm font-semibold block mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  readOnly
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none"
                />
              </div>
            </div>

            {/* Right Section: Map + Coordinates */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold block mb-2">
                  Location
                </label>
                <div className="w-full h-52 rounded-lg overflow-hidden border border-gray-300 shadow-sm">
                  <iframe
                    src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Latitude
                  </label>
                  <input
                    type="text"
                    value={latitude}
                    readOnly
                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Longitude
                  </label>
                  <input
                    type="text"
                    value={longitude}
                    readOnly
                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
