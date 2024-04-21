import React from 'react'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className="py-10">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-zxl bg-black text-white py-2 w-80 text-center">
                Shopping Everyday
            </h1>
            <span className="w-20 h-[3px] bg-black"></span>
            <p className="max-w-[700px] text-gray-600 text-center">
                At Print & Copy Solution Ltd we are able to supply photocopier toners, inks and consumables for all makes and models. 
                We also have access to a wide range of spare parts for the leading brands including Toshiba, Muratec, Konica Minolta, 
                Sharp, Canon, Kyocera, Utax and Ricoh</p>
        </div>
        <div className="max-w-screen-xl mx-auto">
            <ProductCard />
        </div>
    </div>
  )
}

export default Product