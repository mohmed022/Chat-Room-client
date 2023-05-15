import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {

const [hide, sethide] = useState(false);
  return (
<footer className="text-gray-600 body-font m-2 bg-w" style={{border:"solid 1px orange" , borderRadius:"10px"}} id="footer">
{hide &&<div className="fixed inset-x-0 bottom-0">
  <div className="relative bg-indigo-600 px-4 py-3 pr-14 text-white">
    <p className="text-left text-sm font-medium sm:text-center">
      اضفط هنا لختيار الشخص المناسب للمساعد

      <a className="underline" href="/alpinejs"> اضغط هنا &rarr; </a>
    </p>

    <button
      onClick={() =>{sethide(!hide)}}
      aria-label="Close"
      className="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</div>}

  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">

      <div className="lg:w-1/4 md:w-1/2 w-full px-4 bg-w p-10 text-center">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">First Link</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Second Link</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Third Link</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
          </li>
        </nav>
      </div>


      <div className="lg:w-1/4 md:w-1/2 w-full px-4 bg-w p-10 text-center">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">First Link</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Second Link</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Third Link</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
          </li>
        </nav>
      </div>


      <div className="lg:w-1/4 md:w-1/2 w-full px-4 bg-w p-10 text-center ">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 border-orange-700">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">First Link</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Second Link</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Third Link</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
          </li>
        </nav>
      </div>


      <div className="lg:w-1/4 md:w-1/2 w-full px-4 bg-w p-10 text-center">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br className="lg:block hidden"/>waistcoat green juice
        </p>
      </div>


    </div>
  </div>


  <div className="bg-gray-100">

    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        <span className="ml-3 text-xl">A&M</span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 A&MStudent —
        <Link href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@ru.com</Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href="/Link" className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link href="#" className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link href="#" className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link href="#" className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>

  </div>


</footer>








  );
};

export default Footer;
