import React from "react";
import Navbar from "/components/Navbar";

function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
        <div className="text-center max-w-xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {/* Building the future of intelligent business solutions. */}
              Launching Intelligent Business Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Going live soon—want to join the ride?
            </p>
          </div>

          {/* Email Signup */}
          {/* <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 bg-gray-200 py-2 rounded-lg text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
          >
            Be the first to know!
          </button>
        </form> */}

          {/* Careers Prompt */}
          <p className="text-xl text-gray-400">
            We’re hiring! Reach us at{" "}
            <a
              href="mailto:careers@goobervo.com"
              className="underline hover:text-white"
            >
              careers@goobservo.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default Page;
