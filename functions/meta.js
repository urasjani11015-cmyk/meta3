export async function onRequest(context) {
  const imageUrl = "et3g4eg.jpg";

  const response = await fetch(imageUrl);

  if (!response.ok) {
    return new Response("Fetch error", {
      status: 502
    });
  }

  const data = await response.arrayBuffer();

  return new Response(data, {
    status: 200,
    headers: {
      "Content-Type": "image/jpg",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
