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
      {/* Left side (gradient + image) */}
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

      {/* Right side (form section) */}
      <div className="flex flex-col w-full md:w-1/2 p-8 md:p-16 bg-white">
        {/* Logo */}
        <div className="mb-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="HRIS Logo" width={80} height={80} />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-[var(--color-accent)] mb-2">
            Sign In with Employee ID
          </h2>
          <p className="text-[var(--color-black)] mb-6">
            Welcome back to HRIS cmlabs! Manage everything with ease.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Employee ID */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-black)] mb-1">
              Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              placeholder="Enter Your Employee ID"
              value={formData.employeeId}
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

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
            <label className="flex items-center space-x-2 cursor-pointer">
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
              className="hover:underline text-[var(--color-secondary)]"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
