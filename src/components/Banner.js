import React, { useState } from 'react';
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const Banner = () => {
    const [currentSlide, setCurrentSlide]= useState(0)
    const data = [
        
        bg1,
        bg2,
        bg3,
        bg4
    ];

    const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0?3:(prev)=>prev-1)
    }
    const nextSlide=()=>{
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
    }

    return (
        <div className="w-full h-auto overflow-x-hidden">
            <div className="w-screen h-[650px] relative">
                <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }} 
                className="w-[400vw] h-full flex transition-transform duration-1000">
                    {data.map((imgSrc, index) => (
                        <img
                            key={index}
                            className="w-screen h-full object-cover"
                            src={imgSrc}
                            alt={`img${index + 1}`}
                            loading="priority"
                        />
                    ))}
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                    <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
                    justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                    active:bg-gray-900 duration-300">
                        <FiArrowLeft />
                    </div>
                    <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
                    justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                    active:bg-gray-900 duration-300">
                        <FiArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
