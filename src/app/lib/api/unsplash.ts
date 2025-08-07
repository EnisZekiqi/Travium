export async function getCityImage(city: string) {
  const accessKey = process.env.UNSPLASH_KEY;
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    city
  )}&client_id=${accessKey}&orientation=landscape`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch Unsplash image");

  const data = await res.json();
  return data.results[0]?.urls?.regular || null;
}
