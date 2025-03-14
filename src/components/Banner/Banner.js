"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Banner = () => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Stop autoplay when user scrolls down
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsAutoPlay(scrollPosition <= 100);
  };

  const [banner,setBanner]= useState([]);
  const fetchBanners = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('https://quran-backend-theta.vercel.app/v1/admin/banner', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        setBanner(data?.data);
      })
      .catch((error) => console.error(error));
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  


  }, []);

  const [social,setSocial]= useState({});
  const fetchSocials = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('https://quran-backend-theta.vercel.app/v1/admin/socialLinks', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);

        console.log(data);
        
        setSocial(data?.data?.[0]);
      })
      .catch((error) => console.error(error));
  };


  useEffect(()=>{
   
    fetchBanners();
    fetchSocials();

  },[])



  
  
   
  


  return (
    <div className="flex flex-col gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-6">
      {/* Social Media Icons */}
      <div className="flex sm:flex-col gap-4 sm:gap-6 items-center sm:items-start">
        <ul className="flex sm:flex-col gap-4">
          <li>
            <Link  href={`${social?.facebook}`}>
              <FaFacebookF className="text-primary text-2xl sm:text-3xl" />
            </Link>
          </li>
          <li>
            <Link href={`${social?.twitter}`}>
              <FaTwitter className="text-primary text-2xl sm:text-3xl" />
            </Link>
          </li>
          <li>
            <Link  href={`${social?.instagram}`}>
              <FaInstagram className="text-primary text-2xl sm:text-3xl" />
            </Link>
          </li>
          <li>
            <Link href={`${social?.linkedin}`}>
              <FaLinkedinIn className="text-primary text-2xl sm:text-3xl" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Swiper Section */}
      <div className="w-full sm:w-8/12 lg:w-6/12">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={
            isAutoPlay ? { delay: 3000, disableOnInteraction: false } : false
          }
          loop={true}
          pagination={{ clickable: true }}
          className="h-auto sm:h-[70vh]"
        >
          {banner?.map((item,index)=>{
            return (
              <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-full">
                <div className="text-center">
                  <Image
                    src={item?.images}
                    width={400}
                    height={100}
                    alt="Quran Image"
                    className="mx-auto"
                  />
                  {/* <Image
                    src={"/avatars/quran-1.png"}
                    width={400}
                    height={100}
                    alt="Quran Image 2"
                    className="mx-auto mt-4"
                  /> */}
                </div>
              </div>
            </SwiperSlide>
            )
          })}
          {/* Slide 1 */}
        

          
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
