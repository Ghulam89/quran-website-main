"use client";
import React, { useState } from "react";
import { MdClose, MdOutlineFileUpload } from "react-icons/md";
import Modal from "../modal";
import Button from "../Button";
import Input from "../Input";
import toast, { Toaster } from "react-hot-toast";

const AddHired = ({ isModalOpen, setIsModalOpen, closeModal, setUsers }) => {
  const [planData, setPlanData] = useState({
    name: "",
    fatherName: "",
    qualification: "",
    whatsapp: "",
    phone: "",
    address: "",
    cnicImage: null,
    imagePreview: "", // State for image preview
  });

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  // Check if all fields are filled
  const isFormValid =
    planData.name &&
    planData.fatherName &&
    planData.qualification &&
    planData.whatsapp &&
    planData.phone &&
    planData.address &&
    planData.cnicImage;

  const handleChange = (e) => {
    const { name, value, files } = e.target;




    if (name === "cnicImage") {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file); // Create a URL for the image preview

      setImage(file)

      setPlanData((prev) => ({
        ...prev,
        cnicImage: file,
        imagePreview: previewUrl, // Set the preview URL
      }));
    } else {
      setPlanData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const bannerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    const formdata = new FormData();
    formdata.append("images", image);

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

  const handleRemoveImage = () => {
    setPlanData((prev) => ({
      ...prev,
      cnicImage: null,
      imagePreview: "", // Remove the image preview
    }));
    setImage(""); // Also reset the 'image' state for the file

    // Reset the file input value
    document.getElementById("fileInput").value = "";
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
                <Toaster
                  position="top-right"
                  reverseOrder={false}
                />
                <div
                  className="w-full border-dashed border-[#9E9E9E] bg-[#F6F6F6] border-2 rounded-lg p-4 cursor-pointer"
                  onClick={() => document.getElementById("fileInput").click()} // Trigger input click
                >
                  <div className="bg-[#F6F6F6] mx-auto w-14 flex justify-center items-center h-15 rounded-2xl">
                    <MdOutlineFileUpload size={30} className="text-primary" />
                  </div>
                  <p className="text-primary font-medium mt-3 text-center">
                    <span className="text-[#0085FF]">Click here</span> to upload or drop CNIC
                  </p>

                  <input
                    id="fileInput" // Add an ID to reference the input
                    type="file"
                    name="cnicImage"
                    style={{ display: "none" }} // Keep input hidden
                    onChange={handleChange} // Call the change handler
                  />
                </div>

                {/* Image Preview Section */}
                {planData.imagePreview && (
                  <div className="mt-4 relative">
                    <img
                      src={planData.imagePreview}
                      alt="Image Preview"
                      className="w-full h-[100px] rounded-lg"
                    />
                    <MdClose
                      onClick={handleRemoveImage}
                      size={20}
                      className="absolute top-0 right-0 cursor-pointer text-white bg-black p-1 rounded-full"
                    />
                  </div>
                )}
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

export default AddHired;
