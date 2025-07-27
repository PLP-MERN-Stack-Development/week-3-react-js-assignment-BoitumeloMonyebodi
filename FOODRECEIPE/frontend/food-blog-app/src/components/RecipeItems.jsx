import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

export default function RecipeItems() {
  const recipes = useLoaderData(); // ensure you are using a route loader
  const [allRecipes, setAllRecipes] = useState([]);
  const [isFavRecipe, setIsFavRecipe] = useState(false);
  const navigate = useNavigate();
  const isMyRecipePage = window.location.pathname === "/myRecipe";
  let favItems = JSON.parse(localStorage.getItem("fav")) ?? [];

  useEffect(() => {
    setAllRecipes(recipes);
  }, [recipes]);

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/recipe/${id}`);
      setAllRecipes(prev => prev.filter(recipe => recipe._id !== id));
      const updatedFavs = favItems.filter(recipe => recipe._id !== id);
      localStorage.setItem("fav", JSON.stringify(updatedFavs));
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const favRecipe = (item) => {
    const isAlreadyFav = favItems.some(recipe => recipe._id === item._id);
    const updatedFavs = isAlreadyFav
      ? favItems.filter(recipe => recipe._id !== item._id)
      : [...favItems, item];

    localStorage.setItem("fav", JSON.stringify(updatedFavs));
    setIsFavRecipe(prev => !prev);
  };

  return (
    <div className="card-container">
      {allRecipes?.map((item, index) => (
        <div
          key={item._id || index}
          className="card"
          onDoubleClick={() => navigate(`/recipe/${item._id}`)}
        >
          <img
            src={`http://localhost:5000/images/${item.coverImage}`}
            alt={item.title}
            width="120px"
            height="100px"
          />
          <div className="card-body">
            <div className="title">{item.title}</div>
            <div className="icons">
              <div className="timer">
                <BsStopwatchFill /> {item.time}
              </div>
              {!isMyRecipePage ? (
                <FaHeart
                  onClick={() => favRecipe(item)}
                  style={{
                    color: favItems.some(res => res._id === item._id)
                      ? 'red'
                      : ''
                  }}
                />
              ) : (
                <div className="action">
                  <Link to={`/editRecipe/${item._id}`} className="editIcon">
                    <FaEdit />
                  </Link>
                  <MdDelete
                    onClick={() => onDelete(item._id)}
                    className="deleteIcon"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

