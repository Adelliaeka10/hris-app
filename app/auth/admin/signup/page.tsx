"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup data:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side (blue gradient) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-500 to-blue-900 items-center justify-center">
        {/* <h1 className="text-white text-3xl font-bold">HRIS</h1> */}
      </div>

      {/* Right side (form) */}
      <div className="flex flex-col w-full md:w-1/2 p-8 md:p-16 bg-white">
        {/* Logo */}
        <div className="mb-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="HRIS Logo" width={80} height={80} />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-2">Sign Up</h2>
        <p className="text-gray-600 mb-6">
          Create an account for a better experience
        </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First & Last Name */}
          <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          {/* Email */}
          <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
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
            className="w-full p-3 border rounded"
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
            placeholder="Confirm Your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          </div>

          {/* Agree checkbox */}
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <span>I agree with the terms of use of HRIS</span>
          </label>

          {/* Social login */}
          {/* <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex justify-center space-x-4">
            <button type="button" className="p-2 border rounded hover:bg-gray-100">
              <Image src="/google.svg" alt="Google" width={24} height={24} />
            </button>
            <button type="button" className="p-2 border rounded hover:bg-gray-100">
              <Image src="/apple.svg" alt="Apple" width={24} height={24} />
            </button>
          </div> */}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/admin/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
