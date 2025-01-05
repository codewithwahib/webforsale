import { useState } from "react";
import { useRouter } from "next/router";

const Verify = () => {
  const [trxId, setTrxId] = useState("");
  const [senderAccount, setSenderAccount] = useState("");
  const [error, setError] = useState(""); // Error message state
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the inputs
    if (senderAccount.length < 11) {
      setError("Sender Account Number must be at least 11 digits.");
      return;
    }
    if (trxId.length < 11) {
      setError("Transaction ID must be at least 11 digits.");
      return;
    }

    // If validation passes, clear the error and proceed
    setError("");
    alert("Verification data submitted successfully.");
    router.push("/waiting");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6 text-center text-green-600">
          Verify Payment
        </h2>

        {/* Text and Payment Details */}
        <div className="text-black mb-6">
          <p className="text-xl font-bold text-black">
            <strong>Earnify Membership Card Fees</strong>
          </p>
          <p className="mt-4 text-xl font-bold text-black">
            <strong>Total Amount You Will Pay in PKR:</strong>
          </p>
          <p className="text-2xl text-black font-extrabold text-green-600">RS : 150</p>
          <p className="mt-4 text-lg  text-black font-bold">
            <strong>
              You will send this amount on the given EasyPaisa account number:
            </strong>
          </p>
          <p className="text-lg font-semibold text-black">
            <strong>EasyPaisa Account</strong>
          </p>
          <p className="text-lg font-semibold text-black">
            <strong>ACC NO:</strong> 03XXXXXXXXXX
          </p>
          <p className="text-lg font-semibold text-black">
            <strong>ACC NAME:</strong> XXXXXXXXXXXX 
          </p>
        </div>

        {/* Input Form for Verification */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Error Message */}
          {error && (
            <div className="mb-4 bg-red-100 text-red-700 p-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label className="block mb-1 font-medium text-lg text-black font-semibold">
              Sender Account Number
            </label>
            <input
              type="text"
              value={senderAccount}
              onChange={(e) => setSenderAccount(e.target.value)}
              required
              className="w-full px-3 py-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-lg text-black font-semibold">
              Transaction ID
            </label>
            <input
              type="text"
              value={trxId}
              onChange={(e) => setTrxId(e.target.value)}
              required
              className="w-full px-3 py-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Submit Verification
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
