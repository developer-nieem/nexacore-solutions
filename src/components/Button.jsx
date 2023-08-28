import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({url , title}) => {
    return (
        <>
            <Link  to={url} className='py-3 px-8 bg-[#4169E1] text-white rounded-lg hover:bg-white hover:border hover:border-[#4169E1] hover:text-[#4169E1]'> {title}  </Link>
        </>
    );
};

export default Button;