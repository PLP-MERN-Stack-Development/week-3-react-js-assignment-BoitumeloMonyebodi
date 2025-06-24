import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import Button from './button.jsx';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">My Task Manager</div>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/posts" className="hover:underline">Posts</Link>
          <Link to="/tasks" className="hover:underline">Tasks</Link>
          <Button onClick={toggleTheme} variant="secondary">
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

