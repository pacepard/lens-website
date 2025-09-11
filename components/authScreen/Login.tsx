"use client";
import { useState } from "react";
import Button from "@/components/authScreen/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex flex-col justify-center h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Welcome to Lens</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Email Address/Phone Number"
          className="w-full px-4 py-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-right text-sm text-blue-600 cursor-pointer">
          Forgot Password?
        </p>
        <Button>Log In</Button>
      </form>

      <div className="my-6 text-center text-gray-500">or</div>

      <div className="space-y-3">
        <Button variant="secondary">
          <span className="flex items-center justify-center gap-2">
            <FaApple size={20} />
            Sign in with Apple
          </span>
        </Button>
        <Button variant="secondary">
          <span className="flex items-center justify-center gap-2">
            <FcGoogle size={20} />
            Continue with Google
          </span>
        </Button>
      </div>

      <p className="text-center mt-6 text-sm">
        Don’t have an account?{" "}
        <span className="text-blue-600 cursor-pointer">Sign up</span>
      </p>
    </main>
  );
}