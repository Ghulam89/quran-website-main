"use client";
import Button from "@/components/Button";
import EnrollNow from "@/components/EnrollNow/EnrollNow";
import { Footer } from "@/components/footer/Footer";
import Navbar from "@/components/Header/Navbar";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
const CourseDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [singleCourse, setSingleCourse] = useState({});
  const [openModal,setOpenModal] = useState(false);
  const [getData,setData] = useState({});

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://quran-backend-theta.vercel.app/v1/user/course/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("API Response:", result);
        setSingleCourse(result?.course);

        console.log("Transformed Data:", result?.course);
      })
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="bg-registerBG w-full bg-center  bg-cover">
      <div className="bg-white  py-12 px-6 md:px-16 lg:px-24 ">
        <h2 className="text-3xl font-bold text-gray-900">
          {singleCourse?.name}
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 mt-4">{singleCourse?.description}</p>

            <ul className="list-disc ml-6 mt-4 text-gray-700">
              {singleCourse?.bulletPoints?.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>

            <Button
               onClick={()=>{setOpenModal(true)
                setData(singleCourse)
               }}
              label={" Enroll Now "}
              rIcons={<FiArrowRight className="text-white" />}
              className={`text-white bg-secondary  mt-5 py-3 rounded-md  `}
              type="submit"
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {singleCourse?.additionalImages?.map((item, index) => {
              return (
                <img key={index} src={item?.url} alt="Books"  className="rounded-lg shadow-md w-full" />
              );
            })}
          </div>
        </div>

        {singleCourse?.youtubeVideoLink ? (
          <div className=" mt-10">
            <iframe
              width="100%"
              height="500"
              src={singleCourse?.youtubeVideoLink?.replace(
                "watch?v=",
                "embed/"
              )}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
      </div>
      </div>

      <EnrollNow  getData={getData} setIsModalOpen={setOpenModal} isModalOpen={openModal} />

     
      <Footer />
    </>
  );
};

export default CourseDetails;
