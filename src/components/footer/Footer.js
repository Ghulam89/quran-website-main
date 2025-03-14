"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const Footer = () => {


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
      fetchSocials();
    },[])

  return (
    <div className="bg-white text-gray-200">
      <footer className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Contact Section */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="#" className="block">
                <Image src="/avatars/logo.png" width={120} height={50} alt="Logo" />
              </Link>
              <p className="text-primary">
                A108 Adam Street, New York, NY 535022, United States
              </p>
              <p className="text-primary">Phone: +1 5589 55488 55</p>
              <p className="text-primary">Email: info@example.com</p>
              <div className="flex gap-4 pt-4">
                <Link href={`${social?.facebook}`}>
                  <FaFacebookF className="text-secondary text-2xl" />
                </Link>
                <Link href={`${social?.twitter}`}>
                  <FaTwitter className="text-secondary text-2xl" />
                </Link>
                <Link href={`${social?.instagram}`}>
                  <FaInstagram className="text-secondary text-2xl" />
                </Link>
                <Link href={`${social?.linkedin}`}>
                  <FaLinkedinIn className="text-secondary text-2xl" />
                </Link>
              </div>
            </div>

            {/* Empty Div for Future Content */}
            <div></div>

            {/* Courses Section */}
            <div>
              <h1 className="text-secondary text-2xl mb-6">Courses</h1>
              <ul className="space-y-5">
                <li>
                  <Link href="#" className="text-lg text-primary hover:underline">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-lg text-primary hover:underline">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-lg text-primary hover:underline">
                    PPC Agency
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-lg text-primary hover:underline">
                    Content Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-lg text-primary hover:underline">
                    Internet Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h1 className="text-secondary text-2xl mb-6">Company</h1>
              <ul className="space-y-5">
                <li>
                  <Link href="#" className="text-lg text-primary hover:underline">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-lg text-primary hover:underline">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-lg text-primary hover:underline">
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-lg text-primary hover:underline">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-primary py-4">
        <div className="container mx-auto text-center text-white">
          <p className="mb-0">
            © Copyright{" "}
            <Link href="#" className="text-reset hover:underline">
              Welcome Quran Institute
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
