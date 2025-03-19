"use client"
import { Footer } from '@/components/footer/Footer';
import Navbar from '@/components/Header/Navbar';
import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const images = [
    '/avatars/course1.png',
    '/avatars/course2.png',
    '/avatars/course3.png',
    '/avatars/course1.png',
    '/avatars/course3.png',
    '/avatars/course2.png',
    '/avatars/course1.png',
    '/avatars/course3.png',
    '/avatars/course1.png',
  ];



  
    const [gallery,setGallery]= useState({});
    const fetchGallery = () => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  
      fetch('https://quran-backend-theta.vercel.app/v1/admin/gallery-images', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          let data = JSON.parse(result);
  
          console.log(data);
          
          setGallery(data?.data);
        })
        .catch((error) => console.error(error));
    };
  
  
    useEffect(()=>{
     
      fetchGallery();
  
    },[])

  return (
    <>
     <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 pb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-md shadow-lg">
            <img
              src={image?.imageUrl}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Gallery;