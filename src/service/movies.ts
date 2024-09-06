
const API_KEY = import.meta.env.VITE_OMD_API_KEY

const OMD_URI= `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie`;


export const getMovies = async ({searchText = '', page = 1}) => {
  const response = await fetch(`${OMD_URI}&s=${searchText}&page=${page}`)
  const data = await response.json()
  const { totalResults, Search } = data;
  const totalPages = Math.ceil(totalResults / 10)
  return { search: convertRequestResponseNamesToMovies(Search), totalResults, totalPages, page }
}


const convertRequestResponseNamesToMovies = (data: any) => {
  return data.map((movie: any) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster === 'N/A' ? null : movie.Poster
    }
  })
}