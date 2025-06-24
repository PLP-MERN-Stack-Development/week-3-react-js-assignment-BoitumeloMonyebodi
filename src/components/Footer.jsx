
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-6 mt-10 shadow-inner transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <p>
            &copy; {year} ReactMovies. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername/react-movies"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            Twitter
          </a>
          <a
            href="/contact"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
