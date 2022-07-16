import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import tmdbApi, { category } from '../../api/moviesApi'
import apiConfig from "../../api/apiConfig";
import './movieList.scss'
import Button from "../Button/Button"

const { w500Image } = { ...apiConfig }

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
    }, []);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                // spaceBetween={40}
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
                            <Movie {...movie} category={props.category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

function Movie({ title, name, poster_path, backdrop_path, overview }) {
    const movieTitle = title || name

    return (
        <div className="card" >
            <img src={w500Image(poster_path || backdrop_path)} alt={movieTitle} className="" />
            <div className="card-body">
                <h3 className="card-title">{movieTitle}</h3>
                <p className="card-text">{overview}</p>
                <Button
                    className="small"
                >Details</Button>
            </div>
        </div>
    );
}

export default MovieList
