"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { GiCrossMark } from "react-icons/gi";
import Image from "next/image";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const currentPath = usePathname();
  const links = [
    { label: "League Table", href: "/table" },
    { label: "Fixtures", href: "/fixtures" },
    { label: "About", href: "/about" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        <nav className="flex items-center justify-between p-8 bg-zinc-300 shadow-md">
          <Link href="/" className="text-slate-800 font-bold text-xl">
            {/* <Image src={logo} alt={"Logo"} className="w-14 rounded-full" /> */}
            <h1>Logo</h1>
          </Link>
          <div className="hamburger text-slate-800" onClick={toggleNavbar}>
            {isOpen ? (
              <GiCrossMark className="transition-colors text-3xl" />
            ) : (
              <RxHamburgerMenu className="transition-colors text-3xl" />
            )}
          </div>
          <ul className={isOpen ? "open animate-zoomIn" : ""}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={classnames({
                    "text-slate-800 border-b-2 border-zinc-900 pb-1 translate-y-10":
                      link.href === currentPath,
                    "text-slate-700": link.href !== currentPath,
                    "transition-colors font-medium": true,
                  })}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
