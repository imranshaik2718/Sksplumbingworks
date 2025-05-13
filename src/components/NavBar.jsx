import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import profile from "../assets/images/User-Circle--Streamline-Micro.png";

function NavBar({ count }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const userData = localStorage.getItem("loggedInUser");
    if (userData) {
      setLoggedInUser(JSON.parse(userData));  
    }
  }, []);

  useEffect(() => {
    const handleLogin = () => {
      const userData = localStorage.getItem("loggedInUser");
      if (userData) {
        setLoggedInUser(JSON.parse(userData));
      }
    };
    window.addEventListener("loginStatusChanged", handleLogin);
    return () => window.removeEventListener("loginStatusChanged", handleLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <nav className="  bg-gradient-to-b from-slate-900 to-gray-800  border-white font-mono">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-12 rounded-xl" width="50px" alt="logo" />
        </a>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

       
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-white">
            <li><a href="#" className="hover:text-blue-500 block py-2 md:py-0">Home</a></li>
            <li><a href="#services" className="hover:text-blue-500 block py-2 md:py-0">Services</a></li>
            <li><a href="#Aboutus" className="hover:text-blue-500 block py-2 md:py-0">About</a></li>
            <li><a href="#Contact" className="hover:text-blue-500 block py-2 md:py-0">Contact</a></li>
          </ul>
        </div>

     
        <div className="flex items-center space-x-4 md:order-2 mr-0 h-full">

          {!loggedInUser ? (
            <button className="text-white border px-3 py-1 rounded-xl hover:bg-gray-400 hover:text-black">
              <Link to="/login">Login</Link>
            </button>
          ) : (
            <div className="relative inline-block text-left">
              <button
                onClick={toggleMenu}
                className="bg-gray-800 rounded-full focus:outline-none w-8 h-8"
              >
                <img
                  className="rounded-full bg-white cursor-pointer"
                  src={profile}
                  alt="user"
                />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-700 z-50">
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-900 dark:text-white">{loggedInUser?.name}</p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-300">{loggedInUser?.email}</p>
                  </div>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">Dashboard</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">Settings</a>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600">Logout</button>
                  </div>
                </div>
              )}
            </div>
          )}

         
          <Link to="/Delivery"><div className="relative">
            <div className="absolute left-3 -top-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              4
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="white" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
                14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                2.1-4.684 2.924-7.138a60.114 60.114 0 
                00-16.536-1.84M7.5 14.25L5.106 
                5.272M6 20.25a.75.75 0 
                11-1.5 0 .75.75 0 011.5 0zm12.75 
                0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div></Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
