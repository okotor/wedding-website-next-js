import React, { useRef, useState } from 'react';
import classes from '../../styles/BackgroundVideo.module.css';

const Hero6 = (props) => {
    const videoSource = "/videos/wedding-trailer.mp4";
    const videoRef = useRef(null); // Reference to the video element
    const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

    const handlePlayVideo = () => {
        if (videoRef.current) {
            if (!isPlaying) {
                videoRef.current.muted = false; // Unmute the video
                videoRef.current.play(); // Play the video
            } else {
                videoRef.current.pause(); // Pause the video
            }
            setIsPlaying(!isPlaying); // Toggle the playing state
        }
    };

    return (
        <section id="video" className="video-area">
            <div className={classes.Container}>
                <video
                    ref={videoRef}
                    className={classes.Video}
                    loop
                    muted
                >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={classes.Content}>
                    <div className="wedding-announcement">
                        <div className="couple-text">
                            {/* <h2>Margrate & Daniel</h2>
                            <p>We Are Getting Married Dec 8, 2023</p> */}
                        </div>
                        <button
                            className={`${classes.PlayButton} theme-btn`} // Add a custom class for styling
                            onClick={handlePlayVideo}
                        >
                            {isPlaying ? '⏸' : '▶'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero6;