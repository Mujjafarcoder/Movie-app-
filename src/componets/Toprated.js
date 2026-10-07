import React from 'react'
import useApi from '../customHook/useApi';
import Showmovies from './Showmovies';

export default function Toprated() {


    
      let ans=useApi( `${process.env.REACT_APP_API}/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`);
    
      console.log(ans);

  return (
   <Showmovies data={ans} heading="Top Rated movies" />
  )
}
