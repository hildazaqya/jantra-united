'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerIcon, XIcon } from "./NavbarIcon";
import { usePathname } from "next/navigation";

type navItem = {
      href: string;
      label: string;
}

export function Navbar() {
      const pathname = usePathname();
      const isActive = (href: string) => pathname === href;
      const [isOpen, setIsOpen] = useState(false);

      const navItems: navItem[] = [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/updates", label: "Updates" },
            { href: "/join-team", label: "Join Team" },
            { href: "/gallery", label: "Gallery" },
            { href: "/contact", label: "Contact" },
      ]

      const toggleMenu = () => {
            setIsOpen(!isOpen);
      }

      return (
            <nav className="w-full bg-dark-500 shadow-2xl">
                  <div className="flex flex-col lg:flex-row justify-center py-5 lg:py-8 px-8 lg:px-20 max-w-[1440px] mx-auto">
                        <div className="flex flex-row justify-between items-center w-full lg:hidden">
                              <Link href="/" passHref>
                                    <Image src="/image/logo-svg.svg" alt="logo" width={90} height={70} className=" w-[80px] sm:w-[90px]" />
                              </Link>
                              <div className="">
                                    <button onClick={toggleMenu} className="text-dark dark:text-light focus:outline-none" aria-label="telephone">
                                          {isOpen ? <XIcon className="transition-transform duration-300 transform rotate-180 opacity-100" /> : <HamburgerIcon className="transition-transform duration-300 transform rotate-0 opacity-100" />}
                                    </button>
                              </div>
                        </div>
                        <div className={`lg:flex flex-col text-sm lg:flex-row justify-start lg:justify-between lg:items-center w-full cursor-pointer font-semibold ${isOpen ? 'flex gap-6' : 'hidden'}`}>
                              <div className="lg:flex flex-col text-sm lg:flex-row gap-20 z-50">
                                    {navItems.slice(0, 3).map((item) => (
                                          <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className={`hover:text-primary-300 ${isActive(item.href) ? 'text-primary-500' : 'text-white'}`} passHref>
                                                {item.label}
                                          </Link>
                                    ))}
                              </div>
                              <div className="absolute inset-x-0 top-2 right-6 justify-center hidden lg:flex">
                                    <Image src="/image/logo-svg.svg" alt="logo" width={120} height={70} className=" w-[80px] sm:w-[150px] z-50" />
                              </div>
                              <div className="lg:flex flex-col text-sm lg:flex-row gap-20 z-50">
                                    {navItems.slice(3, 6).map((item) => (
                                          <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className={`hover:text-primary-300 ${isActive(item.href) ? 'text-primary-500' : 'text-white'}`} passHref>
                                                {item.label}
                                          </Link>
                                    ))}
                              </div>
                        </div>
                  </div>
            </nav>
      )
}