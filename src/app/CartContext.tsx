'use client'


import { product } from '@/sanity/schemaTypes/product';
import { StaticImageData } from 'next/image';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    description: string;
    tags: string[];
    image: StaticImageData;
    width: number;
    height: number;
    rating: number;
    stockQuantity: number;
    quantity: number;
};

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prev) =>  [...prev, item]);
    };

    const removeFromCart = (id:number) => {
       setCart((prev) => prev.filter(item => item.id !== id))
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
