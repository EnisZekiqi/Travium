"use client";

import { useQuery } from "@tanstack/react-query";
import { getAttractions } from "@/app/lib/api/wikimedia";
import { useParams } from "next/navigation";
import QueryProvider from "../QueryProvider";
import { IoMdStar ,IoMdStarOutline    } from "react-icons/io";
import { useState, useEffect } from "react";

const AttractionsPage=()=> {
  const params = useParams();
  const city = params.city as string;

const { data, isLoading, isError } = useQuery({
  queryKey: ["attractions", city],
  queryFn: () => getAttractions(city),
});

type Favorite = {
  pageid: number;
  title: string;
  description: string;
  city: string;
};

const [favorites, setFavorites] = useState<Favorite[]>([]);

useEffect(() => {
  const saved: Favorite[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  setFavorites(saved);
}, []);

if (isLoading) return <p>Loading attractions...</p>;
if (isError) return <p>Failed to load attractions.</p>;
    
    
   const toggleFavorite = (item: any) => {
  // Get current favorites (or empty array)
  const saved = JSON.parse(localStorage.getItem("favorites") || "[]");

  // Check if item is already saved
  const exists = saved.find((fav: any) => fav.pageid === item.pageid);

  let updatedFavorites;

  if (exists) {
    // Remove it
    updatedFavorites = saved.filter((fav: any) => fav.pageid !== item.pageid);
  } else {
    // Add it
    updatedFavorites = [...saved, { 
      pageid: item.pageid, 
      title: item.title, 
      description: item.snippet.replace(/<[^>]+>/g, ""), 
      city 
    }];
  }

  // Save back to localStorage
       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
       setFavorites(updatedFavorites)
};


    
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Attractions in {city}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {data.query.search.map((item: any) => (
    <div key={item.pageid} className="card1 border border-[#2E3045] rounded-lg p-4 shadow-lg">
      <h2 className="font-bold text-lg">{item.title}</h2>
      <p className="text-sm text-gray-400 mb-3">
        {item.snippet.replace(/<[^>]+>/g, "")}
      </p>
      <div className="flex justify-between items-center">
        <a 
          href={`https://en.wikipedia.org/?curid=${item.pageid}`} 
          target="_blank" 
          className="text-blue-400 text-sm"
        >
          Learn More
        </a>
        {/* Favorite button */}
        <button 
  className="text-yellow-400 hover:text-yellow-500"
  onClick={() => toggleFavorite(item)}
>
  {favorites.find((fav: any) => fav.pageid === item.pageid) 
    ? <IoMdStar size={22}/> 
    : <IoMdStarOutline size={22}/>}
</button>

      </div>
    </div>
  ))}
</div>

    </div>
  );
}


export default function Page() {
  return (
    <QueryProvider>
      <AttractionsPage />
    </QueryProvider>
  );
}