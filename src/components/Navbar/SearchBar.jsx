import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isFocus, setIsFocus] = useState(false);

  const focusSearchBar = () => {
    setIsFocus(!isFocus);
    console.log(!isFocus ? 'is Focused' : 'Not Focused');
  }

  return (
    <>
      <form className='w-full h-[35px] max-w-[350px] rounded-md bg-black-50 p-2 flex items-center gap-3'>
        <input className='bg-black-50 w-full text-black-300 text-[1rem]
        focus:outline-none 
        max-[768px]:text-[.85rem]' type="text" placeholder='Search Anime' onFocus={() => focusSearchBar()} onBlur={() => focusSearchBar()} />
        <button className='flex-none bg-transparent text-black-300 hover:text-orange' title='Search'>
            <FaSearch />
        </button>
      </form>
    </>
  )
}

export default SearchBar