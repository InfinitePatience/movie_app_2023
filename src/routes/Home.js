import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie';
import '../styles/Home.css'

export class Home extends Component {
  state = {
    isLoading:true,
    movies:[],
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading:false});
    // },6000);
    this.getMovies();
  }
 
  getMovies = async () => {
    const {
      data : {
        data : {
          movies
        }
      }
    } = 
    await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count'); // 주소 뒤에 ? 넣어서 다음 내용물을 더 가져올 수 있음.
    console.log(movies);
    this.setState({
      isLoading: false,
      movies,  //movies: movies,  //속성:값 이름이 동일하면 하나의 이름으로 쓸 수 있다.
    })
  }

  render() {
    const {isLoading, movies} = this.state; //구조분해할당
    return (
      <section className='container'>
        {isLoading ? 
          <div className='loader'>
            <span className='loader_text'>'Loading...'</span>
          </div>
          :
          <div className='movies'>
            {movies.map((movie, index) => <Movie 
                                             key={index} //주민번호라고 생각하면 된다.
                                             id={movie.id}
                                             year={movie.year}
                                             title={movie.title}
                                             summary={movie.summary}
                                             poster={movie.medium_cover_image}
                                             genres={movie.genres}
                                          />
                        )
            }
          </div>
          }
      </section>

    )
  }
}

export default Home