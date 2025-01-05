// pages/waiting.tsx

import { useEffect } from "react";
import { useRouter } from "next/router";

const Waiting = () => {
  const router = useRouter();

  useEffect(() => {
    // Optional: You can implement logic to auto-redirect after a certain time
    // setTimeout(() => {
    //   router.push('/someOtherPage'); // Example: Redirect to a dashboard
    // }, 5000); // Redirect after 5 seconds
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Request Submitted</h2>
        <p className="text-xl text-center text-gray-700 mb-6">
          Your request has been submitted successfully. Please wait while we process your request.
        </p>
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-12 w-12 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" />
            <circle className="opacity-75" cx="12" cy="12" r="6" />
          </svg>
        </div>
        <p className="text-center text-gray-600 mt-4">Please be patient while we review your submission.</p>
      </div>
    </div>
  );
};

export default Waiting;
