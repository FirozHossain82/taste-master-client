import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import React, { useState } from "react";
import { FaCheckCircle, FaClock, FaHeart } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { toast } from "react-toastify";

const ChefRecipes = ({ recipe }) => {
  const {
    recipeImage,
    recipeName,
    ingredients,
    cookingTime,
    cookingMethod,
    rating,
  } = recipe;
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(true);
    toast.success(`${recipeName} has been added your favorite`);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="mb-1">
        <img
          className="object-cover rounded-lg w-full h-[300px] "
          src={recipeImage}
          alt={recipeName}
        />
      </figure>
      <div className="card-body flex-grow-0">
        <h2 className="card-title text-2xl font-serif mb-2 text-sky-800">
          {recipeName}
        </h2>
        <p className=" font-bold text-lg font-serif mb-0 pb-0 ">Ingredients:</p>
        <ul className="list-inside">
          {ingredients?.map((ingredients, index) => (
            <li
              className="flex items-center gap-2 mb-1 mt-0 pt-0 text-sm"
              key={index}
            >
              <FaCheckCircle className="text-blue-500" /> {ingredients}
            </li>
          ))}
        </ul>
        <div className="font-bold text-lg flex items-center gap-3">
          <FcAlarmClock />{" "}
          <span className="text-orange-400">{cookingTime} mins</span>
        </div>
        <div className="mb-2">
          <h4 className="text-base font-bold font-serif mb-1">
            Cooking Method:
          </h4>
          <p className="text-gray-900">{cookingMethod}</p>
        </div>
      </div>
       <div className="card-actions justify-between items-center mt-3 mb-5 ">
        <div className="flex items-center gap-2 pl-5">
          <Rating style={{ maxWidth: 90 }} value={rating} readOnly />
          <span className="font-bold">{rating}/5</span>
        </div>
        <button
          onClick={handleFavorite}
          disabled={favorite}
          className={`flex items-center gap-2 cursor-pointer px-5 font-serif font-bold ${
            favorite ? "text-gray-900" : "text-red-600"
          }`}
        >
          <FaHeart /> Add to favorites
        </button>
      </div> 
    </div>
  );
};

export default ChefRecipes;
