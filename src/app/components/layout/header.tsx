// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.css'; // Importing CSS

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/">
                    <a>
                        <Image src="/next.svg" alt="Logo" width={56} height={56} />
                    </a>
                </Link>
                <button id="menu-btn" className={styles.menuBtn}>
                    {/* SVG for hamburger menu icon */}
                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className={styles.desktopMenu}>
                    <Link href="/menu"><a>Menu</a></Link>
                    <Link href="/aboutus"><a>About Us</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </div>
                {/* Mobile menu */}
                <div id="mobile-menu" className={styles.mobileMenu}>
                    <Link href="/menu"><a>Menu</a></Link>
                    <Link href="/aboutus"><a>About Us</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
