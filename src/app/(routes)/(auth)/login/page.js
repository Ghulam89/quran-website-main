import Button from "@/components/Button";
import ContactUs from "@/components/ContactUs/ContactUs";
import { Footer } from "@/components/footer/Footer";
import Navbar from "@/components/Header/Navbar";
import Input from "@/components/Input";
import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="  bg-registerBG ">
        <div className=" sm:w-9/12 w-12/12  left-32    mt-2 border-[#F0FEEB] rounded-lg p-5 container mx-auto">
          <div className=" text-left sm:w-8/12 w-12/12 py-4">
           <img  src={'/avatars/topbar.png'} className=" w-36" alt="" />
            <h1 className=" m-0 text-3xl font-bold pt-2">Login Now</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Ultricies cursus elementum
              ullamcorper ullamcorper sed ipsum sed enim ultrices.
            </p>
          </div>
          <div className=" grid gap-5  md:grid-cols-2 grid-cols-1">
            <div className="">
              <Input
                label={"Email Address"}
                placeholder={"Email Address"}
                className={""}
              />
            </div>

            <div className="">
              <Input
                label={"Password"}
                placeholder={"Password"}
                className={""}
              />
            </div>
          </div>

          <div className=" flex  justify-end mt-8">
            <Button
              label={"Login Now"}
              rIcons={<FiArrowRight className="text-white" />}
              className={" text-white   w-60 py-3  rounded-md   bg-secondary"}
            />
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Login;
