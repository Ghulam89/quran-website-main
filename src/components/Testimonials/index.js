"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";

const Testimonials = () => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsAutoPlay(scrollPosition <= 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Viech Robert",
  //     location: "Warsaw, Poland",
  //     rating: 4.5,
  //     review:
  //       "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
  //     image: "/avatars/test1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Yessica Christy",
  //     location: "Shanxi, China",
  //     rating: 4.5,
  //     review:
  //       "I like it because I like to travel far and still can connect with high speed.",
  //     image: "/avatars/test2.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Kim Young Jou",
  //     location: "Seoul, South Korea",
  //     rating: 4.5,
  //     review:
  //       "This is very unusual for my business that currently requires a virtual private network that has high security.",
  //     image: "/avatars/test3.png",
  //   },
  //   {
  //     id: 4,
  //     name: "David Johnson",
  //     location: "New York, USA",
  //     rating: 4.8,
  //     review: "This VPN has been a game-changer for my online activities!",
  //     image: "/avatars/test1.png",
  //   },
  //   {
  //     id: 5,
  //     name: "Maria Garcia",
  //     location: "Madrid, Spain",
  //     rating: 4.7,
  //     review:
  //       "Easy to use and incredibly reliable. Highly recommended for everyone!",
  //     image: "/avatars/test2.png",
  //   },
  // ];


  
      const [testimonials,setTestimonials]= useState([]);
      const fetchTestimonials = () => {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    
        fetch('https://quran-backend-theta.vercel.app/v1/user/review', requestOptions)
          .then((response) => response.text())
          .then((result) => {
            let data = JSON.parse(result);
    
            console.log(data);
            
            setTestimonials(data?.data);
          })
          .catch((error) => console.error(error));
      };
    
    
      useEffect(()=>{
       
        fetchTestimonials();
    
      },[])

  return (
    <div className="py-12">
      <div className="container mx-auto px-6 lg:px-16 text-center">
       <div className=" sm:w-6/12 w-11/12 mx-auto pb-5">
       <h1 className="  text-primary text-3xl font-bold">Trusted by Thousands of Happy Students</h1>  
       <p className=" text-gray-400 pt-1">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
       </div>
        <div className="w-full  mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={
              isAutoPlay ? { delay: 3000, disableOnInteraction: false } : false
            }
            loop={true}
            // pagination={{ clickable: true }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={30}
           slidesPerView="auto"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials?.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <div className="p-6 bg-white  h-52 rounded-lg border-2 border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                 
                    <div className="flex items-center">
                      <img
                        src={testimonial.studentId?.photo}
                        alt={testimonial?.studentId?.photo}
                        className="w-12 h-12 rounded-full border-gray-300"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-800">
                          {testimonial?.studentId?.name}
                        </h3>
                        <p className="text-sm text-left text-gray-500">
                          {testimonial?.enrollmentId?.courseName}
                        </p>
                      </div>
                    </div>
                  
                    <div className="flex items-center gap-2 text-[#FEA250]">
                      <span className="text-lg text-gray-400">
                        {testimonial.rating}
                      </span>
                      <FaStar />
                    </div>
                  </div>

               
                  <p className="text-start text-gray-600">{testimonial.reviewText}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
          <div className="flex  justify-end gap-3 items-center mt-8">
            <button className="custom-prev w-14 h-14 bg-white border-2 border-secondary rounded-full flex items-center justify-center">
              <IoArrowBackOutline size={25} className="text-secondary" />
            </button>
            <button className="custom-next w-14 h-14 bg-secondary hover:bg-yellow-600 rounded-full flex items-center justify-center">
              <IoArrowForwardOutline size={25} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
