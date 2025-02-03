'use client';

import Navbar from '@/components/Navbar'
import Navbar2 from '@/components/Navbar2'
import React from 'react'
import Productsafety from '@/components/Productsafety';
import { useCart } from "@/app/CartContext";
import { useState } from "react";
import CheckOut from '../../action/CheckOut';

type Order = {
  orderId: number;
  customerId: number;
  products: Array<{
    id: number;
    quantity: number;
  }>;
  paymentStatus: 'Paid' | 'Pending' | 'Failed'; 
  status: 'Order Created' | 'Shipped' | 'Delivered' | 'Cancelled'; 
  message: string;
}

type Customer = {
  customerId: number,
  firstName: string,
  lastName: string,
  companyName?: string,
  address: string,
  city: string,
  zipCode: number,
  phone: number,
  email: string,
  additionalInformation?: string
}




function Checkout() {
  const { cart } = useCart();
  const [customerInfo, setCustomerInfo] = useState<Customer>({
    customerId: 0,
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    city: '',
    zipCode: 0,
    phone: 0,
    email: '',
    additionalInformation: '',
  });

  
  const products = cart.map((item) => ({
    id: item.id, // Use the product ID from the cart
    quantity: item.quantity, // Use the quantity from the cart
  }));
  const customerid = customerInfo.customerId;
  const [orderInfo, setOrderInfo] = useState<Order>({
    orderId: 0,
    customerId: customerid,
    products: products,
    paymentStatus: "Pending",
    status: 'Order Created', 
    message: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value })
    console.log(e);
  }
  const handleCheckout = () => {
    customerInfo.customerId = customerInfo.customerId + 1;
    orderInfo.orderId = orderInfo.orderId + 1;
    

    const products = cart.map((item) => ({
      id:item.id, 
      quantity: item.quantity,
    }));
  
    setOrderInfo((prevOrderInfo) => ({
      ...prevOrderInfo,
      products: products, 
    }));
  

    console.log("Order Info:", {
      ...orderInfo,
      products: products,
    });
    alert("Order Placed Successfully");
  
    CheckOut(cart, customerInfo);
  }


  const calculateSubtotal = (price: number, quantity: number) => {
    console.log("Price:", price, "Quantity:", quantity); // Debugging line
    return price * quantity;
  };

  const total = cart.reduce((acc, item) => {
    const subtotal = calculateSubtotal(item.price, item.quantity);
    return acc + subtotal;
  }, 0);



  return (
    <div>
      <Navbar />
      <Navbar2 name="Checkout" name1='Checkout' />

      <div className='checkout'>

        <div className='checkout-main'>
          <form className='billing-details space-y-[36px]' action="">
            <h3 className='billing-details-h font-semibold'>Billing details</h3>

            <div className='billing-details-names '>
              <div className='billing-details-name space-y-[22px] !text-black '>
                <p>First Name</p>
                <input name='firstName' value={customerInfo.firstName} onChange={handleInputChange} className=' billing-details-name-input border-[1px] border-[#9F9F9F] !rounded' type="text" />
              </div>
              <div className='billing-details-name space-y-[22px]'>
                <p>Last Name</p>
                <input name='lastName' value={customerInfo.lastName} onChange={handleInputChange} className='billing-details-name-input border-[1px] border-[#9F9F9F] !rounded' type="text" />
              </div>
            </div>

            <div className='billing-details-div space-y-[22px] '>
              <p>Company Name (Optional)</p>
              <input name='companyName' value={customerInfo.companyName} onChange={handleInputChange} className='billing-details-input border-[1px] border-[#9F9F9F] !rounded' type="text" />
            </div>
            <div className='billing-details-div space-y-[22px]'>
              <p>Street Address</p>
              <input name='address' value={customerInfo.address} onChange={handleInputChange} className='billing-details-input border-[1px] border-[#9F9F9F] !rounded' type="text" />
            </div>
            <div className='billing-details-div space-y-[22px]'>
              <p>Town / City</p>
              <input name='city' value={customerInfo.city} onChange={handleInputChange} className='billing-details-input border-[1px] border-[#9F9F9F] !rounded' type="text" />
            </div>
            <div className='billing-details-div space-y-[22px]'>
              <p>Zip Code</p>
              <input name='zipCode' value={customerInfo.zipCode} onChange={handleInputChange} className='billing-details-input border-[1px] border-[#9F9F9F] !rounded' type="text" />
            </div>
            <div className='billing-details-div space-y-[22px]'>
              <p>Phone</p>
              <input name='phone' value={customerInfo.phone} onChange={handleInputChange} className='billing-details-input border-[1px] border-[#9F9F9F] !rounded' type="number" />
            </div>
            <div className='billing-details-div space-y-[22px]'>
              <p>Email address</p>
              <input name='email' value={customerInfo.email} onChange={handleInputChange} className='billing-details-input border-[1px] border-[#9F9F9F] !rounded' type="email" />
            </div>

            <div>
              <input name='additionalInformation' value={customerInfo.additionalInformation} onChange={handleInputChange} placeholder='Additional Information' className='billing-details-input mt-4 border-[1px] border-[#9F9F9F] !rounded text-base ' type="text" />
            </div>
          </form>

          <div className='checkout-product'>
            <div className="checkout-product-pricing 2xl:space-y-[32px]   space-y-[22px]">
              <div className='checkout-product-pricing-product-total font-medium'>
                <h3>Product</h3>
                <h3>Subtotal</h3>
              </div>
              <div className='space-y-2 checkout-product-pricing-'>
                {cart.map((item, index) => (
                  <div className='checkout-product-pricing-product' key={`${item.id}-${index}`}>
                    <p className='text-[#9f9f9f]'>{item.name} {item.quantity} X {item.quantity}</p>
                    <p className='font-light'>Rs. {item.price}</p>
                  </div>
                ))}
              </div>
              <div className='checkout-product-pricing-product'>
                <p>Subtotal</p>
                <p className='font-light'>Rs. {total}</p>
              </div>
              <div className='checkout-product-pricing-product'>
                <p>Total</p>
                <p className='font-bold text-xl text-[#B88E2F]'>Rs. {total}</p>
              </div>
            </div>

            <div className=' checkout-product-billing-methods-decription  2xl:space-y-[39px] space-y-[20px]'>
              <div className='flex gap-4 items-center pt-4'>
                <input className='w-[14px] h-[14px] rounded-full bg-black' />
                <p className='2xl:text-base text-sm'>Cash On Delivery</p>
              </div>
              <p className='checkout-product-billing-methods-decription-p  custom-mini:text-xs custom-mini:w-[290] font-light text-[#9f9f9f] 2xl:w-[528px] w-[400] text-sm custom-tiny:text-xs custom-tiny:w-[350] 2xl:text-base'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              <div className='space-y-4 2xl:text-base text-sm custom-tiny:text-xs'>
                <div className='flex gap-4 items-center'>
                  <input id="d" name="method" value="d" className='w-[14px] h-[14px] rounded-full border-[1px] border-gray-400' type='radio'/>
                  <label htmlFor="d"><p className='font-medium text-[#9f9f9f]'>Direct Bank Transfer</p></label>
                </div>
                <div className='flex gap-4 items-center'>
                  <label><input name="method" value="c" className='w-[14px] h-[14px] rounded-full border-[1px] border-gray-400' type='radio'/></label>
                  <p className='font-medium text-[#9f9f9f]'>Cash On Delivery</p>
                </div>
              </div>
              <p className='checkout-product-billing-methods-decription-p 2xl:w-[529px] w-[400] 2xl:text-base text-sm font-light   custom-tiny:text-xs custom-tiny:w-[350] custom-mini:text-xs custom-mini:w-[290]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span></p>
              <div className='2xl:pl-28 pl-20 w-[509px]'>
                <button onClick={handleCheckout} className=' mt-[39px] custom-tiny:mt-5 custom-mini:mt-5 checkout-product-billing-btn border-[1px] border-black rounded-[15px]'>Place Order</button>
              </div>
            </div>

          </div>


        </div>
      </div>

      <Productsafety />
    </div>
  )
}

export default Checkout;