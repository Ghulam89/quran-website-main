"use client";
import React, { useState } from "react";
import { MdClose, MdOutlineFileUpload } from "react-icons/md";
import Modal from "../modal";
import Button from "../Button";
import Input from "../Input";
import toast, { Toaster } from "react-hot-toast";

const AddHired = ({ isModalOpen, setIsModalOpen, closeModal, setUsers }) => {
  const [pdfPreview, setPdfPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const [planData, setPlanData] = useState({
    name: "",
    fatherName: "",
    qualification: "",
    whatsapp: "",
    phone: "",
    address: "",
    file:null
  });

  // Check if all fields are filled
  const isFormValid =
    planData.name &&
    planData.fatherName &&
    planData.qualification &&
    planData.whatsapp &&
    planData.phone &&
    planData.address &&
    pdfPreview; // Ensure PDF is uploaded

  // Handle PDF file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPlanData((prev) => ({ ...prev, file }));
      setPdfPreview(URL.createObjectURL(file)); // Create a preview URL for the PDF
    } else {
      toast.error("Please upload a valid PDF file.");
    }
  };

  // Remove PDF file
  const handleRemovePdf = () => {
    setPlanData((prev) => ({ ...prev, file: null }));
    setPdfPreview(null);
  };

  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
   const bannerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    const formdata = new FormData();
    formdata.append("images", planData.file);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch("https://file-upload-ashen.vercel.app/api/upload", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);

        // console.log("Image", data);
        if (data?.success === false) {
          setLoading(false)
          toast.error("Error While Uploading Image")
        } else {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          const raw = JSON.stringify({
            "name": planData?.name,
            "fatherName": planData?.fatherName,
            "qualification": planData?.qualification,
            "whatsapp": planData?.whatsapp,
            "phone": planData?.phone,
            "address": planData?.address,
            "cnicImage": data?.data[0]
          });

          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          };

          fetch("https://quran-backend-theta.vercel.app/v1/admin/get-hired", requestOptions)
            .then((response) => response.text())
            .then((result) => {
              let data = JSON.parse(result);
              // console.log(data);
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
            <h1 className="capitalize h4 font-medium text-lg">Get Hired</h1>
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
                    label={"Father Name"}
                    placeholder={"Father Name"}
                    className={"px-2 w-full"}
                    name="fatherName"
                    value={planData.fatherName}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Qualification"}
                    placeholder={"Qualification"}
                    className={"px-2 w-full"}
                    name="qualification"
                    value={planData.qualification}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Whatsapp No"}
                    placeholder={"Whatsapp No"}
                    className={"px-2 w-full"}
                    name="whatsapp"
                    value={planData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Phone No"}
                    placeholder={"Phone No"}
                    className={"px-2 w-full"}
                    name="phone"
                    value={planData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:w-[48%] w-full">
                  <Input
                    label={"Address"}
                    placeholder={"Address"}
                    className={"px-2 w-full"}
                    name="address"
                    value={planData.address}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="w-full border-dashed border-[#9E9E9E] bg-[#F6F6F6] border-2 rounded-lg p-4 cursor-pointer"
                  onClick={() => document.getElementById("pdfInput").click()}
                >
                  <div className="bg-[#F6F6F6] mx-auto w-14 flex justify-center items-center h-15 rounded-2xl">
                    <MdOutlineFileUpload size={30} className="text-primary" />
                  </div>
                  <p className="text-primary font-medium mt-3 text-center">
                    <span className="text-[#0085FF]">Click here</span> to upload or drop PDF
                  </p>
                  {pdfPreview && (
                    <div className="relative w-full h-32 mt-4">
                      <iframe
                        src={pdfPreview}
                        title="PDF Preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={handleRemovePdf}
                        className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-full"
                      >
                        <MdClose size={20} />
                      </button>
                    </div>
                  )}
                  <input
                    id="pdfInput"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    accept="application/pdf"
                  />
                </div>
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
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddHired;