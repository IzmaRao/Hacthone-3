'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Image, { StaticImageData } from 'next/image';
import { FaGreaterThan } from "react-icons/fa6";
import stars from '../../../../public/Group 88.png';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import soffa1 from '../../../../public/Cloud sofa three seater + ottoman_2 1.png';
import soffa2 from '../../../../public/Cloud sofa three seater + ottoman_1 1.png';
import Relatedproducts from '../../../components/Relatedproducts';
import { useCart } from '@/app/CartContext';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import img1 from '../../../../public/Outdoor sofa set 2.png';
import img2 from '../../../../public/Outdoor sofa set_2 1.png';
import img3 from '../../../../public/Stuart sofa 1.png';
import img4 from '../../../../public/Maya sofa three seater (1) 1.png';
import { client } from '@/sanity/lib/client';
import SingleSeletonLoader from '@/components/SingleSeletonLoader';
import { HiHeart } from 'react-icons/hi2';


type Data = {
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
interface Params {
    params: Promise<{ id: string }>; // Reflecting that `params` is a Promise
}
interface SizeOption {
    value: string;
    label: string;
}

interface ColorOption {
    value: string;
    label: string;
}


const Detailpageshop = ({ params }: Params) => {
    const [product, setProduct] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [wishlist, setWishlist] = useState<Data[]>([]);
    const [count, setCount] = useState(1);
    const { addToCart } = useCart();
    const { removeFromCart } = useCart();
    const [cartOpen, setCartOpen] = useState(false);
    const { cart } = useCart();
    const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
    const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);

    useEffect(() => { if (typeof window !== 'undefined') { 
        const savedWishlist = localStorage.getItem('wishlist'); 
        if (savedWishlist) { 
            setWishlist(JSON.parse(savedWishlist) as Data[]); 
        } } 
    }, []);

    const addToWishlist = (product: Data) => { 
        console.log('Product:', product); // Log product data
        console.log('Current Wishlist:', wishlist); // Log current wishlist
    
        if (!wishlist.some(item => item.id === product.id)) { // Avoid duplicate entries
            const updatedWishlist: Data[] = [...wishlist, product]; 
            console.log('Updated Wishlist:', updatedWishlist); // Log updated wishlist
            setWishlist(updatedWishlist); 
            if (typeof window !== 'undefined') { // Check if window is defined
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); 
            }
            console.log('Wishlist stored:', updatedWishlist); // Log the wishlist data
        }
    };
    
    
    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            try {
                const parsedWishlist = JSON.parse(savedWishlist);
                console.log('Wishlist fetched:', parsedWishlist); // Log the parsed wishlist data
                setWishlist(parsedWishlist);
            } catch (error) {
                console.error('Error parsing wishlist data:', error);
            }
        }
    }, []);
    
    
    

    const sizeOptions: SizeOption[] = [
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'SS', label: 'SS' },
    ];

    // Color options array
    const colorOptions: ColorOption[] = [
        { value: '#816DFA', label: '#816DFA'},
        { value: '#000000', label: '#000000' },
        { value: '#CDBA7B', label: '#CDBA7B' },
    ];

    const handleSizeChange = (size: SizeOption) => {
        setSelectedSize(size);
    };

    // Function to handle color selection
    const handleColorChange = (color: ColorOption) => {
        setSelectedColor(color);
    };


    const handleCart = () => {
        setCartOpen(!cartOpen);
        console.log("cart");
    };

    useEffect(() => {
        const fetchProduct = async () => {
            const { id } = await params;
            try {
                const response = await client.fetch(`${process.env.NEXT_PUBLIC_SINGLE_PRODUCT_URL} && id == ${id}]{id,name,price,description,tags,image,width,height,rating,stockQuantity}[0]`);
                const productData: Data = await response;
                setProduct(productData);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
        const intervalId = setInterval(fetchProduct, 1000);

        const subscription = client
            .listen('*[_type == "toppick"]')
            .subscribe((update) => {
                if (update.mutations) {
                    fetchProduct(); // Re-fetch products on update
                }
            });

        return () => {
            subscription.unsubscribe(); // Clean up the subscription on unmount
        };

        return () => clearInterval(intervalId);
    }, [params]);

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                tags: product.tags,
                image: product.image,
                width: product.width,
                height: product.height,
                rating: product.rating,
                stockQuantity: product.stockQuantity,
                quantity: count,
            })
        }
    };

    const handleDeleteToCart = () => {
        if (product) {
            removeFromCart(product.id);
        }
    };



    if (loading) {
        return <div className='loading'>
            <SingleSeletonLoader />
        </div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Navbar />
            {product && (
                <div id="overley">
                    <div className='detailpage  space-x-[25px] custom-tiny:text-sm custom-mini:text-[12px]'><Link href={'../../'}><span className='text-[#9f9f9f]'>Home</span> </Link><span><FaGreaterThan size={13} /></span> <Link href={'../../shop'}><span className='text-[#9f9f9f]'>Shop</span></Link> <span><FaGreaterThan size={13} /></span> <span>{'|'}</span> <span>{product.name}</span></div>

                    <div key={product.id} className='detailpage-section-one  xl:flex lg:flex md:block custom-xs:block custom-xxs:block custom-tiny:block custom-mini:block'>

                        <div className='detail-product-images 2xl:flex lg:flex md:flex custom-xs:flex custom-xxs:flex custom-tiny:flex custom-mini:flex space-x-4'>
                            <div className='detailpage-section-one-detailimages    space-y-[32px]'>
                                <div className='detailpage-section-one-detailimages-one !w-[72] !h-[80]  bg-[#FFF9E5]'>
                                    <Image width={83} height={55} src={img1} alt="" />
                                </div>
                                <div className='detailpage-section-one-detailimages-two !w-[72] !h-[80]  bg-[#FFF9E5]'>
                                    <Image width={99} height={66} src={img2} alt="" />
                                </div>
                                <div className='detailpage-section-one-detailimages-three !w-[72] !h-[80]  bg-[#FFF9E5]'>
                                    <Image width={77} height={115} src={img3} alt="" />
                                </div>
                                <div className='detailpage-section-one-detailimages-four !w-[72] !h-[80]  bg-[#FFF9E5]'>
                                    <Image width={74} height={44} src={img4} alt="" />
                                </div>
                            </div>
                            <div className='detailpage-section-one-imgbig bg-[#FFF9E5]'>
                                <Image width={750} height={384} src={product.image} alt='' />
                            </div>
                        </div>

                        <div className='detailpage-section-one-pro-content space-y-[18px] custom-mini:space-x-3'>
                            <h1 className='detailpage-section-one-pro-content-h   custom-xs:text-[24px] custom-tiny:text-xl custom-mini:text-[20px]'>{product.name}</h1>
                            <p className='detailpage-section-one-pro-content-price  custom-xs:text-sm custom-tiny:text-sm custom-mini:text-base font-medium text-[#9f9f9f]'>Rs. {product.price}</p>
                            <div className='detailpage-section-one-pro-content-review custom-mini:space-x-2 custom-mini:text-[12px]' >
                                <Image src={stars} alt='' />
                                <p className='text-[#9f9f9f]'>|</p>
                                <p>% Customer Review</p>
                            </div>
                            <p className='detailpage-section-one-pro-content-description  lg:w-[360] md:w-[360] md:text-sm custom-mini:text-[12px] custom-mini:w-[280] custom-tiny:text-[13px]  font-normal'>{product.description}</p>

                            <div className='detailpage-section-one-pro-content-sizes space-y-[16px]'>
                                <p className='text-sm text-[#9f9f9f] custom-mini:text-[12px]'>Size</p>
                                <div className='flex gap-[16px]'>
                                    {sizeOptions.map((size) => (
                                        <button
                                            key={size.value}
                                            className={`w-[30px] h-[30px] rounded-[5px] text-[13px] text-center ${selectedSize?.value === size.value ? 'bg-[#FBEBB5] ring-[#FBEBB5] ring-2' : 'bg-[#f4f4f4]'}`}
                                            onClick={() => handleSizeChange(size)}
                                        >
                                            {size.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className='detailpage-section-one-pro-content-colors space-y-[16px]'>
                                <p className='text-sm text-[#9f9f9f] custom-mini:text-[12px]'>Color</p>
                                <div className='flex gap-[16px]'>
                                    {colorOptions.map((color) => (
                                        <button
                                            key={color.value}
                                            className={`w-[30px] h-[30px] rounded-full text-[13px] text-center ${selectedColor?.value === color.value ? 'ring-2 ring-black' : ''}`}
                                            style={{ backgroundColor: color.value }}
                                            onClick={() => handleColorChange(color)}
                                        ></button>
                                    ))}
                                </div>
                            </div>

                            <div className='detailpage-section-one-pro-content-cart border-b-[1px] border-[#D9D9D9] custom-mini:text-[12px]'>

                                <div className='detailpage-section-one-pro-content-cart-one px-3 custom-tiny:justify-between font-medium border-[#9f9f9f] border-[1px] rounded-[15px]'>
                                    <button onClick={() => { console.log("clicked"); setCount(count + 1); }}>+</button>
                                    <p>{count}</p>
                                    <button onClick={() => {
                                        console.log("clicked");
                                        if (count > 0) {
                                            setCount(count - 1)
                                        } else {
                                            alert("your value is 0 connot more decremanent it more")
                                            setCount(count + 0);
                                        }
                                    }}>-</button>
                                </div>


                                <button onClick={handleAddToCart} className='detailpage-section-one-pro-content-cart-two border-[#9f9f9f] border-[1px] rounded-[15px]'>
                                    <div onClick={handleCart}> Add To Cart</div>
                                </button>
                                <button className='px-[15px]' onClick={() => addToWishlist(product)}>
                                    <div><HiHeart size={24}/></div>
                                </button>

                                {cartOpen && (
                                    <div className="cartt block bg-white">
                                        <div className="cart-head flex gap-2 items-center justify-between  text-black">

                                            <div className="cart-head-h  border-b-[1.50px] rounded border-b-gray-300">Shopping Cart</div>
                                            <div className="cart-cross">
                                                <RxCross2 onClick={handleCart} size={24} color="gray" />
                                            </div>

                                        </div>

                                        <ul className="cart-products space-y-5">
                                            {cart.length === 0 ? (
                                                <li>Your cart is empty.</li>
                                            ) : (
                                                cart.map((item, index) => (
                                                    <li key={`${item.id}-${index}`} className="cart-item   flex items-center ">
                                                        <div className="cart-item-img bg-[#FBEBB5] rounded-md">
                                                            <Image src={item.image} alt={item.name} width={100} height={90} />
                                                        </div>
                                                        <div className="cart-item-paras space-y-2">
                                                            <div className="cart-item-content">
                                                                <p>{item.name}</p>
                                                            </div>
                                                            <div className="flex items-center space-x-4">
                                                                <p>{item.quantity}</p>
                                                                <p>X</p>
                                                                <p className="text-[#B88E2F] font-medium">{item.price} </p>
                                                            </div>
                                                        </div>
                                                        <div onClick={handleDeleteToCart} className="bg-[#9F9F9F] rounded-full w-6 h-6 p-[2.50px]">
                                                            <RxCross2 size={18} color="white" />
                                                        </div>
                                                    </li>

                                                ))
                                            )}
                                        </ul>



                                        <div className="subtotal flex justify-between items-center border-t-[1.50px] border-t-gray-300 pt-4">
                                            <p>Subtotal</p>
                                            <p className="text-[#B88E2F] font-medium">{product.price}</p>
                                        </div>

                                        <div className="cart-buttons flex justify-between items-center mt-4 ">
                                            <Link href="/cart">
                                                <button className="view-cart  rounded-full border-[1px] border-black">View Cart</button>
                                            </Link>
                                            <Link href="/checkout">
                                                <button className="checkoutt  rounded-full border-[1px] border-black">Checkout</button>
                                            </Link>
                                        </div>

                                    </div>
                                )}
                            </div>

                            <div className='custom-mini:text-[13px]'>
                                <table>
                                    <tbody>
                                        <tr className='text-[#9f9f9f] space-y-3'>
                                            <td className='pr-3'>SKU</td>
                                            <td>:</td>
                                            <td className='pl-3'>SS001</td>
                                        </tr>
                                        <tr className='text-[#9f9f9f] space-y-3'>
                                            <td className='pr-3'>Catogory </td>
                                            <td>:</td>
                                            <td className='pl-3'>Sofas</td>
                                        </tr>
                                        <tr className='text-[#9f9f9f] space-y-3'>
                                            <td className='pr-3'>Tags</td>
                                            <td>:</td>
                                            <td className='pl-3'>Sofa, Chair, Home, Shop</td>
                                        </tr>
                                        <tr className='space-y-3'>
                                            <td className='text-[#9f9f9f] pr-3 pt-2'>Share</td>
                                            <td className='text-[#9f9f9f] pt-2'>:</td>
                                            <td className='flex space-x-5  pl-1 '><FaFacebook /><FaLinkedin /><AiFillTwitterCircle /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>



                    <div className='detailpage-section-one-product-deatails space-y-12'>
                        <div className='detailpage-section-one-pro-content-deatails-list space-x-[13px] 2xl:space-x-[43px]  custom-tiny:space-x-[12px] custom-mini:space-x-1 '>
                            <p className='2xl:text-2xl xl:text-xl lg:text-xl md:text-lg custom-xs:text-base custom-xxs:text-base custom-tiny:text-[14px] custom-mini:text-[13px] text-black'>Description</p>
                            <p className='2xl:text-2xl xl:text-xl lg:text-xl md:text-lg custom-xs:text-base custom-xxs:text-base custom-tiny:text-[14px] custom-mini:text-[13px] text-[#9f9f9f]'>Additional Information</p>
                            <p className='2xl:text-2xl xl:text-xl lg:text-xl md:text-lg custom-xs:text-base custom-xxs:text-base custom-tiny:text-[14px] custom-mini:text-[13px] text-[#9f9f9f]'>Reviews[5]</p>
                        </div>
                        <div className='detailpage-section-one-pro-content-deatails-paras custom-mini:text-[12px] text-[#9f9f9f]'>
                            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road</p>
                            <br />
                            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                        </div>
                        <div className='detailpage-section-one-pro-content-deatails-bigimgs 2xl:flex xl:flex xl:space-x-4 lg:flex 2xl:space-x-[29px]'>
                            <div className='detailpage-section-one-pro-content-deatails-bigimgs-one bg-[#FFF9E5]'>
                                <Image src={soffa1} alt='soffa1' />
                            </div>
                            <div className='detailpage-section-one-pro-content-deatails-bigimgs-one bg-[#FFF9E5]'>
                                <Image width={605} height={348} src={soffa2} alt='soffa2' />
                            </div>
                        </div>
                    </div>


                    <div>
                        <Relatedproducts />
                    </div>

                </div>
            )}
        </div>
    )
}

export default Detailpageshop;



