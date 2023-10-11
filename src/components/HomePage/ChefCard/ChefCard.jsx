import React from "react";
import LazyLoad from "react-lazy-load";
import { FcLike, FcOk } from "react-icons/fc";
const ChefCard = ({chef}) => {
    console.log(chef)
  const {
    id,
    chefName,
    yearOfExperience,
    numberOfRecipes,
    likes,
    chefPicture,
  } = chef;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="h-[60%]">
        <LazyLoad height={`100%`} width={`100%`} offset={300}>
          <img
            className="chef-img w-full h-full"
            src={chefPicture}
            alt={chefName}
          />
        </LazyLoad>
      </figure>
      <div className="card-body px-4  md:px-6">
        <h2 className="card-title mb-2 ">
            {chefName}
          <div className=""><FcOk/></div>
        </h2>
        <div className="card-actions flex  justify-between mb-0">
          <div className="badge badge-primary badge-outline font-bold font-serif p-3">
            Experience: {yearOfExperience} years
          </div>
          <div className="badge badge-secondary badge-outline font-bold font-serif p-3">
            {numberOfRecipes} Recipes
          </div>
        </div>
        <p className="flex items-center gap-2 text-lg  text-blue-500 font-serif">
            Likes:{likes}<FcLike className="text-xl" /> 
        </p>
      </div>
    </div>
  );
};

export default ChefCard;
