import React from 'react';
import logo from '../Accets/logo.png';

const HomeContent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <img src={logo} alt="Logo" className="mb-4" />
            <p className="text-lg font-bold">Welcome to Digitalflake Admin</p>
        </div>
    );
};

export default HomeContent;
