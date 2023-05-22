'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react'
// import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Navbar = () => {
  const isUserLoggedIn = true; 


  return (
    <nav className = "flex-start w-full mb-16 pt-3">
      난 네브바입니다.
      <Link href = "/" className = "flex gap-2 flex-center">
        {/* <Image 
          src = "/assets/images/logo.svg" 
          alt = "Promptopia Logo"
          width = {30}
          height = {30}
          className = "object-contain"
        /> */}
      </Link>
      <div className = "sm:flex hidden">

      </div>
    </nav>
  );
}

export default Navbar;