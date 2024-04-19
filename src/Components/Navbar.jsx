import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineWarning } from 'react-icons/ai';
import group from '../Accets/Group.png'

const Navbar = () => {

    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        localStorage.removeItem("token")
        localStorage.removeItem("auth")
        window.location.href = "/login";
    };

    return (
        <nav className="bg-purple-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img src={group} alt='group' />
                </div>
                <div>
                    <AiOutlineUser
                        className="w-8 h-8 text-white cursor-pointer"
                        onClick={() => setShowModal(true)}
                    />
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white shadow-md rounded px-8 py-6">
                        <div className="mb-4 flex items-center justify-center">
                            <AiOutlineWarning className="text-red-600 w-4 h-4 mr-2" />
                            <h2 className="text-l font-bold mb-0 text-purple-900">Logout</h2>
                        </div>
                        <p className="mb-4">Are you sure you want to log out ?</p>
                        <div className="flex justify-between items-center justify-center ">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-full focus:outline-none focus:shadow-outline"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                onClick={handleLogout}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
