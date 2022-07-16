import { Link, useLocation } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import './header.scss'

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

function HeaderContent() {
    const { pathname } = useLocation()
    const headerRef = useRef()

    const active = headerNav.findIndex(e => e.path === pathname)

    useEffect(() => {
        const blurBackground = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('bg-blured');
            } else {
                headerRef.current.classList.remove('bg-blured');
            }
        }
        window.addEventListener('scroll', blurBackground);
        return () => {
            window.removeEventListener('scroll', blurBackground);
        };
    }, []);

    return (
        <div ref={headerRef} id="header">
            <div className="container">
                <Link className="header_logo" to="/">
                    <img src="movie-logo.png" alt="Movie App" />
                    <span>Ymovie</span>
                </Link>

                <ul className="header_nav">
                    {headerNav.map((e, i) => (
                        <li key={i} className={`${i === active ? 'active' : ''}`}>
                            <Link to={e.path}>
                                {e.display}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HeaderContent;