import React from 'react'
import { Link } from 'react-router-dom'
import { OutLineButton } from '../components/button/Button'

import HeroSlide from '../components/hero-slider/HeroSlide'
import MovieList from '../components/movie-list/MovieList'

import {category, movieType, tvType} from '../api/tmdbApi'

function Home() {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb3">
                    <div className="section__header mb-2">
                        <h2>Treding Movie</h2>
                        <Link to="/movie">
                            <OutLineButton className="small">View more</OutLineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movie</h2>
                        <Link to="/movie">
                            <OutLineButton className="small">View more</OutLineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>
              
                <div className="section mb3">
                    <div className="section__header mb-2">
                        <h2>Upcoming Movie</h2>
                        <Link to="/movie">
                            <OutLineButton className="small">View more</OutLineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.upcoming}/>
                </div> 
                
                <div className="section mb3">
                    <div className="section__header mb-2">
                        <h2>Treding TV</h2>
                        <Link to="/tv">
                            <OutLineButton className="small">View more</OutLineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutLineButton className="small">View more</OutLineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>

            </div>
        </>
    )
}

export default Home
