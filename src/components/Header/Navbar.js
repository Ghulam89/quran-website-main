"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropright, IoMdClose } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";

const Navbar = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [defaultCategory, setDefaultCategory] = useState("Bedroom");

  const navItems = [
    { label: "About Us", href: "#choose" },
    { label: "Courses", href: "#courses" },
    { label: "Contact Us", href: "#contact" },
    { label: "Get Hired", href: "#gethired" },
    { label: "Gallery", href: "#gallery" },
  ];

  const categories = [
    {
      category: "Bedroom",
      icon: <FaBed />,
      menu: [
        {
          title: "Bedroom",
          items: [
            { label: "Luxurious Italian Bed", href: "" },
            { label: "Elegant Queen-size Bed", href: "" },
            { label: "Artisan Wooden Craft Bed", href: "" },
            { label: "Royal King-size Bed", href: "" },
          ],
        },
        // More items...
      ],
    },
    // Additional categories...
  ];

  const closeSubMenu = () => {
    setDesktopMenuOpen(false);
    setSelectedCategory(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative bg-white">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <Link href="/">
          <Image src="/avatars/logo.png" width={120} height={70} alt="Logo" />
        </Link>
        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <Link
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(item.href);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              key={index}
              href={item.href}
              className="font-medium text-primary text-[16px]  hover:text-secondary hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-5">
          {/* <Link
            href="https://quran-admin.vercel.app/"
            target="_blank"
            className="font-semibold text-primary hover:text-slate-900 hover:underline"
          >
            Login
          </Link> */}

          <Link href="https://quran-admin.vercel.app/">
            <Button
              label="Login"
              rIcons={<FiArrowRight className="text-white" />}
              className="bg-secondary text-white py-2 px-5 rounded-md"
            />
          </Link>
        </div>
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <IoMdClose size={24} />
          ) : (
            <RxHamburgerMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start gap-4 px-4 py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector(item.href);
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href={item.href}
                  className="text-primary font-medium hover:text-slate-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://quran-admin.vercel.app/"
                // target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-slate-900"
              >
                Login
              </a>
            </li>
            <li>
              <Link href={"/register"}>
                <Button
                  label="Register Now"
                  rIcons={<FiArrowRight className="text-white" />}
                  className="bg-secondary text-white py-2 px-5 rounded-md"
                />
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Submenu */}
      {desktopMenuOpen && (
        <section className="absolute left-0 right-0 z-10 w-full bg-white border-t ">
          <div className="hidden md:flex mx-auto max-w-[1200px] py-6">
            <div className="w-[300px] border-r">
              <ul className="px-4">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`${selectedCategory === category.category
                      ? "bg-[#F97316] text-white"
                      : "hover:bg-neutral-100"
                      } flex items-center gap-3 p-2 rounded-md cursor-pointer`}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category.category
                          ? null
                          : category.category
                      )
                    }
                  >
                    {category.icon}
                    {category.category}
                    <IoMdArrowDropright className="ml-auto" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-grow px-6">
              {selectedCategory && (
                <div>
                  {categories
                    .find((category) => category.category === selectedCategory)
                    ?.menu.map((submenu, index) => (
                      <div key={index} className="mb-6">
                        <p className="font-medium text-gray-600 mb-2">
                          {submenu.title}
                        </p>
                        <ul>
                          {submenu.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm">
                              <a
                                href={item.href}
                                className="text-primary hover:underline"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              )}
            </div>
            <button
              onClick={closeSubMenu}
              className="absolute top-4 right-4 text-gray-600"
            >
              <IoMdClose size={20} />
            </button>
          </div>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
