import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig'

import './detail.scss';

import CastList from '../detail/CastList';
import VideoList from '../detail/VideoList';
import MovieList from '../../components/movie-list/MovieList';

function Detail() {
    
    const { category, id } = useParams();

    const [item, setItems] = useState(null); 
    
    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params: {}});
            setItems(response);
            console.log(response);
            window.scrollTo(0,0);
        }
        getDetail();
    }, [category, id]); 
    
    return (
        <>
           { 
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage
                        (item.data.backdrop_path || item.data.poster_path)})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage
                                (item.data.poster_path || item.data.backdrop_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <div className="title">
                                    {item.data.title || item.data.name}
                                </div>
                                <div className="genres">
                                    {
                                        item.data.genres && item.data.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.data.overview}</p>
                                <div className="cast">
                                    <div className="section-header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.data.id}></CastList>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.data.id} />
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                    <p>{category}</p>
                                </div>
                                <MovieList category={category} type="similar" id={item.data.id}/>
                            </div>
                        </div>
                    </>
                )
            } 
        </>
    )
}

export default Detail
