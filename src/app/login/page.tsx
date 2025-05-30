import React from "react";

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-center text-2xl font-semibold mb-6 text-gray-800">
          Please Login to Proceed to Checkout
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
