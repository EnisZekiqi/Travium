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

if (isLoading) return (
  <div className="container mx-auto mt-4 p-4 mb-10">
    <h1 className="text-2xl font-bold mb-6">
      Attractions in <b className="text-[#818cf8] uppercase">{city}</b>
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="card1 border border-[#2E3045] flex flex-col justify-between rounded-lg p-4 shadow-lg animate-pulse">
          <div className="flex flex-col items-start gap-2">
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-800 rounded w-full mb-3"></div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="h-4 bg-gray-700 rounded w-20"></div>
            <div className="h-4 w-4 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
if (isError) return <p>Failed to load attractions.</p>;
    
    
   const toggleFavorite = (item: { pageid: number; title: string; snippet: string }) => {
  // Get current favorites (or empty array)
  const saved: Favorite[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  // Check if item is already saved
  const exists = saved.find((fav: Favorite) => fav.pageid === item.pageid);

  let updatedFavorites: Favorite[];

  if (exists) {
    // Remove it
    updatedFavorites = saved.filter((fav: Favorite) => fav.pageid !== item.pageid);
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
    <div className="container mx-auto mt-4 p-4 mb-10">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-1.5">
        Attractions in <p className="text-[#818cf8]">{city}</p>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {data.query.search.map((item: { pageid: number; title: string; snippet: string }) => (
    <div key={item.pageid} className="card1 border border-[#2E3045] flex flex-col justify-between rounded-lg p-4 shadow-lg">
     <div className="flex flex-col  items-start gap-2">
       <h2 className="font-bold text-lg">{item.title}</h2>
      <p className="text-sm text-gray-400 mb-3">
        {item.snippet.replace(/<[^>]+>/g, "")}
      </p>
     </div>
      <div className="flex justify-between items-center mt-2">
        <a 
          href={`https://en.wikipedia.org/?curid=${item.pageid}`} 
          target="_blank" 
          className="text-[#818cf8] text-sm"
        >
          Learn More
        </a>
        {/* Favorite button */}
        <button 
  className="text-yellow-400 hover:text-yellow-500"
  onClick={() => toggleFavorite(item)}
>
  {favorites.find((fav: Favorite) => fav.pageid === item.pageid) 
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