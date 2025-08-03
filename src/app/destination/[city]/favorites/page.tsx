"use client";
import { useState, useEffect } from "react";

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favorites.map((fav: any) => (
          <div key={fav.pageid} className="bg-gray-800 rounded-lg p-4">
            <h2 className="font-bold text-lg">{fav.title}</h2>
            <p className="text-sm text-gray-400 mb-3">{fav.description}</p>
            <p className="text-xs text-gray-500 italic">{fav.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
