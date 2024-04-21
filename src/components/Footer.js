import React from 'react'
import { logo, pesapal } from '../assets';
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs"


const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
            <div className="flex flex-col gap-7">
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-white text-sm tracking-wide">Print & Copy Solution</p>
                <img className="w-56" src={pesapal} alt="payment" />
                <div className="flex gap-5 text-lg text-gray-400">
                    <ImGithub className="hover:text-white duration-300 cursor-pointer" />
                    <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                    <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                    <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                    <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                    <FaLinkedin className="hover:text-white duration-300 cursor-pointer" />
                </div>
            </div>
            <div> 
                <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
                <div className="text-base flex flex-col gap-2">
                    <p> Nairobi, Kenya </p>
                    <p> Mobile: +254 720954809 </p>
                    <p> Phone: +254 733929096 </p>
                    <p> Email: printcopy16@gmail.com </p>     
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Profile </h2>
                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                    <span>
                        <BsPersonFill />
                    </span>
                    My Account
                </p>
            </div>
        </div>
    </div>
  );
}

export default Footer