import React, { useRef, useState, useEffect } from 'react';
import TimeCountDown from '../countdown';
import classes from '../../styles/BackgroundVideo.module.css';

// 25-color palette: black, greys, golds, whites
const palette = [
    '#111', '#222', '#2a2a2a', '#333', '#444', '#555', '#666', '#777', '#888', '#999',
    '#bfa14a', '#c9b05a', '#d3be6a', '#ddcc7a', '#e6c35c', '#e9d88a', '#ece5b8', '#f0eac6',
    '#ccc', '#ddd', '#e6c35c', '#eee', '#f5f5f5', '#fafafa', '#fff'
];

// Helper: hex to [r,g,b]
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
    const num = parseInt(hex, 16);
    return [num >> 16, (num >> 8) & 255, num & 255];
}

// Helper: luminance for contrast
function luminance(r, g, b) {
    const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Helper: contrast ratio
function contrast(rgb1, rgb2) {
    const lum1 = luminance(...rgb1);
    const lum2 = luminance(...rgb2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

// Helper: get sample size based on device width
function getSampleSize() {
    if (window.innerWidth < 600) return 100;
    if (window.innerWidth < 1200) return 250;
    return 500;
}

// Main color selection logic using median brightness
function getBestPaletteColor(imageData, sampleSize) {
    // 1. Calculate median brightness
    const brightnessArr = [];
    let totalR = 0, totalG = 0, totalB = 0;
    for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        brightnessArr.push(brightness);
        totalR += r;
        totalG += g;
        totalB += b;
    }
    brightnessArr.sort((a, b) => a - b);
    const medianBrightness = brightnessArr[Math.floor(brightnessArr.length / 2)];

    // 2. Map median brightness to palette index (inverted for contrast)
    let idx = Math.round((medianBrightness / 255) * (palette.length - 1));
    idx = palette.length - 1 - idx;
    idx = Math.max(0, Math.min(idx, palette.length - 1));
    let color = palette[idx];

    // 3. Check contrast ratio using average color for the sampled area
    const numPixels = sampleSize * sampleSize;
    const avgR = totalR / numPixels;
    const avgG = totalG / numPixels;
    const avgB = totalB / numPixels;
    const bgRgb = [avgR, avgG, avgB];
    const colorRgb = hexToRgb(color);
    let bestContrast = contrast(bgRgb, colorRgb);

    // 4. If contrast is too low, pick the palette color with the highest contrast
    if (bestContrast < 4.5) {
        let maxContrast = 0;
        let bestColor = color;
        for (let i = 0; i < palette.length; i++) {
            const testRgb = hexToRgb(palette[i]);
            const c = contrast(bgRgb, testRgb);
            if (c > maxContrast) {
                maxContrast = c;
                bestColor = palette[i];
            }
        }
        color = bestColor;
    }
    return color;
}


const Hero6 = (props) => {
    const videoSource = "/videos/wedding-trailer.mp4";
    const videoRef = useRef(null); // Reference to the video element
    const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
    const textRef = useRef(null);
    const lastColorRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!videoRef.current) return;
            const sampleSize = getSampleSize();
            const canvas = document.createElement('canvas');
            canvas.width = sampleSize;
            canvas.height = sampleSize;
            const ctx = canvas.getContext('2d');
            try {
                const video = videoRef.current;
                const vw = video.videoWidth;
                const vh = video.videoHeight;
                if (vw === 0 || vh === 0) return;
                ctx.drawImage(
                    video,
                    vw / 2 - sampleSize / 2,
                    vh / 2 - sampleSize / 2,
                    sampleSize,
                    sampleSize,
                    0,
                    0,
                    sampleSize,
                    sampleSize
                );
                const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize).data;
                const color = getBestPaletteColor(imageData, sampleSize);

                if (lastColorRef.current !== color && textRef.current) {
                    lastColorRef.current = color;
                    textRef.current.querySelectorAll('h2, p, .time, .time-text, span, div').forEach(el => {
                        el.style.color = color;
                    });
                }
            } catch (e) {
                // Ignore errors (e.g., cross-origin video)
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

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
                    <section className="wpo-hero-style-3">
                        <div className="wedding-announcement" ref={textRef}>
                            <div className="couple-text">
                                <h2>Alana & Glad</h2>
                                <p>We Are Getting Married July 26, 2025</p>
                                <div className="wpo-wedding-date">
                                    <div className="clock-grids">
                                        <TimeCountDown/>
                                    </div>
                                </div>
                            </div>
                            <button
                                className={`${classes.PlayButton} theme-btn`} // Add a custom class for styling
                                onClick={handlePlayVideo}
                            >
                                {isPlaying ? '⏸' : '▶'}
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Hero6;