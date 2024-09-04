import { useState } from 'react'
import { getMovies } from '../service/movies'
import { Movie } from '../types'
import MovieList from '../components/MovieList'
import {Pagination} from "@nextui-org/pagination"

function MyList() {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [pages, setPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  async function requestMovies({page = 1}) {
    const {search, totalResults}  = await getMovies({searchText, page});
    setMovies(search)
    setPages(Math.ceil(totalResults / 10))
  }
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await requestMovies({page: currentPage});
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    requestMovies({page: page})
  }

  return (
    <>
      <main>
        <article>
          <form onSubmit={handleSubmit}>
            <input type="text" value={searchText} onChange={handleSearchChange} />
            <button type="submit">Search</button>
          </form>
          <MovieList movies={movies}  />
          <div className="flex flex-col gap-5">
          <p className="text-small text-default-500">Selected Page: {currentPage}</p>
          <Pagination
            total={pages}
            color="primary"
            page={currentPage}
            onChange={handlePageChange}
          />
          </div>
        </article>
      </main>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default MyList
