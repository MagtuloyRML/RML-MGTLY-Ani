import React, { useState, useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import useFetch from '../Function/useFetch';
import useTruncate from '../Function/useTruncate';
import { FaChevronRight, FaChevronLeft, FaSpinner } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { StartUp } from '../Function/LoadingContent';

const TopList = () => {
    const { data, isLoading, error } = useFetch('/top-airing');
    const [dataIndex, setDataIndex] = useState(0);

    const navigation = (nav) => {
        if (nav === 'plus'){
            if (dataIndex === data.results.length - 1){
                setDataIndex(0);
            }else{
                setDataIndex(dataIndex + 1);
            }
        }
        else {
            if (dataIndex === 0){
                setDataIndex(data.results.length - 1);
            }else{
                setDataIndex(dataIndex - 1);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            navigation('plus')
        },10*1000);
        return () => clearInterval(interval);
    },[data, dataIndex]);

    return (
        <>
            {data ?
                <>
                    <article className='text-black-300 flex w-full items-center gap-6 transition-all duration-500 max-[1024px]:flex-col max-[1024px]:relative'>
                        <section className='flex flex-col w-full max-w-[450px] max-[1024px]:max-w-full max-[1024px]:h-[540px] justify-end p-3'>
                            <h1 className='text-[2.75rem] font-bold order-2
                                max-[1024px]:text-[2.25rem]'>
                                {useTruncate(data.results[dataIndex].title, 30)}
                            </h1>
                            <h3 className='text-[1.125rem] font-medium order-1
                                max-[1024px]:text-[.9375rem]'>
                                Top {dataIndex + 1}
                            </h3>
                            <ul className='text-[.875rem] order-3 flex flex-wrap gap-2 max-[1024px]:text-[.75rem]'>
                                {data.results[dataIndex].genres.map((genre, index) => 
                                    <li key={index}>
                                        <p>{genre}</p>
                                    </li>
                                )}
                            </ul>
                            <Link to={`/Watch/${data.results[dataIndex].id}/${data.results[dataIndex].episodeId}`} className='rounded-lg ease-in-out duration-300 text-white-100 text-[1.75rem] font-bold bg-orange flex items-center py-[10px] px-[24px] gap-3 hover:bg-orange-800 mt-[60px] w-fit order-4
                            max-[1024px]:mt-[20px] max-[1024px]:text-[1.125rem]' title='Watch Now'>
                                <FaPlay />
                                WATCH NOW
                            </Link>
                        </section>
                        <section className='h-[540px] w-full relative max-[1024px]:absolute max-[1024px]:z-[-1]'>
                            <img src={data.results[dataIndex].image} alt={data.results[dataIndex].image}
                            className='w-full h-full object-cover absolute'/>
                            <div className='w-full h-full absolute bg-white-100 bg-opacity-60'>
                            </div>
                        </section>
                    </article>
                    <button type="button" className="absolute left-[5%] max-[480px]:left-0 max-[480px]:top-40 text-black-300 hover:text-orange focus:ring-3 focus:outline-none focus:ring-orange font-medium rounded-full text-[1.5rem] p-2.5 text-center inline-flex items-center me-2" onClick={() => navigation('minus')}>
                        <FaChevronLeft />
                        <span className="sr-only">Prev</span>
                    </button>
                    <button type="button" className="absolute right-[5%] max-[480px]:right-0 max-[480px]:top-40 text-black-300 hover:text-orange focus:ring-3 focus:outline-none focus:ring-orange font-medium rounded-full text-[1.5rem] p-2.5 text-center inline-flex items-center me-2" onClick={() => navigation('plus')} >
                        <FaChevronRight />
                        <span className="sr-only">Next</span>
                    </button>
                </>
                : 
                <>
                    <StartUp />
                </>
            }
        </>
    )
}

export default TopList