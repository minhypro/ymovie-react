import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"


import MovieCard from '../MovieCard/MovieCard'
import tmdbApi, { category } from '../../api/moviesApi'
import './movieList.scss'

function MovieList(props) {
    let [movies, setMovies] = useState([])
    movies.length = 10

    useEffect(() => {
        const getList = async () => {
            if (props.type === undefined) {
                return
            }

            let response = null
            const params = {}

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setMovies(response.results);
        }
        getList()

    }, [props.category, props.id, props.type]);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                slidesPerView={2.5}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 4.5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5.5,
                        spaceBetween: 50,
                    },
                }}
                className="movie_swiper"
            >
                {
                    movies.map((movie, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard {...movie} category={props.category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default MovieList
