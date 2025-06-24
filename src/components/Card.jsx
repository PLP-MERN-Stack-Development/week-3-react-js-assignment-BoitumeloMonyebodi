
import React from "react";

export default function Card({ title, image, children, href }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      {image && (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>
      )}
      <div className="p-4">
        {title && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 hover:text-indigo-500 transition-colors duration-300"
          >
            {title}
          </a>
        )}
        <div className="text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
}
