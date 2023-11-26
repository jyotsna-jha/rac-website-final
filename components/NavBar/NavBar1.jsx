"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">
            <Image src="/assets/logo.png" alt="Logo" height={80} width={80} />
          </span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/ourTeam">Our Team</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/alumni">Alumni</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-orange-200"
          >
            {isOpen ? '×' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden w-full absolute left-0 top-20 bg-white text-gray-900 py-4">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/ourTeam">Our Team</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
          <MobileNavLink href="/alumni">Alumni</MobileNavLink>
          <MobileNavLink href="/projects">Projects</MobileNavLink>
        </div>
      )}
    </nav>
  );
}

// Custom NavLink component for desktop
const NavLink = ({ href, children }) => (
  <Link href={href}>
    <span className="hover:text-orange-300 py-2 px-4">{children}</span>
  </Link>
);

// Custom NavLink component for mobile
const MobileNavLink = ({ href, children }) => (
  <Link href={href}>
    <span className="block py-2 px-4">{children}</span>
  </Link>
);

export default Navbar;
