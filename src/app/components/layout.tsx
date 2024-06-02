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
      <header className="layout-header">
        <Navbar />
      </header>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
