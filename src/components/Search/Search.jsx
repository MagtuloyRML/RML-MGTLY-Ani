import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Function/useFetch';
import { GetSearchListContext } from '../../context/Search/SearchContext';
import { GetSearchAnime } from '../Function/GetAnime';

const Search = () => {
  const params = useParams();
  const [searchList, setSearchList] = useState();
  const {data, error, loading} = useFetch(`/${params.search}?page=${params.searchPage}`);

  return (
    <section className='mt-[59px] min-h-[100vh] pt-2 px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 text-black-300 flex flex-col gap-2'>
        <h1 className='font-bold text-[1.75rem] max-[768px]:text-[1.5rem] max-[480px]:text-[1.25rem] '>{`Search Result for “${params.search}”`}</h1>
        <h3 className='text-[1rem] max-[768px]:text-[.90rem] max-[480px]:text-[.85rem] '>{`Search/${params.search}`}</h3>
        <p>Page: {params.searchPage}</p>
        <ul className='flex flex-wrap gap-2 w-full h-full items-center justify-center'>
            {data ? 
              <GetSearchListContext.Provider value={data.results}>
                <GetSearchAnime data={data} />
              </GetSearchListContext.Provider>
            :
              <>
              </>
            }
            
        </ul>
    </section>
  )
}

export default Search