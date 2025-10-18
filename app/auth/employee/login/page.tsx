"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function UserLoginPage() {
  const [formData, setFormData] = useState({
    employeeId: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Employee login data:", formData);
    alert("Sign In attempted (dummy only)");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side (blue gradient) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-500 to-blue-900 items-center justify-center">
        {/* <h1 className="text-white text-3xl font-bold">HRIS</h1> */}
      </div>

      {/* Right side (form) */}
      <div className="flex flex-col w-full md:w-1/2 p-8 md:p-16">
        {/* Logo */}
        <div className="mb-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="HRIS Logo" width={80} height={80} />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-2">
          Sign In with Employee ID
        </h2>
        <p className="text-gray-600 mb-6">
          Welcome back to HRIS cmlabs! Manage everything with ease.
        </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              placeholder="Enter Your Employee ID"
              value={formData.employeeId}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <span>Remember Me</span>
            </label>
            <Link
              href="/auth/user/forgot-password"
              className="text-red-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Social Login */}
          {/* <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="p-2 border rounded hover:bg-gray-100"
            >
              <Image src="/google.svg" alt="Google" width={24} height={24} />
            </button>
            <button
              type="button"
              className="p-2 border rounded hover:bg-gray-100"
            >
              <Image src="/apple.svg" alt="Apple" width={24} height={24} />
            </button>
          </div> */}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
