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

    if (formData.email && formData.password) {
      router.push("/dashboard/admin");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side with Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative"
        style={{ background: "var(--gradient-blue)" }}>
        <Image
          src="/logo1.png"
          alt="HRIS Illustration"
          width={600}
          height={1000}
          className="object-contain max-h-[80%]"
          priority
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col w-full md:w-1/2 p-8 md:p-16 bg-white relative">
        {/* Logo */}
        <div className="mb-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="HRIS Logo" width={80} height={80} />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-secondary mb-2" style={{ color: "var(--color-accent)" }}>Sign In</h2>
          <p className="mb-6" style={{ color: "var(--color-black)" }}>
            Welcome back to HRIS cmlabs! Manage everything with ease.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1" style={{ color: "var(--color-black)" }}>
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
            <label className="block text-sm font-semibold mb-1" style={{ color: "var(--color-black)" }}>
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
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <span style={{ color: "var(--text-muted)" }}>Remember Me</span>
            </label>
            <Link
              href="/auth/admin/forgot-password"
              className="hover:underline"
              style={{ color: "var(--color-secondary)" }}
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>

        {/* Sign Up */}
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/auth/admin/signup" className="hover:underline"
            style={{ color: "var(--color-secondary)" }}>
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
}
