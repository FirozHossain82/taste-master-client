import React, { useEffect, useState } from "react";
import Loading from "../../../Loading/Loading.jsx";
import ChefCard from "../ChefCard/ChefCard.jsx";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taste-master-server-144df618h-firozhossain82.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  if (loading) {
    return<Loading></Loading>
  }

  return (
    <div className="pt-16 sm:pt-28">
      <div className="text-center pb-10 ">
        <h2 className="font-bold text-3xl sm:text-4xl font-serif text-purple-500">
          Our Kitchen Expert!!
        </h2>
        <h4 className=" text-2xl mt-3 text-teal-900 font-bold">Chefs</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 pb-8">
        {chefs.map((chef) => (
          <ChefCard chef={chef} key={chef.id}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
