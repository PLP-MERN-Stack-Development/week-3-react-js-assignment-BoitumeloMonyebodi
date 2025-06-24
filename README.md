# React + Tailwind Task Manager

A responsive front-end application built with **React**, **Tailwind CSS**, and **Vite**. It demonstrates component-based architecture, theme switching, task management with local storage, and external API data fetching.

---

## 🔧 Features

* Add, complete, and delete tasks
* Filter by All / Active / Completed
* Persistent data via `useLocalStorage`
* Theme switcher with light/dark modes
* JSONPlaceholder API integration
* Reusable components (`Button`, `Card`, `Navbar`, `Footer`)
* Responsive design with Tailwind CSS

---

## 🛠 Installation

### Prerequisites

* Node.js v18+

### Steps

```bash
git clone <your-repo-url>
cd react-tailwind-taskmanager
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

---

## 🗂 Project Structure

```
src/
├── components/       # Reusable components
├── context/          # ThemeContext
├── hooks/            # useLocalStorage hook
├── pages/            # Home, Posts, TaskManager
├── App.jsx
├── main.jsx
├── index.css         # Tailwind base and dark mode styles
```

### Example index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: white;
  color: black;
}

.dark body {
  background-color: #1a202c;
  color: white;
}
```

---

## 🌐 Deployment

You can deploy on:

* [Vercel](https://vercel.com)
* [Netlify](https://netlify.com)
* GitHub Pages (requires Vite configuration)

### Example Build Settings:

* **Build Command**: `npm run build`
* **Output Directory**: `dist`

---

## 📸 Screenshots

Include screenshots in a `/screenshots/` directory and embed them like so:

```
/screenshots/
├── light-mode.png
├── dark-mode.png
├── task-manager.png
├── posts-api.png
```

### How the Task Manager Looks

The Task Manager displays a list of tasks that can be:

* Added via an input form
* Marked as completed using a checkbox
* Deleted with a button
* Filtered (All, Active, Completed) via tabs or buttons

It uses `useState`, `useEffect`, `useContext` (for theme), and `useLocalStorage` for persistence.

### How the Posts API Page Looks

The Posts page fetches posts from JSONPlaceholder and displays:

* A list or grid of post cards with a title and body
* A search bar to filter posts by keyword
* Loading and error states
* Optional pagination or infinite scroll

### Embedded Screenshots

![Light Mode](https://raw.githubusercontent.com/your-username/react-tailwind-taskmanager/main/screenshots/light-mode.png)
![Dark Mode](https://raw.githubusercontent.com/your-username/react-tailwind-taskmanager/main/screenshots/dark-mode.png)
![Task Manager](https://raw.githubusercontent.com/your-username/react-tailwind-taskmanager/main/screenshots/task-manager.png)
![Posts API](https://raw.githubusercontent.com/your-username/react-tailwind-taskmanager/main/screenshots/posts-api.png)

> 🔁 Replace `your-username` and repo path with your actual GitHub info after upload.

---

## ✅ Assignment Checklist

* [x] Tailwind CSS configured
* [x] Routing with React Router
* [x] Reusable components
* [x] Theme toggle
* [x] Task manager with hooks
* [x] API fetch with loading/error
* [x] Responsive layout
* [x] Clean code structure

---

## 🔗 Live Demo

Add your deployed app URL here:

```md
https://your-app-name.vercel.app
```
