import React from 'react';
import './style.css'
const HeroSection = () => {
    return (
        <div className=' rounded-md hero-part flex flex-col justify-center gap-4 -mt-24'>
            <h1 className=' text-2xl sm:text-6xl  text-white  text-center '>Transforming <br /> Businesses Through  <br /> Innovative Solutions</h1>
            <p className=' text-center text-white w-3/6 mx-auto'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dapibus enim sit amet pellentesque imperdiet nibh tortor fringilla tortor eu sodales leo augue eget justo. </p>
        </div>
    );
};

export default HeroSection;