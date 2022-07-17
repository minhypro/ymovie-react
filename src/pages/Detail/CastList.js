import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/moviesApi';
import apiConfig from '../../api/apiConfig';
import noImage from '../../assets/no-image.jpg'

const CastList = props => {

    const { category } = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);
    return (
        <div className="casts">
            {
                casts.map((item, i) => {
                    let castImage;
                    if (!item.profile_path) {
                        castImage = noImage
                    } else {
                        castImage = apiConfig.w500Image(item.profile_path)
                    }

                    console.log(item.profile_path);

                    return (
                        <div key={i} className="casts__item">
                            <div className="casts__item__img" style={{ backgroundImage: `url(${castImage})` }}></div>
                            <p className="casts__item__name">{item.name}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    );
}

export default CastList;
