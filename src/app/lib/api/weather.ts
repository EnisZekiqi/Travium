export async function getCityWeather(city: string) {
  const apiKey = process.env.WEATHER_KEY;
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


export async function getCityWeatherForecast(city: string, days: number = 3) {
  const apiKey = process.env.WEATHER_KEY;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=${days}&aqi=no&alerts=no`;

  const res = await fetch(url);
  if (!res.ok) return null;

  const data = await res.json();

   return data.forecast.forecastday; // return array directly

}
