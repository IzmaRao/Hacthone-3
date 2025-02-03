import { client } from '@/sanity/lib/client';
import { StaticImageData } from 'next/image';
import { v4 as uuidv4 } from 'uuid';
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
    quantity: number
};
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



const CreateCustomerInSanity = async (customerInfo: Customer) => {
    try {
        const customerObject = {
            _type: 'customers',
            customerId: customerInfo.customerId,
            firstName: customerInfo.firstName,
            lastName: customerInfo.lastName,
            companyName: customerInfo.companyName,
            address: customerInfo.address,
            city: customerInfo.city,
            zipCode: customerInfo.zipCode,
            phone: customerInfo.phone,
            email: customerInfo.email,
            additionalInformation: customerInfo.additionalInformation,
        }
        const response = await client.create(customerObject);
        console.log(response);
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
};

const CreateOrderInSanity = async (cartData: Data[], customerInfo: Customer) => {
    try {
        const products = cartData.map((item) => ({
            id: item.id, // Use the product ID from the cart
            quantity: item.quantity, // Use the quantity from the cart
          }));
        const orderObject = {
            _type: 'orders', // Document type
            orderId: uuidv4(),
            customerId: customerInfo.customerId, // Customer ID
            products: products, // Products array
            paymentStatus: 'Pending', // Default payment status
            status: 'Order Created', // Default order status
            message: 'Order placed successfully', // Optional message
        }
        const response = await client.create(orderObject);
        console.log('Order Created in sanity', response);
        return response;
    } catch (error) {
        console.log('error',error)
        throw error
    }
}


async function Checkout(cartData: Data[], customerInformation: Customer) {
    try {
        const customer = await CreateCustomerInSanity(customerInformation)
        await CreateOrderInSanity(cartData,customer);
        console.log(`checkout completed`)
    } catch (error) {
        console.log('error created order and customer in sanity', error);
        throw error
    }
}

export default Checkout