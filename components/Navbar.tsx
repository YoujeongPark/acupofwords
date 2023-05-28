'use client';

import React, {useState} from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';



const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const pathname = usePathname();

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler"); 
  };

  return (
    <nav className="nav fc-dark-down">
      <a href="/" className="nav-brand">
          <Image 
          src = "logo.svg" 
          alt = "Promptopia Logo"
          width = {120}
          height = {30}
          className = "object-contain"
        />
      </a>
      <ul className={active}>
        <li className={`nav__item ${pathname === '/' ? "font-bold" : ""}`}>
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className={`nav__item ${pathname === '/day' ? "font-bold" : ""}`}>
          <a href="/day" className="nav__link">
            아침
          </a>
        </li>
        <li className={`nav__item ${pathname === '/night' ? "font-bold" : ""}`}>
          <a href="/night" className="nav__link">
            저녁
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;