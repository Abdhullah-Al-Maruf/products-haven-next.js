import React from 'react';
import Gadget from '../gadeget/Gadget';
import Leftside from './Leftside';

const AllGadget = async( ) => {
const res =await fetch("https://dummyjson.com/products?limit=400")
const data =await res.json()
const products=data.products
    return (
        <div >
            <h1 className='text-center text-3xl font-bold mt-50'>Explore Cutting-Edge Gadgets</h1>
        <div className='flex flex-col md:flex-row w-[80%] mx-auto gap-15 mt-10'>
            <Leftside/>
            <Gadget products={products}/>
        
        </div>
        </div>
    );
};

export default AllGadget;