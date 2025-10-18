"use client";

import Link from "next/link";

export default function CheckEmailPage() {
  const userEmail = "username@gmail.com"; // dummy, nanti bisa diganti dari state/context

  return (
    <div className="min-h-screen flex">
      {/* Left side (content) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-16">
        <div className="w-full max-w-md text-center space-y-6">
          {/* Title */}
          <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Please, check your email
          </h2>
          <p className="text-gray-600 text-sm">
            We sent a password reset link to your email{" "}
            <span className="font-medium text-gray-900">{userEmail}</span> which
            is valid for 24 hours after you receive the email. Please check your
            inbox!
          </p>
          </div>

          {/* Open Gmail Button */}
          <a
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 transition"
          >
            Open Gmail
          </a>

          {/* Resend link */}
          <p className="text-sm text-gray-600">
            Don’t receive the email?{" "}
            <button
              type="button"
              onClick={() => alert("Resend email clicked (dummy)")}
              className="text-blue-600 hover:underline"
            >
              Click here to resend!
            </button>
          </p>

          {/* Back to login */}
          <div className="text-center">
            <Link
              href="/auth/employee/login"
              className="inline-flex items-center space-x-2 text-red-600 font-medium hover:underline"
            >
              <span>⬅️</span>
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side (blue gradient) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-500 to-blue-900" />
    </div>
  );
}
