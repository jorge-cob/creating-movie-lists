import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function SearchBar({onSubmitSearch}) {
  const [searchText, setSearchText] = useState('')


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await onSubmitSearch();
  }

  return (
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
  )
}

export default SearchBar
