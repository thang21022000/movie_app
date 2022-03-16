import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import SwiperCore, {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, {OutLineButton} from '../button/Button';

import tmdbApi, {category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './hero-slide.scss';

const HeroSlide = () => {

  SwiperCore.use([Autoplay]);   

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
      const getMovies = async () => {
        const params = {page: 1};  
        try {
            const response = await tmdbApi.getMovieList(movieType.popular, {params});
            setMovieItems(response.data.results.slice(0, 4));
            console.log(response);

        } catch {
            console.log('error');
        }
      }
      getMovies();
    }, []);
    
  return (
    <div className="hero-slide">
        <Swiper
          modules = {[Autoplay]}
          grabCursor = {true}
          spaceBetween = {0}
          slidesPerView = {1}
          autoplay
        >
          {
            movieItems.map((item, i) => (
              <SwiperSlide key = {i}>
                {({isActive}) => (
                  <HeroSlideitem item={item} className = {`${isActive}` ? 'active' : ''}/>
                  // <img src={`${apiConfig.originalImage(item.backdrop_path)}`} />
                )}
              </SwiperSlide>
            ))
          }
        </Swiper>
    </div>
  )
}

const HeroSlideitem = props =>{

  let navigate = useNavigate();

  const item = props.item;

  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

  return (
    <div 
      className={`hero-slide__item ${props.className}`}
      style={{backgroundImage: `url(${background})`}}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate('/movie/' + item.id)}>
              Watch now
            </Button>
            <OutLineButton onClick={() => console.log('trailer')}>
              Watch trailer
            </OutLineButton>
          </div>
        </div>
        <div className="hero-slide__item__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="poster" />
        </div>
      </div>
    </div>
  )
}

export default HeroSlide