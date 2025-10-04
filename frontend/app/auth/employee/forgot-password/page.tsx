"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reset password link sent to:", email);
    alert(`If ${email} exists, a reset link will be sent.`);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side (form) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-16">
        <div className="w-full max-w-md space-y-6">
          {/* Title */}
          <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Forgot your Password?
          </h2>
          <p className="text-gray-600 text-sm">
            No worries! Enter your email address below, and we’ll send you a link
            to reset your password.
          </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full py-3 rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 transition"
            >
              Reset Password
            </button>
          </form>

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

      {/* Right side (blue background) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-500 to-blue-900" />
    </div>
  );
}
