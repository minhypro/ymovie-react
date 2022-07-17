import { useState, useEffect } from 'react'

import "swiper/css";
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "react-router-dom"

import apiConfig from "../../api/apiConfig"
import tmdbApi, { trendingType, } from '../../api/moviesApi'
import { OutlineButton } from '../Button/Button'

import './heroSlider.scss'


const { originalImage, w500Image } = { ...apiConfig }

function HeroSlider() {
    let [movies, setMovies] = useState([])
    movies.length = 5

    useEffect(() => {
        const getList = async () => {
            const params = {}
            const response = await tmdbApi.getTrending(trendingType.all, trendingType.week, { params })
            setMovies(response.results)
        }
        getList()
    }, [])

    const [movieGenre, setmovieGenre] = useState([])

    useEffect(() => {
        const getGenre = async () => {
            const params = {}
            const movieResponse = await tmdbApi.getGenre(trendingType.movie, { params })
            const tvResponse = await tmdbApi.getGenre(trendingType.tv, { params })
            setmovieGenre(tvResponse.genres.concat(movieResponse.genres))

        }
        getGenre()
    }, [])

    return (
        <Swiper
            style={window.innerWidth > 1024 ? { height: window.innerHeight } : undefined}
            grabCursor={true}
            speed={2000}
            autoplay={{
                delay: 4000,
                disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="my-swiper"
        >
            {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                    {({ isActive }) => {
                        const newMovie = { ...movie, isActive, movieGenre }
                        return (
                            <Slide
                                props={newMovie} />
                        )
                    }}
                </SwiperSlide>
            )
            )}
        </Swiper>
    )
}

function Slide({ props }) {
    const { backdrop_path, title, name, overview, poster_path, isActive, genre_ids, movieGenre, media_type, id } = props
    const link = '/' + media_type + '/id/' + id

    return (
        <div
            className={`slide-item-container ${isActive ? "active" : ""}`}
            style={{ backgroundImage: `url(${originalImage(backdrop_path)})` }}
        >
            <div className="movie-info">
                <h2>{title || name}</h2>
                <p
                    className={""}
                >{overview}</p>

                <div className="movie_tag_list">
                    {genre_ids.map((e) => {
                        if (movieGenre[e] === undefined) {
                            return undefined
                        }
                        const cateLink = '/' + media_type + '/' + movieGenre[e].id
                        return (
                            <Link to={cateLink}>
                                <span
                                    className="movie_tag"
                                >
                                    {movieGenre[e].name}
                                </span>
                            </Link>
                        )
                    })

                    }
                </div>
                <Link to={link}>
                    <OutlineButton>Details</OutlineButton>
                </Link>
            </div>
            <div className="movie-poster">
                <img src={w500Image(poster_path)} alt="" loading="lazy" />
            </div>
        </div>
    )
}

export default HeroSlider