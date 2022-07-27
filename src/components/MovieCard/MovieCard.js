import { Link } from "react-router-dom"
import apiConfig from "../../api/apiConfig"
import './movieCard.scss'
import noImage from '../../assets/no-image.jpg'

const { w500Image } = { ...apiConfig }

function MovieCard({ title, name, poster_path, backdrop_path, id, category }) {
    const movieTitle = title || name

    let imgSource

    if (!poster_path && !backdrop_path) {
        imgSource = noImage
    } else {
        imgSource = w500Image(poster_path || backdrop_path)
    }

    const detailLink = '/' + category + '/id/' + id;
    return (
        <Link to={detailLink} className="card">
            <div className="card-img">
                <img
                    src={imgSource}
                    alt={movieTitle} loading='lazy' />
            </div>
            <h3 className="card-title">{movieTitle}</h3>
        </Link>
    );
}

export default MovieCard