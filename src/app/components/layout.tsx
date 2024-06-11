"use client";

import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './layout.css';

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layoutHeader">
        <Navbar />
      </header>
      <main className="layoutMain">
        {children}
      </main>
      <footer className="layoutFooter">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
