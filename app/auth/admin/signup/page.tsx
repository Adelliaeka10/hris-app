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
      {/* Left side (gradient background + image) */}
      <div
        className="hidden md:flex w-1/2 items-center justify-center relative"
        style={{ background: "var(--gradient-blue)" }}
      >
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

      {/* Right side (form) */}
      <div className="flex flex-col w-full md:w-1/2 p-8 md:p-16 bg-white">
        {/* Logo */}
        <div className="mb-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="HRIS Logo" width={80} height={80} />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-[var(--color-accent)] mb-2">
            Sign Up
          </h2>
          <p className="text-[var(--color-black)] mb-6">
            Create an account for a better experience
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-black)] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your Full Name"
              value={formData.firstName}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-black)] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-black)] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-black)] mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          {/* Agree checkbox */}
          <label className="flex items-center space-x-2 text-sm text-[var(--text-muted)]">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <span>I agree with the terms of use of HRIS</span>
          </label>

          {/* Submit */}
          <button type="submit" className="btn-primary">
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <p className="mt-4 text-center text-sm text-[var(--color-black)]">
          Already have an account?{" "}
          <Link
            href="/auth/admin/login"
            className="hover:underline text-[var(--color-secondary)]"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
