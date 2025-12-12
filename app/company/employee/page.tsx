"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleArrowLeft, Pencil, Upload } from "lucide-react";

export default function AdminCompanyPage() {
  const [companyName, setCompanyName] = useState("PT Rumah Dewata Indah");
  const [latitude, setLatitude] = useState("-7.986620");
  const [longitude, setLongitude] = useState("112.632832");
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "background-color" }}>

      {/* Header */}
      <header
        className="flex items-center text-white px-6 py-4"
        style={{ background: "var(--gradient-blue)" }}
      >
        <Link href="/dashboard/admin" className="flex items-center">
          <CircleArrowLeft className="w-6 h-6 mr-2" />
        </Link>
        <h1 className="text-xl font-semibold" style={{ color: "var(--color-white)" }}>My Company</h1>
      </header>

      {/* Content */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto bg-white border border-gray-300 rounded-lg card-shadow p-6">
          <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-accent)" }}>
            My Company Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 rounded-lg p-6">

            {/* Left Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="bg-gray-100 p-4 rounded-full card-shadow">
                <Image
                  src="/company.png"
                  alt="Company Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-semibold mb-1" style={{ color: "var(--color-black)" }}>Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  readOnly
                  className="input"
                  style={{ color: "var(--text-muted)" }}
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "var(--color-black)" }}>Location</label>
                <div className="w-full h-52 rounded-lg overflow-hidden border border-gray-300 card-shadow">
                  <iframe
                    src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`}
                    className="w-full h-full"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: "var(--color-black)" }}>Latitude</label>
                  <input type="text" value={latitude} readOnly className="input" style={{ color: "var(--text-muted)" }} />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: "var(--color-black)" }}>Longitude</label>
                  <input type="text" value={longitude} readOnly className="input" style={{ color: "var(--text-muted)" }}/>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}
