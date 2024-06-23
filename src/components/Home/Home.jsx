import React from 'react'
import TopList from './TopList'
import RecentEpisode from './RecentEpisode'

const Home = () => {

  return (
    <>
      <section className='mt-[59px] pt-2 px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 flex items-center relative'>
        <TopList />
      </section>
      
      <RecentEpisode />
    </>
  )
}

export default Home