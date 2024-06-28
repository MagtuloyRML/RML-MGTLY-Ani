import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../Function/useFetch';
import { GetSearchListContext } from '../../context/Search/SearchContext';
import { GetSearchAnime } from '../Function/GetAnime';
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";
import { NoResultFound } from './NoResultFound';
import { StartUp } from '../Function/LoadingContent';


const Search = () => {
  const params = useParams();
  const {data, error, loading} = useFetch(`/${params.search}?page=${params.searchPage}`);

  return (
    <section className='mt-[59px] min-h-[100vh] pt-2 px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 text-black-300 flex flex-col gap-2 items-center'>
        <h1 className='w-full font-bold text-[1.75rem] max-[768px]:text-[1.5rem] max-[480px]:text-[1.25rem] '>{`Search Result for “${params.search}”`}</h1>
        <h3 className='w-full text-[1rem] max-[768px]:text-[.90rem] max-[480px]:text-[.85rem] '>{`Search/${params.search}`}</h3>
        { data ?
            data.results.length > 0 ?
            <>
              <p>Page: {data.currentPage}</p>
              <div className='flex justify-between w-full h-8 text-[1.75rem] justify-self-center'>
                {
                  parseInt(data.currentPage) <= 1 ?
                  <div>
                  </div>
                  :
                    <Link className='hover:text-orange ease-in-out duration-300 hover:scale-110' title='Previous' to={`/Search/${params.search}/${parseInt(data.currentPage)-1}`}>
                      <FaCaretSquareLeft />
                    </Link>
                }
                {
                  data.hasNextPage ?
                    <Link className='hover:text-orange ease-in-out duration-300 hover:scale-110' title='Next' to={`/Search/${params.search}/${parseInt(data.currentPage)+1}`}>
                      <FaCaretSquareRight />
                    </Link>
                  :
                  <div>

                  </div>
                }
                
              </div>
              <ul className='flex min-h-[70vh] flex-wrap gap-2 w-full h-full justify-evenly'>
                  <GetSearchListContext.Provider value={data.results}>
                    <GetSearchAnime data={data} />
                  </GetSearchListContext.Provider>
              </ul>
              {
                data.results.length > 4 ?
                <div className='mt-2 flex justify-between w-full h-8 text-[1.75rem] justify-self-end '>
                {
                  parseInt(data.currentPage) <= 1 ?
                  <div className='w-[28px]'>
                  </div>
                  :
                    <Link className='hover:text-orange ease-in-out duration-300 hover:scale-110' title='Previous' to={`/Search/${params.search}/${parseInt(data.currentPage)-1}`}>
                      <FaCaretSquareLeft />
                    </Link>
                }
                  <p className='text-[1rem]'>Page: {data.currentPage}</p>
                {
                  data.hasNextPage ?
                    <Link className='hover:text-orange ease-in-out duration-300 hover:scale-110' title='Next' to={`/Search/${params.search}/${parseInt(data.currentPage)+1}`}>
                      <FaCaretSquareRight />
                    </Link>
                  :
                  <div className='w-[28px]'>
                  </div>
                }
                
              </div>
                :
                <></>
              }
              
            </>
            : 
            <> 
              <NoResultFound />
            </>
          :  loading ? 
          <>
            <StartUp />
          </>
          : 
          <>
            <StartUp />
          </>
        }   
        
        
    </section>
  )
}

export default Search