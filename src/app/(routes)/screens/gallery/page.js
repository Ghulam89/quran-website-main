import { Footer } from '@/components/footer/Footer';
import Navbar from '@/components/Header/Navbar';
import React from 'react';

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
  return (
    <>
     <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 pb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-md shadow-lg">
            <img
              src={image}
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