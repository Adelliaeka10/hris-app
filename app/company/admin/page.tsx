"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleArrowLeft, Pencil, Upload } from "lucide-react";

export default function AdminCompanyPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [companyName, setCompanyName] = useState("PT Rumah Dewata Indah");
  const [latitude, setLatitude] = useState("-7.986620");
  const [longitude, setLongitude] = useState("112.632832");
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleSave = () => {
    alert("Company details saved successfully!");
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 overflow-y-auto">
      {/* Header */}
      <header className="flex items-center bg-gradient-to-b from-blue-500 to-blue-900 text-white px-6 py-4">
        <Link href="/dashboard/admin" className="flex items-center">
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

          {/* Edit Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-900 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* ------------------- MODAL POP-UP ------------------- */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl relative">
            {/* Header */}
            <div className="px-8 pt-6 pb-3 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Edit Company</h2>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Left: Company Info */}
              <div className="p-8 space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Company Name
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <Pencil className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Company Logo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition">
                    {logoFile ? (
                      <p className="text-sm">{logoFile.name}</p>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 mb-2 text-gray-400" />
                        <p className="text-sm">Drag and Drop</p>
                        <p className="text-xs">or</p>
                        <label className="text-blue-600 cursor-pointer text-sm font-semibold">
                          Browse
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="hidden"
                          />
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Map & Coordinates */}
              <div className="p-8 space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Location
                  </label>
                  <div className="rounded-md overflow-hidden h-40 border border-gray-300">
                    <iframe
                      src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`}
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Latitude
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      <Pencil className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Longitude
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      <Pencil className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-gray-200 px-8 py-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2 bg-[#123E73] text-white rounded-md font-semibold hover:bg-blue-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
