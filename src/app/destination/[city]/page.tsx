import { getCitySummary } from "@/app/lib/api/wikimedia";
import { getCityImage } from "@/app/lib/api/unsplash";
import { getCityWeather } from "@/app/lib/api/weather";
import { MdOutlineLocationOff } from "react-icons/md";

import Link from "next/link";

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  // Run all 3 API calls in parallel (faster)
  const [summary, image, weather] = await Promise.all([
    getCitySummary(city),
    getCityImage(city),
    getCityWeather(city),
  ]);

  if (!summary) {
    return (
      <div className="container flex flex-col items-center h-screen mx-auto p-4">
        <h1 className="text-2xl font-bold">
          <MdOutlineLocationOff size={30}/>
          Sorry, we couldnt find {city}
        </h1>
      </div>
    );
  }

  return (
    <div
      className="container mx-auto p-4 mb-10 flex flex-col items-start">
      {/* Hero section with Unsplash image */}
      <div
        className="w-full h-64 rounded-xl bg-contain bg-no-repeat bg-center mb-6"
        style={{ backgroundImage: `url(${image || summary.image})` }}
      ></div>

      <h1 className="text-3xl font-bold">{summary.title}</h1>
      <p className="mt-2 text-white/50 text-sm sm:text-md md:text-[16px]">{summary.description}</p>

      {/* Weather */}
      {weather && (
        <div className="mt-4 flex flex-col md:flex-row items-center space-x-5">
          <img src={weather.icon} alt={weather.condition} />
          <span className="text-lg flex items-center mb-4 sm:mb-0 ml-0 sm:ml-4">
            {weather.temp}°C - <p className="text-white/80"> {weather.condition}</p>
          </span>
          
        </div>
      )}

      {/* Button to explore attractions (future) */}
      <div className="flex items-center gap-6 mt-6">
        <Link href={`/destination/${city}/attractions`}>
    <button className=" cursor-pointer px-4 py-2 bg-[#4F46E5] text-white rounded-lg">
    Explore Attractions
  </button>
        </Link>
        
       <Link href={`/destination/${city}/forecast`} className="text-[#818cf8] text-light">View Full Forecast</Link>
     </div>


    </div>
  );
}
