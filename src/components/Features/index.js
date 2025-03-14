import Image from "next/image";
import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "2,769 online courses",
      description: "The gradual accumulation of information about atomic and small-scale behaviour...",
      icon: "/avatars/feature1.png",
      active: false,
    },
    {
      id: 2,
      title: "Certified Teacher",
      description: "The gradual accumulation of information about atomic and small-scale behaviour...",
      icon: "/avatars/feature2.png",
      active: false,
    },
    {
      id: 3,
      title: "24/7 Availability",
      description: "The gradual accumulation of information about atomic and small-scale behaviour...",
      icon: "/avatars/feature3.png",
      active: true, 
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`p-6 rounded-md shadow-lg ${
                feature.active
                  ? " bg-primary text-white"
                  : "bg-white text-gray-800"
              } hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-4xl mb-4 border w-14 h-14 bg-white rounded-lg flex justify-center items-center">
                <Image src={feature.icon} width={30} height={30}  alt="" />
              </div>
              
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <div className="my-4  w-20 h-0.5 bg-red-400"></div>
              <p className="">{feature.description}</p>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
