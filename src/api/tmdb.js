export default async function handler(req, res) {
  const API_KEY = process.env.TMDB_API_KEY;

  const { path, query } = req.query;

  const url = `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}&${query}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}