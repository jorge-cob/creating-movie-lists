import {  useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useSearchParams } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();  
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });
    navigate(`/movies?q=${encodeURIComponent(searchQuery)}&page=1`);
  }

  const resetSearchText = () => {
    setSearchQuery('')
  }

  return (
    <div className="search-box">
      <div id="topsearch-ac">
        <form className="top-search-form" onSubmit={handleSubmit}>
          <div className="easy-autocomplete">
            <input
              className="top-search-input"
              type="text" value={searchQuery} onChange={handleSearchChange}
              onKeyDown={(e) => e.key === "Enter" ?? handleSubmit}  
            />
          </div>
        </form>
        {searchQuery.length > 0 && <FontAwesomeIcon icon={faXmark} className='clear-search' onClick={resetSearchText} /> }
      </div>
    </div>
  )
}

export default SearchBar

