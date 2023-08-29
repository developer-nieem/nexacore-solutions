import React from 'react';
import './style.css'
import { HiCheckCircle } from "react-icons/hi";

const ChooseSection = () => {
    return (
        <div className='choose my-10'>
            <div className="row items-center md:max-w-5xl mx-auto">
                <div className="md:col-6 my-10">
                    <h2 className='text-white'>Why Choose</h2>
                    <p className='text-white mb-8'>our suite of services is designed to elevate your business to new heights.</p>
                    <div className='flex items-center gap-3 space-y-8'>
                        <div>
                            <HiCheckCircle className='w-8 h-8 text-[#8fa3e0]'></HiCheckCircle>
                        </div>
                        <div>
                            <h4 className='text-2xl font-semibold text-white'>Expertise That Matters</h4>
                            <p className='text-white' >With years of experience across diverse industries, our team brings a wealth of knowledge to the table.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 space-y-8'>
                        <div>
                            <HiCheckCircle className='w-8 h-8 text-[#8fa3e0]'></HiCheckCircle>
                        </div>
                        <div>
                            <h4 className='text-2xl font-semibold text-white'>Expertise That Matters</h4>
                            <p className='text-white' >With years of experience across diverse industries, our team brings a wealth of knowledge to the table.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 space-y-8'>
                        <div>
                            <HiCheckCircle className='w-8 h-8 text-[#8fa3e0]'></HiCheckCircle>
                        </div>
                        <div>
                            <h4 className='text-2xl font-semibold text-white'>Expertise That Matters</h4>
                            <p className='text-white' >With years of experience across diverse industries, our team brings a wealth of knowledge to the table.</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-6 my-10">

                        <div>
                            <div className='bg-blue-600 sm:w-[457px] h-[493px] rounded-lg text-center'>
                                <img className='w-full rounded-t-md d' src="/choose.JPG" alt="" />
                                <h2 className=' text-white'>20</h2>
                                <p className=' text-white'>Years of trust and excellence</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseSection;