"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login data:", formData);

    // 👉 simulasi login sukses
    if (formData.email && formData.password) {
      router.push("/dashboard/admin");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side (blue gradient) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-500 to-blue-900 items-center justify-center">
        {/* <h1 className="text-white text-3xl font-bold">HRIS</h1> */}
      </div>

      {/* Right side (form) */}
      <div className="flex flex-col w-full md:w-1/2 p-8 md:p-16 bg-white relative">
        {/* Logo */}
        <div className="mb-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="HRIS Logo" width={80} height={80} />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-2">Sign In</h2>
          <p className="text-gray-600 mb-6">
            Welcome back to HRIS cmlabs! Manage everything with ease.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
              href="/auth/admin/forgot-password"
              className="text-red-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up link */}
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link
            href="/auth/admin/signup"
            className="text-blue-600 hover:underline"
          >
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
}
