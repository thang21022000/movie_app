import {React, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';

import './header.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movie',
        path: '/movie',
    },
    {
        display: 'Tv Series',
        path: '/tv',
    }
]
function Header() {
    const {pathname} = useLocation();
    const headerRef = useRef(null);

    useEffect(() => {
        const shinkHeader = () => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shink');
            }else {
                headerRef.current.classList.remove('shink');
            }
        }
        window.addEventListener('scroll', shinkHeader);

        return () => {
            window.removeEventListener('scroll', shinkHeader);
        }
    },[])

    const active = headerNav.findIndex(e => e.path === pathname);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <Link to="/">tMovies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Header
