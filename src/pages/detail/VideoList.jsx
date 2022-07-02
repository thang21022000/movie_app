import React, {useState, useEffect, useRef} from 'react';

import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';

const VideoList = props => {

    const {category} = useParams();

    const [ videos , setVideos] = useState([])

    useEffect(() => {
      const getVideos = async () => {
        const res = await tmdbApi.getVideos(category, props.id);
        console.log('vd', res);
        setVideos(res.data.results.slice(0, 5));

      }
      getVideos();

    }, [category, props.id])


  return (
    <div>
        {
            videos.map((item, i) => (
                <Video key={i} item={item}></Video>
            ))
        }
    </div>
  )
}

const Video = props => {
    
    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 10 / 20  + 'px';

        iframeRef.current.setAttribute('height', height);         

    }, [])
    
    return (
        <div className="video">
            <div className="video__tile">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`} frameBorder="0"
                ref={iframeRef}
                width="100%"
                title="video"
            >
            </iframe>
        </div>
    )
}

export default VideoList