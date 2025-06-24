import React from 'react';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
