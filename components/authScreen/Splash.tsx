import React from "react";
import Button from "@/components/authScreen/Button";

export default function Splash() {
  return (
    <main
      className="flex flex-col justify-between h-screen p-6 bg-gray-900 text-white"
      role="main"
    >
      <div className="flex flex-col items-center justify-center flex-1 text-center space-y-6">
        <h1 className="text-2xl font-bold">
          The simple way to share hyperlocal information.
        </h1>
        <p className="text-gray-300">
          Stay connected with your community, policies, and verified updates.
        </p>
      </div>

      <div className="space-y-4">
        <Button href="/login" variant="secondary">
          Login
        </Button>
        <Button href="/step1">
          Get Started
        </Button>
      </div>
    </main>
  );
}