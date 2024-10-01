import { useEffect } from 'react'
import MovieList from '../components/MovieList'
import {Pagination} from "@nextui-org/pagination"
import { useAppSelector } from '../hooks/store'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useMoviesActions } from '../hooks/useMoviesActions'

function Movies() {
  const navigate = useNavigate();  
  const [searchParams] = useSearchParams();
  const { searchMovies } = useMoviesActions()
  const { search, totalPages, loading } = useAppSelector((state) => state.movies)
  const searchPage = Number(searchParams.get('page')) || 1
  const searchQuery = searchParams.get('q') || ''


  const handlePageChange = (page: number) => {
    navigate(`/movies?q=${encodeURIComponent(searchQuery)}&page=${page}`)
  }

  const fetchData = async ({ searchText = '', page = 1}) => {
    await searchMovies({ searchText, page })
  }

  useEffect(() => {
    if(searchQuery.length > 0) {
      fetchData({ searchText: searchQuery, page: Number(searchPage) })      
    }
  }, [searchQuery, searchPage])

  return (
    <div className="movie-list-container">
        <MovieList movies={search} loading={loading} />
        <div className="flex flex-col gap-5">
        {search.length > 0 && <Pagination
          total={totalPages}
          color="primary"
          page={searchPage}
          onChange={handlePageChange}
        />
}
        </div>
    </div>
  )
}

export default Movies
