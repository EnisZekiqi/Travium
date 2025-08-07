export async function getCitySummary(city:string) {
     const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    city
    )}`;
    const res = await fetch(url)
    
    if (!res) {
        return null
    }

    const data = await res.json();

    return {
        title: data.title,
        description: data.extract,
        image: data.thumbnail?.source || null
    }
}

//attractions api function

export async function getAttractions(city: string) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
    city
  )}&format=json&origin=*`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch attractions");
  return res.json();
}
