import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md p-4 flex justify-between items-center max-w-4xl mx-auto w-full transition-colors duration-300">
      <div className="text-2xl font-bold">
        <Link to="/">ReactMovies</Link>
      </div>

      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/movies"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            to="/tasks"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            Tasks
          </Link>
        </li>
        <li>
          <Link
            to="/posts"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            Posts
          </Link>
        </li>
      </ul>

      <button
        onClick={toggleTheme}
        className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-3 py-1 rounded transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}