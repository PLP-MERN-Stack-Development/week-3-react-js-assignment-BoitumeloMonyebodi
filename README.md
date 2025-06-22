# React Movies

A React app showcasing a list of movies, tasks, and posts with full support for light/dark themes using Tailwind CSS.

## Features

- Movie list with posters and links
- Task manager (placeholder)
- Posts fetched from JSONPlaceholder API
- Responsive design with Tailwind CSS
- Dark mode toggle with persistent user preference
- Routing with React Router

## Tech Stack

- React (with hooks)
- React Router DOM
- Tailwind CSS (dark mode enabled with `class` strategy)
- Vite (build tool)
- JSONPlaceholder API for posts data

## Setup Instructions

1. **Clone the repo**

```bash

cd react-movies
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open http://localhost:5173 in your browser.

Dark Mode Usage
Click the Dark Mode / Light Mode toggle button in the navbar.

Your theme preference is saved and will persist across sessions.

Project Structure
/src/components — UI components (Navbar.jsx, Layout.jsx, MoviesList.jsx, TaskManager.jsx, Posts.jsx, etc.)

/src/context — Theme context (ThemeContext.jsx)

/src/App.jsx — Main app with routes

/tailwind.config.js — Tailwind CSS configuration

Tailwind Configuration Snippet
js
Copy code
// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
Notes
Make sure your index.html does NOT have the dark class on <html>, as the app toggles it dynamically.

Use Tailwind’s dark: variants to style components for dark 
