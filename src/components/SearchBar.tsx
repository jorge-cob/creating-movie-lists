import {  useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Input } from '@nextui-org/react';

function SearchBar() {
  const navigate = useNavigate();  
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });
    navigate(`/movies?q=${encodeURIComponent(searchQuery)}&page=1`);
  }

  const resetSearchText = () => {
    setSearchQuery('')
  }

  return (
    <form className="top-search-form" onSubmit={handleSubmit}>
        <Input
          type="text" 
          value={searchQuery} 
          onValueChange={setSearchQuery}
          onKeyDown={(e) => e.key === "Enter" ?? handleSubmit}  
          isClearable
          onClear={resetSearchText}
          className="max-w-xs"
        />
    </form>
  )
}

export default SearchBar

