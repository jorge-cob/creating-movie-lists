import { useState } from 'react'
import { getMovies } from '../service/movies'
import { Movie } from '../types'
import MovieList from '../components/MovieList'
import {Pagination} from "@nextui-org/pagination"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Home() {
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
      <nav className="navbar">
        <div className="search-box">
        <div id="topsearch-ac">
          <form className="top-search-form" onSubmit={handleSubmit}>
            <div className="easy-autocomplete">
              <input
                className="top-search-input"
                type="text" value={searchText} onChange={handleSearchChange}
                onKeyDown={(e) => e.key === "Enter" ?? handleSubmit}  
              />
            </div>
            {/* <button type="submit">Search</button> */}
          </form>
          {searchText.length > 0 && <FontAwesomeIcon icon={faXmark} className='clear-search' onClick={() => setSearchText('')} /> }

         </div>
        </div>
      </nav>
      <div className="movie-list-container">
        
        <article>
          
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
      </div>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default Home
