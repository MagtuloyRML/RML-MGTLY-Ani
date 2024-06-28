import React, { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const searchRef =  useRef(null);
  
  const searchInput = (e) => {
    e.preventDefault();
    const search = searchRef.current.value;
    search === '' ? 
    searchRef.current.focus()
    :( navigate(`/Search/${search}/1`, { replace: true }) ,
      window.location.reload() )
  };
  return (
    <>
      <form className='w-full h-[35px] max-w-[350px] rounded-md bg-black-50 p-2 flex items-center gap-3'
        onSubmit={searchInput}>
        <input className='bg-black-50 w-full text-black-300 text-[1rem]
        focus:outline-none 
        max-[768px]:text-[.85rem]' type="text" placeholder='Search Anime' ref={searchRef} name='searchInput' />
        <button className='flex-none bg-transparent text-black-300 hover:text-orange focus:border-none' title='Search'>
            <FaSearch />
        </button>
      </form>
    </>
  )
}

export default SearchBar