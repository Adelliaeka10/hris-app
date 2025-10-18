"use client";

import Link from "next/link";

export default function ResetSuccessPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side (content) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-16">
        <div className="w-full max-w-md text-center space-y-6">
          {/* Title */}
          <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Your password has been successfully reset
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm">
            You can log in with your new password. If you encounter any issues,
            please contact support!
          </p>
          </div>

          {/* Login Button */}
          <Link
            href="/auth/admin/login"
            className="block w-full py-3 rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 transition"
          >
            Login Now
          </Link>
        </div>
      </div>

      {/* Right side (blue gradient) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-500 to-blue-900" />
    </div>
  );
}
