// app/forecast/[city]/page.tsx
import { getCityWeatherForecast } from "@/app/lib/api/weather";

type ForecastDay = {
  date: string;
  day: {
    avgtemp_c: number;
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      icon: string;
      text: string;
    };
    maxwind_kph:number
  };
};


export default async function ForecastPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  const forecast: ForecastDay[] | null = await getCityWeatherForecast(city);

  if (!forecast) {
    return <div>No forecast available</div>;
  }

  return (
    <div className="container mx-auto mt-4 p-4 mb-10 h-full sm:h-[80vh]">
      <h1 className="text-2xl font-bold mb-6">3 Day Forecast for <b className="text-[#818cf8] uppercase">{city}</b></h1>
      <div className="grid gap-4 md:grid-cols-3">
        {forecast.map((day) => (
         <div
          key={day.date}
          className="card1 rounded-xl p-5 flex flex-col items-center shadow-lg hover:shadow-xl transition"
        >
          {/* Date */}
          <p className="text-sm text-gray-400 mb-2">{new Date(day.date).toLocaleDateString()}</p>

          {/* Weather Icon */}
          <img
            src={`https:${day.day.condition.icon}`}
            alt={day.day.condition.text}
            className="w-20 h-20 mb-3"
          />

          {/* Main Avg Temp */}
          <p className="text-3xl sm:text-4xl font-bold text-white">{day.day.avgtemp_c}°C</p>

          {/* High / Low */}
          <div className="flex gap-4 mt-2">
            <span className="text-[#fcbc79] text-sm">High: {day.day.maxtemp_c}°C</span>
            <span className="text-[#818cf8] text-sm">Low: {day.day.mintemp_c}°C</span>
          </div>

          {/* Condition */}
            <p className="mt-3 text-gray-300">{day.day.condition.text}</p>
            <p className="text-gray-400 text-sm">Wind: {day.day.maxwind_kph} kph</p>

        </div>
        ))}
      </div>
    </div>
  );
}
