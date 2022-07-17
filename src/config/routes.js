import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Detail from '../pages/Detail/Detail'

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/search/:keyword" element={<Category />} />
            <Route path="/:category/:categoryId" element={<Category />} />
            <Route path="/:category/id/:movieId" element={<Detail />} />
        </ReactRoutes>
    );
}

export default Routes;