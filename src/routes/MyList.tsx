import { useSearchParams } from "react-router-dom"
import { useAppSelector } from "../hooks/store"
import MovieList from "../components/MovieList"


function MyList() {
  const [searchParams] = useSearchParams()
  const idQuery = searchParams.get('id')
  const lists = useAppSelector((state) => state.movieLists)
  const list = lists.find((item) => item.id === idQuery)
  const movies = list ? list.movies : []
  return (
    <>
     {
      movies.length < 1 
      ? <h1>Movie list is empty</h1>
      : <MovieList movies={movies} loading={false} />
     }
      
    </>
  )
}

export default MyList
