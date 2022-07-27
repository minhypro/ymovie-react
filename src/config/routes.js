import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Detail from '../pages/Detail/Detail'
import WatchMovie from '../pages/WatchMovie/WatchMovie'

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/search/:keyword" element={<Category />} />
            <Route path="/:category/:categoryId" element={<Category />} />
            <Route path="/:category/id/:movieId" element={<Detail />} />
            <Route path="/:category/id/:movieId/watch" element={<WatchMovie />} />
        </ReactRoutes>
    );
}

export default Routes;