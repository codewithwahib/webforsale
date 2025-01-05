import { useState } from "react";
import { useRouter } from "next/router"; // For redirection after agreement
import Image from "next/image"; // Import Image from next/image

const Agreement = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("You must agree to the terms to proceed.");
    } else {
      // Redirect to the verify page after agreement
      router.push("/verify"); // Redirecting to the verify page
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Logo Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/image.png" // Replace with your logo image path
            alt="Logo"
            width={150} // Set the width
            height={150} // Set the height
            className="mb-6" // Adjust the size of the logo as needed
          />
        </div>

        <h2 className="text-4xl font-bold mb-10 text-center text-green-600">
          Terms and Agreement
        </h2>

        <p className="mb-4 text-black">
          <b>By signing up, you acknowledge that you understand and agree to the following terms:</b>
        </p>

        <ul className="list-disc list-inside mb-6 text-black">
          <li className="mb-10">
            <b>Profitads guarantees that all your information will be kept secure and will not be shared with anyone.</b>
          </li>
          <li className="mb-10">
            <b>To join this website, you need to buy a membership card for 150 rupees.</b>
          </li>
          <li className="mb-10">
            <b>Your payments are non-refundable. Once you make a payment, you will not be eligible for a refund under any circumstances.</b>
          </li>
          <li className="mb-10">
            <b>You will earn between $2 and $5 per day, depending on your participation and efforts.</b>
          </li>
          <li className="mb-10">
            <b>These earnings are estimates, and there may be fluctuations based on various factors.</b>
          </li>
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label className="text-black">I agree to the terms and conditions.</label>
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-white ${
              isAgreed ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isAgreed}
          >
            Agree
          </button>
        </form>
      </div>
    </div>
  );
};

export default Agreement;
