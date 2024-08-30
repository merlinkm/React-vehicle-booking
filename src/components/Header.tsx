import React, { useState } from "react"

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        // <div className="flex justify-between items-center shadow-sm p-6">
        //     <img src="/images/logo.svg" alt="" width={150} height={100}/>

        //     <ul className="hidden md:flex gap-16">
        //         <li>Home</li>
        //         <li>Search</li>
        //         <li>About Us</li>
        //         <li>Contact Us</li>
        //     </ul>

        //     <div>

        //     </div>
        // </div>
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-blue-500">
                            <img src="/images/logo.svg" alt="" width={150} height={100} />
                        </a>
                    </div>

                    {/* Menu items */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="font-medium hover:scale-105 text-gray-700 hover:text-blue-500">
                            Home
                        </a>
                        <a href="#" className="font-medium hover:scale-105 text-gray-700 hover:text-blue-500">
                            About
                        </a>
                        <a href="#" className="font-medium hover:scale-105 text-gray-700 hover:text-blue-500">
                            Services
                        </a>
                        <a href="#" className="font-medium hover:scale-105 text-gray-700 hover:text-blue-500">
                            Contact
                        </a>
                    </div>

                    {/* User Login Button */}
                    <div className="hidden md:flex items-center">
                        <button className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                            Login
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-blue-500 focus:outline-none"
                            aria-label="Toggle menu"
                            onClick={() => setOpen(!open)}
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="block text-gray-700 hover:text-blue-500">
                        Home
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-blue-500">
                        About
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-blue-500">
                        Services
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-blue-500">
                        Contact
                    </a>
                    <button className="block w-full text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                        Login
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Header