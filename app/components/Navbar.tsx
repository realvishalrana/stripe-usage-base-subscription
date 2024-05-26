import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              🔥 Stripe for SaaS
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/" className="btn">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/photos" className="btn mx-3">
                  Photos
                </Link>
              </li>
              <li>
                <Link href="/user" className="btn">
                  User Auth
                </Link>
              </li>
            </ul>
          </div>
        </div>
      );
    
}

export default Navbar