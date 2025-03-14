"use client";
import Button from "@/components/Button";
import ContactUs from "@/components/ContactUs/ContactUs";
import { Footer } from "@/components/footer/Footer";
import Navbar from "@/components/Header/Navbar";
import Input from "@/components/Input";
import { FiArrowRight } from "react-icons/fi";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js 13
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    age: "",
    qualification: "",
    state: "",
    country: "",
    whatsapp: "",
    phone: "",
    email: "",
    password: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const router = useRouter(); // Ensure you're using the correct `useRouter` from next/navigation

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Check if all fields are filled
  const checkFormCompletion = () => {
    const isComplete = Object.values(formData).every((field) => field !== "");
    setIsFormComplete(isComplete);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete) return;
    setIsLoading(true);

    // console.log("Name", formData?.name); // Log all form data

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    const raw = JSON.stringify({
      name: formData?.fullName,
      email: formData?.email,
      password: formData?.password,
      fatherName: formData?.fatherName,
      age: formData?.age,
      country: formData?.country,
      status: formData?.state,
      qualification: formData?.qualification,
      address: formData?.address,
      whatsappNumber: formData?.whatsapp,
      phoneNumber: formData?.phone,
      role: "student",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://quran-backend-theta.vercel.app/v1/user/register",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);

        // console.log("DATA", data);
        if (data?.success === false) {
          toast.error(data?.error);
          setIsLoading(false);
        }
        if (data?.success === true) {
          toast.success(data?.message);
          setIsLoading(false);
          router.push("/");
        }
      })
      .catch((error) => {
        toast.error(error);
        setIsLoading(false);
      });
  };

  // Enable form completion check on every input change
  React.useEffect(() => {
    checkFormCompletion();
  }, [formData]);

  return (
    <>
      <Navbar />
      <div className="bg-registerBG">
        <div className="sm:w-9/12 w-12/12 left-32 mt-2 border-[#F0FEEB] rounded-lg p-5 container mx-auto">
          <div className="text-left sm:w-8/12 w-12/12 py-4">
            <img src={"/avatars/topbar.png"} className="w-36" alt="" />
            <h1 className="m-0 text-3xl font-bold pt-2">Register Now</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultricies cursus elementum
              ullamcorper ullamcorper sed ipsum sed enim ultrices.
            </p>
          </div>
          <Toaster />

          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2 grid-cols-1">
              <div>
                <Input
                  label={"Full Name"}
                  placeholder={"Name"}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"Father Name"}
                  placeholder={"Father Name"}
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"Age"}
                  placeholder={"Age"}
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"Qualification"}
                  placeholder={"Qualification"}
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"Address"}
                  placeholder={"Address"}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"State"}
                  placeholder={"Select State"}
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"Country"}
                  placeholder={"Country"}
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"Whatsapp no"}
                  placeholder={"Whatsapp no"}
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"Phone No"}
                  placeholder={"Phone No"}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"Email Address"}
                  placeholder={"Email Address"}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label={"Password"}
                  placeholder={"Password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                label={isLoading ? "Please Wait..." : "Register Now"}
                rIcons={<FiArrowRight className="text-white" />}
                className={`text-white w-60 py-3 rounded-md ${
                  isFormComplete ? "bg-secondary" : "bg-gray-400"
                } `}
                type="submit"
                disabled={!isFormComplete || isLoading}
              />
            </div>
          </form>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Register;
