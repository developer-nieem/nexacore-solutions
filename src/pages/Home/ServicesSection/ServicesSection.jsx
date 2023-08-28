import React from 'react';
import Button from '../../../components/Button';

const ServicesSection = () => {
    return (
        <div className='w-full md:max-w-6xl mx-auto my-16'>
           <div className="row ">
            <div className='md:col-6'>
                <h4 className='text-lg'>What We DO</h4>
                <h2 className='text-5xl font-semibold'>Our Services</h2>
            </div>
            <div className='md:col-6 '>
                <p className='mt-8 md:mt-0'>our suite of services is designed to elevate your business to new heights. With a deep understanding of industry trends and a commitment to excellence, we offer a comprehensive range of solutions that cater to your unique needs.</p>
            </div>
           </div>

           {/* services items start here  */}

           <div className="row my-10">
            <div className="md:col-4 space-y-3">
                <img className='rounded-md' src="/services1.jpeg" alt="services" />
                <h2 className='text-2xl font-semibold'>Strategic Consulting</h2>
                <p className='text-lg'>our suite of services is designed to elevate your business to new heights.</p>
            </div>
            <div className="md:col-4 space-y-3">
                <img className='rounded-md' src="/services2.jpeg" alt="services" />
                <h2 className='text-2xl font-semibold'>Digital Transformation</h2>
                <p className='text-lg'>our suite of services is designed to elevate your business to new heights.</p>
            </div>
            <div className="md:col-4 space-y-3">
                <img className='rounded-md' src="/services3.jpg" alt="services" />
                <h2 className='text-2xl font-semibold'>Financial Advisory</h2>
                <p className='text-lg'>our suite of services is designed to elevate your business to new heights.</p>
            </div>
          
          <div className='mt-12 text-center'> <Button title='More'></Button> </div>
           </div>
        </div>
    );
};

export default ServicesSection;