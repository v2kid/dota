import React, { useState } from 'react'

interface SearchBarProps {
  keyword: string
  onSearch: (searchTerm: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ keyword, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(keyword || '')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type='text' placeholder='Search...' value={searchTerm} onChange={handleInputChange} />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar
