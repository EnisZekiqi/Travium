// app/forecast/[city]/page.tsx
import { getCityWeatherForecast } from "@/app/lib/api/weather";

type ForecastDay = {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      icon: string;
      text: string;
    };
  };
};

interface ForecastPageProps {
  params: {
    city: string;
  };
}

export default async function ForecastPage({ params }: ForecastPageProps) {
    const forecast: ForecastDay[] | null =
        await getCityWeatherForecast(params.city);

  if (!forecast) {
    return <div>No forecast available</div>;
  }

  return (
    <div className="container mx-auto mt-4 p-4 mb-10">
      <h1 className="text-2xl font-bold mb-6">3-Day Forecast for <b className="text-[#818cf8] uppercase">{params.city}</b></h1>
      <div className="grid gap-4 md:grid-cols-3">
        {forecast.map((day) => (
          <div
            key={day.date}
            className="card1 rounded-lg p-4 flex flex-col items-center text-center"
          >
            <p className="text-lg font-medium">{day.date}</p>
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="w-16 h-16 my-2"
            />
            <p className="text-xl">{day.day.avgtemp_c}°C</p>
            <p className="text-white/70">{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
