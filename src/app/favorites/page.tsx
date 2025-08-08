"use client";
import { useState, useEffect } from "react";
import { IoMdTrash } from "react-icons/io";

type Favorite = {
  pageid: number;
  title: string;
  description: string;
  city: string;
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  const clearFav = (id : number) => {
    const even = favorites.filter((zdc) => zdc.pageid !== id);
    setFavorites(even)
    localStorage.setItem('favorites',JSON.stringify(even))
  }

  return (
    <div className="container mt-4 mx-auto p-4 h-[90vh]">
      <div className="flex items-center gap-4 justify-between w-full mb-6">
        <h1 className="text-2xl font-bold ">Your Favorites</h1>
        <button className="cursor-pointer p-2 bg-[#4F46E5] text-sm sm:text-md  rounded-xl" onClick={() => {
          localStorage.removeItem('favorites')
          setFavorites([])
        }}>Clear All</button>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favorites.map((fav,index) => (
          <div key={index} className="card1 border border-[#2E3045] rounded-lg p-4 shadow-lg">
            <h2 className="font-bold text-lg">{fav.title}</h2>
            <p className="text-sm text-gray-400 mb-3">{fav.description}</p>
            <div className="flex items-center gap-4 justify-between w-full">
              <p className="text-xs text-white/50 ">City : <b className="text-[#818cf8] uppercase">{fav.city}</b></p>
              <button className="cursor-pointer text-white/70 hover:text-white transition-all duration-300" onClick={() => clearFav(fav.pageid)}><IoMdTrash  size={22}/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
