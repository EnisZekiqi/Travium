import { getCitySummary } from "@/app/lib/api/wikimedia";
import { getCityImage } from "@/app/lib/api/unsplash";
import { getCityWeather } from "@/app/lib/api/weather";
import Link from "next/link";

export default async function DestinationPage({ params }) {
  const city = params.city;

  // Run all 3 API calls in parallel (faster)
  const [summary, image, weather] = await Promise.all([
    getCitySummary(city),
    getCityImage(city),
    getCityWeather(city),
  ]);

  if (!summary) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">
          Sorry, we couldnt find {city}😞
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
        <div className="mt-4 flex items-center space-x-3">
          <img src={weather.icon} alt={weather.condition} />
          <span className="text-lg flex items-center ">
            {weather.temp}°C - <p className="text-white/80"> {weather.condition}</p>
          </span>
        </div>
      )}

      {/* Button to explore attractions (future) */}
     <Link href={`/destination/${city}/attractions`}>
    <button className="mt-6 cursor-pointer px-4 py-2 bg-[#4F46E5] text-white rounded-lg">
    Explore Attractions
  </button>
</Link>

    </div>
  );
}
