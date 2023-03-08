import React, { Children } from 'react'
import PropTypes from 'prop-types';
import '../styles/Movie.css';
import { Link } from 'react-router-dom';

function Movie({genres,id,poster,summary,title,year}) {
  // console.log(props);
  // const {genres,id,poster,summary,title,year} = props;
  return ( 
    <div className='movie'> 
      <Link to={'/detail'} state={{genres,id,poster,summary,title,year}}> 
      <img src={poster} alt={title} title={title} />
      <div className='movie_data'>
       <h3 className='movie_title' style={{backgroundColor:'#eee'}}>{title}</h3>
       <h4 className='movie_year'>{year}</h4>
       <ul className='movie_genres'>
        {genres.map((genre,index) => {
          return (
          <li className='movie_genre' key={index}>{genre}</li> //map 사용하여 배열을받아 li를 가져온다.
          )
        })}
       </ul> 
       <p className='movie_summary'>{summary.slice(0,180)} ...</p>  
      </div>
      </Link>
    </div> //slice는 배열(start,end)에 복사본을 배열 객체로 반환합니다.
  )
}

//npm install prop-types 데이터가 잘 전달됐는지 확인(체크) 가능한 라이브러리 (설치)
Movie.propTypes = {
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  poster : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired  //arrayOf()은 문자열을 원소로 갖는 배열
}

export default Movie