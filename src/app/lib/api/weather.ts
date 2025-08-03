export async function getCityWeather(city: string) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`;
   

  const res = await fetch(url);
  if (!res.ok) return null;

  const data = await res.json();
  return {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
}
