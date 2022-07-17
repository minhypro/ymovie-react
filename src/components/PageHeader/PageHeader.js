import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import tmdbApi, { trendingType } from '../../api/moviesApi'

import './pageHeader.scss'

function PageHeader() {

    const [movieGenre, setmovieGenre] = useState([])
    const { category, categoryId } = useParams()

    useEffect(() => {
        if (!categoryId) {
            return
        } else {

            const getGenre = async () => {
                const params = {}
                const movieResponse = await tmdbApi.getGenre(trendingType.movie, { params })
                const tvResponse = await tmdbApi.getGenre(trendingType.tv, { params })
                const allGenres = tvResponse.genres.concat(movieResponse.genres)

                const movieGenreObj = allGenres.filter(genre => genre.id === categoryId * 1)
                setmovieGenre(`: ${movieGenreObj[0].name}`);
            }
            getGenre()
        }
    }, [categoryId])

    return (
        <div className="page-header" >
            <h2>{category + movieGenre}</h2>
        </div>
    );
}

export default PageHeader;