import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import ChefRecipes from "../ChefRecipes/ChefRecipes.jsx";
import useTittle from './../../hooks/useTittle.jsx';

const ChefDetails = () => {
  const [chef, setChef] = useState([]);
  const chefRecipe = useLoaderData();
  useTittle("ChefDetails");
  useEffect(() => {
    const chef_id = chefRecipe[0]?.chef_id;
    fetch(`http://localhost:5000/chefs/${chef_id}`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => {
        console.error(error);
      });
  }, [chefRecipe]);

  const {
    chefPicture,
    chefName,
    bioData,
    numberOfRecipes,
    yearOfExperience,
    likes,
  } = chef;

  return (
    <div className="container mx-auto px-5">
      <div
        style={{ backgroundImage: `url(https://i.ibb.co/7RjP5w5/banner.jpg)` }}
        className="min-h-[calc(100vh-100px)] bg-[#948787] bg-opacity-[0.6] bg-blend-multiply bg-cover bg-center flex flex-col-reverse lg:flex-row justify-center gap-5 md:gap-5 items-center px-16"
      >
        <div className="banner-text lg:w-[50%] mb-5 lg:mb-0 leading-5 bg-slate-100 bg-opacity-[0.8] lg:bg-opacity-[0.8] rounded-2xl shadow-2xl p-12">
          <small className="text-orange-700 font-bold text-lg font-serif">
            Hi,My Name Is
          </small>
          <h2 className="card-title mb-3 text-2xl sm:text-3xl lg:text-4xl font-serif">
            {chefName}
          </h2>
          <p className="text-lg font-medium">{bioData}</p>
          <div className="card-actions my-2">
            <div className="badge badge-primary badge-outline font-bold font-serif ">
              Experience: {yearOfExperience} years
            </div>
            <div className="badge badge-secondary badge-outline font-bold font-serif ">
              {numberOfRecipes} Recipes
            </div>
          </div>
          <p className="flex items-center gap-2 text-lg mt-4 mb-0  text-blue-600 font-serif">
            Likes:{likes}
            <FcLike className="text-xl" />
          </p>
        </div>
        <div className="banner-img lg:w-[50%] mt-5 lg:mt-0 flex justify-center items-center">
          <img
            className="w-[200px] h-[200px] sm:h-[400px] sm:w-[400px]  border-2 border-purple-500 rounded-[50%] object-cover"
            src={chefPicture}
            alt=""
          />
        </div>
      </div>
      <div className="py-10 ">
            <div className="text-center">
                    <h2 className=" text-4xl font-serif text-purple-600 font-bold">{chefName}!!</h2>
                    <p className="font-medium text-2xl mt-2 text-orange-600">Popular Recipes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  {
                    chefRecipe.map((recipe) =><ChefRecipes
                    key={recipe.id}
                    recipe={recipe}
                    ></ChefRecipes>)
                  }
            </div>
      </div>
    </div>
  );
};

export default ChefDetails;
