import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Detail.css'

function Detail() {
  const location = useLocation();
  console.log(location);
  const {genres,poster,summary,title,year} = location.state;
  return (
    <div className='Detail'>
      <img src={poster} alt={title} title={title} />
      <div className='Detail_data'>
       <h3 className='Detail_title' style={{backgroundColor:'#eee'}}>{title}</h3>
       <h4 className='Detail_year'>{year}</h4>
       <ul className='Detail_genres'>
        {genres.map((genre,index) => {
          return (
          <li className='Detail_genre' key={index}>{genre}</li> //map 사용하여 배열을받아 li를 가져온다.
          )
        })}
       </ul> 
       <p className='Detail_summary'>{summary.slice(0,180)} ...</p>  
      </div>
    </div>
  )
}

export default Detail