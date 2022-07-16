import { useState, useEffect } from 'react'

import "swiper/css";
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import apiConfig from "../../api/apiConfig"
import tmdbApi, { trendingType } from '../../api/moviesApi'
import { OutlineButton } from '../Button/Button'

import './heroSlider.scss'


const { originalImage, w500Image } = { ...apiConfig }

const { all, week } = trendingType

function HeroSlider() {
    let [movies, setMovies] = useState([])
    movies.length = 7

    useEffect(() => {
        const getList = async () => {
            const params = {}
            const response = await tmdbApi.getTrending(all, week, { params })
            setMovies(response.results)
        }
        getList()
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
                        const newMovie = { ...movie, isActive }
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
    const { backdrop_path, title, name, overview, poster_path, isActive } = props

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
                <OutlineButton
                    onClick={() => { alert('123') }}
                >
                    Details
                </OutlineButton>
            </div>
            <div className="movie-poster">
                <img src={w500Image(poster_path)} alt="" />
            </div>
        </div>
    )
}

export default HeroSlider