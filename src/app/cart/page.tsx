'use client';
import Navbar from "@/components/Navbar";
import Productsafety from "@/components/Productsafety";
import Navbar2 from "@/components/Navbar2";
import Image, { StaticImageData } from "next/image";
import { RiDeleteBin7Fill } from "react-icons/ri";
import Link from "next/link";
import { useCart } from "@/app/CartContext";
import { useState } from "react";

type Data = {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  quantity: number;
};

function Cart() {
  const [product, setProduct] = useState<Data | null>(null);
  const { removeFromCart } = useCart();
  const { cart } = useCart();

  const handleDeleteToCart = (id: number) => {
    removeFromCart(id);
  };

  // Calculate subtotal and total
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
      <Navbar2 name="Cart" name1="Cart" />

      <div className="cart">
        <div className="cart-productdetails space-y-[40px]">
          <div className="cart-productdetails-header font-medium bg-[#FFF9E5]">
            <div className="cart-productdetails-header-pricing">
              <p>Product</p>
              <p>Price</p>
            </div>
            <div className="cart-productdetails-header-magnitude">
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
          </div>

          <ul className="space-y-4">
            {cart.length === 0 ? (
              <li>Your cart is empty.</li>
            ) : (
              cart.map((item, index) => (
                <li key={`${item.id}-${index}`} className="cart-item flex items-center">
                  <div className="cart-product">
                    <div className="cart-product-img bg-[#FBEBB5] rounded-lg">
                      <Image src={item.image} height={100} width={100} alt={item.name} />
                    </div>
                    <p>{item.name}</p>
                    <p>Rs. {item.price}</p>
                    <div className="border-[1px] rounded-md py-1 text-center h-8 w-8 border-black">
                      {item.quantity}
                    </div>
                    <p>Rs. {calculateSubtotal(item.price, item.quantity)}</p>
                    <div>
                      <RiDeleteBin7Fill onClick={() => handleDeleteToCart(item.id)} size={21} color="#FBEBB5" />
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="cart-total bg-[#FFF9E5] font-medium space-y-[61px]">
          <h3 className="cart-total-h">Cart Totals</h3>
          <div className="space-y-[48px]">
            <div className="space-y-[31px]">
              <div className="cart-total-subtotal">
                <p>Subtotal</p>
                <p className="text-[#9F9F9F]">Rs. {total}</p>
              </div>
              <div className="cart-total-subtotal">
                <p>Total</p>
                <p className="text-[#B88E2F]">Rs. {total}</p>
              </div>
            </div>
            <button className="cart-total-btn">
              <Link href="../checkout">Check Out</Link>
            </button>
          </div>
        </div>
      </div>

      <Productsafety />
    </div>
  );
}

export default Cart;