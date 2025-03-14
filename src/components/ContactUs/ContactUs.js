"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://quran-backend-theta.vercel.app/v1/user/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);

      if (data?.success === true) {
        toast.success(data?.message);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex items-center justify-center min-h-screen bg-[#042b42] p-6"
    >
      <div className="max-w-4xl w-full bg-[#042b42] rounded-md p-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
        <p className="text-center text-gray-300 mb-6">
          Lorem ipsum dolor sit amet
        </p>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div className="col-span-1">
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Full Name"
              className="w-full mt-2 p-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-b focus:border-secondary"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email Address */}
          <div className="col-span-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email Address"
              className="w-full mt-2 p-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-b focus:border-secondary"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Phone Number */}
          <div className="col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Your Phone Number"
              className="w-full mt-2 p-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-b focus:border-secondary"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          {/* Message */}
          <div className="col-span-1">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <input
              id="message"
              placeholder="Your Message"
              className="w-full mt-2 p-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-b focus:border-secondary"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 mt-4 flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 w-60 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
