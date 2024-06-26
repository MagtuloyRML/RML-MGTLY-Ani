import React from 'react'
import TopList from './TopList'
import GetSeries from './GetSeries'

const Home = () => {

  return (
    <>
      <h1 className='mt-[59px] pt-3 px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 font-bold text-black-300 text-[2rem]'>
        Top Anime Airing
      </h1>
      <section className='pt-2 px-[10%] min-h-[350px] max-[1024px]:px-[5%] max-[768px]:px-3 flex items-center relative'>
        <TopList />
      </section>
      <GetSeries titleTab='Recent Episodes' url='/recent-episodes' type='get'/>
      <GetSeries titleTab='Popular Anime' url='/popular?page=1' type='get'/>
    </>
  )
}

export default Home