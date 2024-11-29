import React from "react";
import Meteors from "../components/Meteors";
import { TypingAnimation } from "../components/TypingAnimation";
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaGlobe } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import logo from "../assets/images/Eduwedo_V00R04.svg";

const ConnectionPage = () => {
  // Handle sharing the website link
  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out Eduwedo!",
          text: "Empowering Minds, Envisioning Futures. Visit our website for more details.",
          url: "https://eduwedo.in", // Link to website
        });
        console.log("Website link shared successfully!");
      } catch (error) {
        console.error("Error sharing the website link:", error);
      }
    } else {
      alert("Your browser does not support sharing. Please copy this link: https://eduwedo.in");
    }
  };

  // Links arrays 
  const links = [
    {
      label: "Follow us on LinkedIn",
      href: "#",
      icon: <FaLinkedin />,
      borderColor: "border-blue-700",
      hoverBg: "hover:bg-blue-700",
    },
    {
      label: "Follow us on Instagram",
      href: "#",
      icon: <FaInstagram />,
      borderColor: "border-transparent",
      hoverBg: "hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    },
    {
      label: "Follow us on Twitter",
      href: "#",
      icon: <FaTwitter />,
      borderColor: "border-blue-400",
      hoverBg: "hover:bg-blue-400",
    },
    {
      label: "Subscribe us on Youtube",
      href: "#",
      icon: <FaYoutube />,
      borderColor: "border-red-600",
      hoverBg: "hover:bg-red-600",
    },
    {
      label: "Visit our Website",
      href: "#",
      icon: <FaGlobe />,
      borderColor: "border-transparent",
      hoverBg: "hover:bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500",
    },
  ];

  return (
    <div
      className="relative min-h-screen flex flex-col items-center
        bg-white md:bg-[url('/path-to-meteor-image.jpg')]
        bg-cover bg-center text-white p-6
        overflow-x-hidden w-full"
    >
      {/* Meteor Animation for Desktop */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <Meteors number={20} />
      </div>

      {/* File Upload Icon */}
      <div
        className="absolute md:top-8 md:left-12 top-15 left-8 p-2 border-2 border-gray-200 rounded-full cursor-pointer"
        onClick={handleShareClick}
      >
        <FiUpload className="w-10 h-6 text-gray-500" />
      </div>

      {/* Header Section */}
      <div className="text-center mt-12">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-black bg-white flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="Eduwedo Logo"
              className="object-contain w-16 h-16"
            />
          </div>
        </div>
        <h1 className="text-xl font-bold mt-4 text-black">@eduwedo.in</h1>
        <TypingAnimation
          text="Empowering Minds, Envisioning Futures"
          duration={100}
          className="text-sm text-gray-600 m-0"
        />
      </div>

      {/* Links Section */}
      <div className="w-full max-w-md space-y-4 mt-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`flex items-center bg-gray-800 text-white font-medium py-3 px-4
              rounded-lg transition border-2 ${link.borderColor} 
              ${link.hoverBg} hover:text-black`}
          >
            <div className="text-xl mr-4">{link.icon}</div>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConnectionPage;

