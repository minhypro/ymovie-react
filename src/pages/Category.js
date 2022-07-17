import { useParams } from "react-router-dom"

import MovieGrid from '../components/MovieGrid/MovieGrid'
import PageHeader from '../components/PageHeader/PageHeader'

function Category() {
    const params = useParams()

    return (
        <>
            <PageHeader
            />
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid {...params} />
                </div>
            </div>
        </>
    )
};

export default Category;