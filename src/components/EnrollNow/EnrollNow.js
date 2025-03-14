"use client";
import React, { useState } from "react";
import { MdClose, MdOutlineFileUpload } from "react-icons/md";
import Modal from "../modal";
import Button from "../Button";
import Input from "../Input";
import toast, { Toaster } from "react-hot-toast";
const EnrollNow = ({ isModalOpen, setIsModalOpen, closeModal, setUsers,getData }) => {
  const [planData, setPlanData] = useState({
    name: "",
    age: "",
    whatsappNumber: "",
    phoneNumber: "",
    country: "",
    education: "",
  });

  const [loading, setLoading] = useState(false);
  const isFormValid =
    planData.name &&
    planData.age &&
    planData.whatsappNumber &&
    planData.phoneNumber &&
    planData.country &&
    planData.education 

  const handleChange = (e) => {
    const { name, value} = e.target;

      setPlanData((prev) => ({
        ...prev,
        [name]: value,
      }));
    
  };

  const bannerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "course":getData, 
      "name": planData?.name,
      "age": planData?.age,
      "education": planData?.education,
      "whatsappNumber": planData?.whatsappNumber,
      "phoneNumber": planData?.phoneNumber,
      "country": planData?.country,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://quran-backend-theta.vercel.app/v1/user/admissionRequest", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        if (data?.success === true) {
          setLoading(false)
          toast.success("Successfully Applied For Job.")

          setTimeout(() => {
            setLoading(false);
            location.reload()
          }, 2000);
        } else {
          setLoading(false)

          toast.error(data?.message)
        }

      })
      .catch((error) => {
        setLoading(false)
        toast.error(error)

      });

    // setLoading(true);

    // // Simulate a delay (2 seconds)
    // setTimeout(() => {
    //   setLoading(false);
    //   console.log(planData); // Log all input data
    // }, 2000);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal} className="rounded-md">
        <div className="">
          <div className="p-3 flex justify-between items-center">
            <div></div>
            <h1 className="capitalize h4 font-medium text-lg">Enroll Now</h1>
            <MdClose onClick={() => setIsModalOpen(false)} size={25} />
          </div>
          <hr />
          <div className="p-5">
            <form onSubmit={bannerSubmit}>
              <div className="flex gap-5 flex-wrap">
                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Full Name"}
                    placeholder={"name"}
                    className={"px-2 w-full"}
                    name="name"
                    value={planData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Age"}
                    placeholder={"Age"}
                    className={"px-2 w-full"}
                    name="age"
                    value={planData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Whatsapp No"}
                    placeholder={"Whatsapp no"}
                    className={"px-2 w-full"}
                    name="whatsappNumber"
                    value={planData.whatsappNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Phone No"}
                    placeholder={"Phone No"}
                    className={"px-2 w-full"}
                    name="phoneNumber"
                    value={planData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Country"}
                    placeholder={"Country"}
                    className={"px-2 w-full"}
                    name="country"
                    value={planData.country}
                    onChange={handleChange}
                  />
                </div>

                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Education"}
                    placeholder={"Enter Education"}
                    className={"px-2 w-full"}
                    name="education"
                    value={planData.education}
                    onChange={handleChange}
                  />
                </div>
                <Toaster
                  position="top-right"
                  reverseOrder={false}
                />
               
              </div>

              <div className="flex justify-center pt-5">
                <Button
                  label={loading ? "Submitting..." : "Submit"}
                  type="submit"
                  className={`${isFormValid ? "bg-[#0085FF]" : "bg-gray-400"
                    } mt-3 rounded-md text-white py-2.5 w-44`}
                  disabled={!isFormValid || loading}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EnrollNow;
