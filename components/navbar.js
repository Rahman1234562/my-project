import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <>
       <nav className="main-nav">
          <ul>
          <Link href="/">  <li>Home</li> </Link>
          <Link href="/about">  <li>About</li> </Link>
          <Link href="/contact">  <li>Contact</li> </Link>
          <Link href="/blogs">  <li>Blogs</li> </Link>
            </ul>
       </nav>
    </>
  )
}

export default Navbar;