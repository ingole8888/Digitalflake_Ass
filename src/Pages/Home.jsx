import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import SideBar from '../Components/SideBar';
import HomeContent from '../Components/HomeContent'; 
import CategoriesContent from '../Components/CategoriesContent';
import ProductsContent from '../Components/ProductsContent';

const Home = () => {
    const [selectedPage, setSelectedPage] = useState('home');

    const handlePageSelect = (page) => {
        setSelectedPage(page);
    };

    return (
        <div>
            <Navbar />
            <div className="flex w-full">
                <div className="w-1/5 shadow-lg mr-2 bg-gray-100">
                    <SideBar handlePageSelect={handlePageSelect} selectedPage={selectedPage} />
                </div>
                <div className="w-4/5 shadow-lg ml-2">
                    {selectedPage === 'home' && <HomeContent />}
                    {selectedPage === 'categories' && <CategoriesContent />}
                    {selectedPage === 'products' && <ProductsContent />}
                </div>
            </div>
        </div>
    );
};

export default Home;
