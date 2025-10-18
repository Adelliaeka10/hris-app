"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Password reset:", formData.newPassword);
    alert("Password has been reset successfully (dummy).");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side (form) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-16">
        <div className="w-full max-w-md space-y-6">
          {/* Title */}
          <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Set a new password
          </h2>
          <p className="text-gray-600 text-sm">
            Enter your new password below to complete the reset process.
            Ensure it’s strong and secure.
          </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter Your New Password"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your New Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Reset Button */}
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
