import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/moviesApi';
import apiConfig from '../../api/apiConfig';

import '../Detail/detail.scss';
import CastList from '../Detail/CastList';

import MovieList from '../../components/MoviesList/MovieList';
import VideoPlayer from './VideoPlayer'

const WatchMovie = () => {

    const { category, movieId } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, movieId, { params: {} });
            setItem(response);
            window.scrollTo(0, 0);
        }
        getDetail();
    }, [category, movieId]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <VideoPlayer />
                                <h3>Description</h3>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id} />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default WatchMovie
