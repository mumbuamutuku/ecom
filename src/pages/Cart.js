import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                KES {totalAmt}      
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span className="font-titleFont">
                We deliver country wide. We also offer door to door delivery.      
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">KES {totalAmt} </span>
          </p>
          <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            Proceed to checkout
          </button>
        </div>
      </div>
      <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"

      />
    </div>
  );
};

export default Cart