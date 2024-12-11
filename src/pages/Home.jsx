import React from 'react'
import Header from '../components/header/Header';
import PopularMovies from '../components/popularmovies/PopularMovies';
import PopularTvSeries from  '../components/populartvseries/PopularTvSeries'
import SearchMovie from '../components/search/SearchMovie';
const Home = () => {
  
  return (
    <div className='home'>
     <Header/>
     <SearchMovie/>
      <PopularMovies/>
      <PopularTvSeries/>
    </div>
  )
}

export default Home