"use client"
import { useState } from "react";
import AddHired from "../Hired/AddHired";

const GetHiredSection = () => {

  const [openModal,setOpenModal] = useState(false);
    return (
      <section id="gethired" className="flex flex-col items-center justify-center text-center py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800">Get Hired</h2>
        <p className="mt-4 text-gray-600 max-w-md">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
        <button onClick={()=>setOpenModal(true)} className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-md text-lg font-medium flex items-center hover:bg-orange-600 transition">
          Get Hired
          <span className="ml-2">→</span>
        </button>

        <AddHired setIsModalOpen={setOpenModal} isModalOpen={openModal} />
      </section>
    );
  };
  
  export default GetHiredSection;
  