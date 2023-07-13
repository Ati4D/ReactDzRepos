import React, { useEffect, useRef, useState } from 'react';
import movie from './SampleVideo.mp4';
import './style.css';

const Video = () => {
    const ref = useRef(null);
    const [isPlaying, setPlaying] = useState(false);

    useEffect(()=>{
        ref.current.currentTime = localStorage.getItem('time') ?? 0;
    }, []);
    const play = () => {
        setPlaying(!isPlaying);
        isPlaying ? ref.current.play() : ref.current.pause();
    }

    return (
        <div>
            <button onClick={play}>{isPlaying ? "Pause" : "Play"}</button>
            <video onTimeUpdate={()=>{localStorage.setItem('time', ref.current.currentTime)}} ref={ref} className='video' controls>
                <source src={movie} />
            </video>
        </div>
    );
}

export default Video;
