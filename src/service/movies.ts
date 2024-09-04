
const API_KEY = import.meta.env.VITE_OMD_API_KEY

const OMD_URI= `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie`;
export const getMovies = async ({searchText = '', page = 1}) => {
  const response = await fetch(`${OMD_URI}&s=${searchText}&page=${page}`)
  const data = await response.json()
  const { totalResults, Search } = data;
  
  return { search: Search, totalResults }
}