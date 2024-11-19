"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AppHeader.module.css";

export default function AppHeader() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path ? styles.activeLink : styles.link;
  };

  return (
    <header className="flex justify-between pt-[37px] px-[55px] items-center">
      <Link href="/">
        <Image src="/logo.svg" alt="Next.js" width={82} height={45} />
      </Link>

      <nav className="flex gap-[37px]">
        <ul className="flex gap-[88px] items-center text-[var(--text-color)] text-normal text-base">
          <li>
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className={getLinkClass("/about-us")}>
              About us
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={getLinkClass("/portfolio")}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/news" className={getLinkClass("/news")}>
              News
            </Link>
          </li>
        </ul>
        <button className="bg-[#fa9021] hover:bg-[#ffa84b] active:bg-[#fa9f3d] rounded-md py-[10px] px-[28px] text-[var(--text-color)] font-normal text-[13px] leading-5 ">
          Contact us
        </button>
      </nav>
    </header>
  );
}
