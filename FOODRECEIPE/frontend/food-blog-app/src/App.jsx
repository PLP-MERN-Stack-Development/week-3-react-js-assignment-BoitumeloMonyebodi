import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import axios from 'axios';
import AddFoodRecipe from './pages/AddFoodRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeDetails from './pages/RecipeDetails';

// Load all recipes
const getAllRecipes = async () => {
  try {
    const res = await axios.get('http://localhost:5000/recipe');
    return res.data;
  } catch (error) {
    console.error("Error fetching all recipes:", error);
    return [];
  }
};

// Load user's own recipes
const getMyRecipes = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const allRecipes = await getAllRecipes();
  return user?._id
    ? allRecipes.filter(item => item.createdBy === user._id)
    : [];
};

// Load favorite recipes
const getFavRecipes = () => {
  return JSON.parse(localStorage.getItem("fav")) || [];
};

// Load a single recipe with user email
const getRecipe = async ({ params }) => {
  try {
    const res = await axios.get(`http://localhost:5000/recipe/${params.id}`);
    let recipe = res.data;

    const userRes = await axios.get(`http://localhost:5000/user/${recipe.createdBy}`);
    return { ...recipe, email: userRes.data.email };
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};

// Route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      { path: "/", element: <Home />, loader: getAllRecipes },
      { path: "/myRecipe", element: <Home />, loader: getMyRecipes },
      { path: "/favRecipe", element: <Home />, loader: getFavRecipes },
      { path: "/addRecipe", element: <AddFoodRecipe /> },
      { path: "/editRecipe/:id", element: <EditRecipe /> },
      { path: "/recipe/:id", element: <RecipeDetails />, loader: getRecipe }
    ]
  }
]);

// App entry
export default function App() {
  return <RouterProvider router={router} />;
}
