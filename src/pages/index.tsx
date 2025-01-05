// pages/signup.tsx
import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for navigation

const SignUpPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    password: "",
    confirmPassword: "",
    accountNumber: "",
    accountType: "",
    referralCode: generateReferralCode(), // Permanent referral code
  });
  const [error, setError] = useState("");

  // Function to generate a referral code
  function generateReferralCode() {
    return `REF-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Redirect to agreement page
    router.push("/agreement");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo Section */}
      <div className="mb-6">
        <img
          src="/image.png" // Replace with your actual logo path
          alt="Logo"
          className="w-24 h-auto"
        />
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Country */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="country">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Account Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="accountNumber">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Account Type */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="accountType">
            Account Type
          </label>
          <select
            id="accountType"
            name="accountType"
            value={formData.accountType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Account Type</option>
            <option value="Savings">Easypaisa</option>
            <option value="Current">Jazzcash</option>
          </select>
        </div>

        {/* Referral Code */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="referralCode">
            Referral Code
          </label>
          <input
            type="text"
            id="referralCode"
            name="referralCode"
            value={formData.referralCode}
            readOnly
            className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded cursor-not-allowed"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
