import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 text-center mt-auto">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Boitumelo Monyebodi. All rights reserved.
      </p>
    </footer>
  );
}