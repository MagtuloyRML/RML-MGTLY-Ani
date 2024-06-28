import React from 'react'
import logo from '../../assets/logobig.svg'

const AboutUs = () => {
  return (
    <section className='min-h-[100vh] mt-[60px] pt-3 px-[10%] text-black-300 max-[1024px]:px-[5%] max-[768px]:px-3 flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col items-center'>
        <img src={logo} alt={logo} className='max-[768px]:w-[120px]' />
        <p className='font-bold text-orange text-[1.5rem] max-[768px]:text-[1rem]'>RML MGTLY’s ANI</p>
      </div>
      <p className='font-medium text-[1.25rem] text-center max-[768px]:text-[.875rem]'>
        <span className='font-bold text-orange'>RML MGTLY's ANI</span> was an Anime Streaming Site where able to watch any <span className='font-bold text-orange'>Top Airing</span>, <span className='font-boldtext-orange'>Popular</span>, or <span className='font-bold text-orange'>whatever they like anime</span> to watch. Creating as my <span className='font-bold text-orange'>Personal Hobby</span> of <span className='font-bold text-orange'>Dedicated anime watcher</span> and loving any <span className='font-bold text-orange'>Art Style</span> showcasing in each series and showcasing skill in terms of programming specially as an <span className='font-bold text-orange'>Aspiring Front-End Developer.</span>
        <br/>
        <br/>
        <span className='font-bold text-orange'>RML MGTLY's ANI</span> was an Anime Streaming Site created only to showcase the skills in front-end development in using <span className='font-bold text-orange'>React.JS Framework</span> and <span className='font-bold text-orange'>Tailwinds.CSS</span>, and working in <span className='font-bold text-orange'>Public API (Consumet API Anime)</span>, and <span className='font-bold text-orange'>other tools for studying and develop this website.</span> And this Website was created for <span className='font-bold text-orange'>Personal Project Only and Educational Proposes only and not intended for Piracy.</span>
      </p>

      <p className='font-bold text-orange text-center text-[1.25rem] max-[768px]:text-[.875rem]'>
        Thank you for the time of Visiting my Site and Have a Nice Day!
      </p>
      
    </section>
  )
}

export default AboutUs