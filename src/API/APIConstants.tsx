import { API_KEY } from "./APIkey";

const BASE_URL = `https://api.giphy.com/v1/gifs`;
const GET_TRENDING_GIFS = `${BASE_URL}/trending?api_key=${API_KEY}`;
const SEARCH_GIF = `${BASE_URL}/search?api_key=${API_KEY}&q=`;

export { GET_TRENDING_GIFS, SEARCH_GIF };
