import React, { useContext} from "react";
import { ShopContext } from "../context/ShopContext";

const CartSummary = () => {
  const { getCartAmount, delivery_fee } = useContext(ShopContext);
  return (
    <>
      <div className='flex justify-between'>
        <p className="text-[16px] text-gray-400">Subtotal</p>
        <p className='subtotal text-[16px] text-gray-500'>${getCartAmount()}.00</p>
      </div>
      <div className='flex justify-between text-[16px] text-gray-500 py-2'>
        <p>Delivery</p>
        <p>$10.00</p>
      </div>
      <hr />
      <div className='flex justify-between text-[16px] font-bold text-black py-3'>
        <p>Total</p>
        <p className='priceUpdate'>
          ${getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
        </p>
      </div>
      <hr />
    </>
  );
};

export default CartSummary;
