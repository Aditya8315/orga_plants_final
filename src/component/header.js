import React from 'react'
import Logo from "../orgaLogo.png";
import NameLogo from "../NameLogo.png";
import {useState} from 'react';
// import { useLocation } from 'react-router-dom';
const Header = () => {
  const [tab, settab] = useState("");
  const handleClick=(event)=>{
    // event.preventDefault();
    settab(event);
  }
  return (
    <>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl mx-auto px-4 py-2 md:flex md:justify-between md:items-center">
    <a href="/" class="flex items-center">
      <img src={Logo} class="h-16 mr-3" alt="Orga Logo" />
      <img src={NameLogo} class="h-8 mt-5 m-auto" alt="Orga plants"/>
    </a>
    <div class="hidden md:block" id="navbar-default">
      <ul class="font-medium flex flex-col md:flex-row md:space-x-8">
        <li>
          <a href="/" onClick={()=>{handleClick("home")}}>
            <button class="block py-2 pl-3 pr-4 text-gray-600 hover:text-black hover:font-bold {{tab === 'home' ? 'text-black font-bold' : ''}}">
              Home
            </button>
          </a>
        </li>
        <li>
          <a href="/blogs" onClick={()=>{handleClick("blogs")}}>
            <button  class="block py-2 pl-3 pr-4 text-gray-600 hover:text-black hover:font-bold {{tab === 'blogs' ? 'text-black font-bold' : ''}}">
              Blogs
            </button>
          </a>
        </li>
        <li>
          <a href="/about">
            <button onClick={()=>{settab("about")}} class="block py-2 pl-3 pr-4 text-gray-600 hover:text-black hover:font-bold {{tab === 'about' ? 'text-black font-bold' : ''}}">
              About Us
            </button>
          </a>
        </li>
        <li>
          <a href="/join">
            <button onClick={()=>{settab("join")}} class="block py-2 pl-3 pr-4 text-gray-600 hover:text-black hover:font-bold {{tab === 'join' ? 'text-black font-bold' : ''}}">
              Join Us
            </button>
          </a>
        </li>
        <li>
          <a href="/tnc">
            <button onClick={()=>{settab("tnc")}} class="block py-2 pl-3 pr-4 text-gray-600 hover:text-black hover:font-bold {{tab === 'tnc' ? 'text-black font-bold' : ''}}">
              Terms & Conditions
            </button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>

  )
}

export default Header