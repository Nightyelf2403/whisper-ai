import React from 'react';

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-xl font-medium text-gray-500 hover:text-black">
          &times;
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-1 text-black">Welcome back</h2>
        <p className="text-sm text-gray-700 mb-4">Sign In to your Whisper account</p>

        {/* Email Field */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-pink-300 rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-pink-300 rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center text-sm mb-3">
          <label className="flex items-center">
            <input type="checkbox" className="accent-pink-400 mr-2" />
            Remember me
          </label>
          <a href="#" className="text-pink-400 hover:underline">Forgot Password?</a>
        </div>

        {/* Sign In */}
        <button className="w-full bg-gradient-to-b from-[#eecdd5] to-[#d8aeb9] text-black font-semibold py-2 rounded-md shadow">
          Sign In
        </button>

        {/* Google Sign In */}
        <button className="w-full border border-pink-300 mt-4 py-2 rounded-md flex items-center justify-center text-sm">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
          Sign In with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Anonymous Chat */}
        <button className="w-full border border-pink-300 text-[#5c4140] text-sm py-2 rounded-md mb-2">
          Anonymous chat with whisper
        </button>
        <p className="text-xs text-center text-gray-500 mb-4">
          Your session will be private and deleted once you exit.
        </p>

        {/* Sign Up */}
        <p className="text-center text-sm">
          Don’t Have an Account? <a href="#" className="text-[#d4948d] font-medium hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;