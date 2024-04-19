import React from 'react';
import { AiOutlineHome, AiOutlineAppstore, AiOutlineShopping } from 'react-icons/ai';
import { FaCaretRight } from 'react-icons/fa';

const SideBar = ({ handlePageSelect, selectedPage }) => {
    return (
        <div className="bg-white-900 h-screen text-gray-800">
            <div className="flex flex-col justify-between h-full">
                <div className="mt-10">
                    <div className={`flex items-center mb-4 p-4 cursor-pointer ${selectedPage === 'home' ? 'bg-yellow-200' : ''}`} onClick={() => handlePageSelect('home')}>
                        <AiOutlineHome className="ml-10 w-4 h-auto mr-4" />
                        Home
                        <FaCaretRight className="ml-auto w-4 h-auto" />
                    </div>
                    <div className={`flex items-center mb-4 p-4 cursor-pointer ${selectedPage === 'categories' ? 'bg-yellow-200' : ''}`} onClick={() => handlePageSelect('categories')}>
                        <AiOutlineAppstore className="ml-10 w-4 h-auto mr-4" />
                        Categories
                        <FaCaretRight className="ml-auto w-4 h-auto" />
                    </div>
                    <div className={`flex items-center mb-4 p-4 cursor-pointer ${selectedPage === 'products' ? 'bg-yellow-200' : ''}`} onClick={() => handlePageSelect('products')}>
                        <AiOutlineShopping className="ml-10 w-4 h-auto mr-4" />
                        Products
                        <FaCaretRight className="ml-auto w-4 h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
