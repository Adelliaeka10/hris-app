"use client";

import Link from "next/link";
import Image from "next/image";

export default function ResetExpiredPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side (content) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-16">
        <div className="w-full max-w-md text-center space-y-6">
          {/* Title */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Link Reset Password is Expired
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2">
              The password reset link has expired.
              Please request a new link to reset your password.
            </p>
          </div>

          {/* Back to Login Button */}
          <Link
            href="/auth/admin/login"
            className="block w-full py-3 rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 transition"
          >
            Back to Login
          </Link>
        </div>
      </div>

      {/* Right side (blue gradient with image) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-500 to-blue-900 items-center justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/logo1.png"
            alt="HRIS Illustration"
            width={600}
            height={600}
            className="object-contain max-h-[80%]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
