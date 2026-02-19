import React, { useEffect, useRef, useState } from 'react'
import '../CSS/Sections/Audio.scss'

const songs = [
    {
        title: "Jhol | Coke Studio Pakistan",
        src: "Audio/coke-studio-pakistan--season-15--maanu-x-annural-khalid.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNFwmJW1guje4fNS3fb91mG6L_ibxsE8YnA&s",
    },
    {
        title: "Humsafar Song | Saiyaara ",
        src: "Audio/Humsafar Song _ Saiyaara _ Ahaan Panday _ Aneet Padda_ Sachet Tandon_ Parampara Tandon_ Irshad Kamil(MP3_160K).mp3",
        cover: "https://w0.peakpx.com/wallpaper/677/327/HD-wallpaper-anime-couple-animecouple.jpg",
    },
    {
        title: "Pardesiya - Param Sundari ",
        src: "Audio/Pardesiya - Param Sundari _ Sidharth M_ Janhvi K _ Sachin-Jigar_ Sonu Nigam_ Krishnakali_ Amitabh B(MP3_160K).mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4l8qgc_Vk4tn9PFPKOkPq3lNZQ5ogy5moQ&sg",
    },
    {
        title: "Gehra Hua | Dhurandhar",
        src: "Audio/Gehra Hua (From _Dhurandhar_) – Arijit Singh _ Shashwat Sachdev _ Irshad Kamil _ Armaan Khan(MP3_160K).mp3",
        cover: "https://cdn.wallpapersafari.com/36/84/7Zyx8w.jpg",
    },
    {
        title: "Saiyaara",
        src: "Audio/Saiyaara Full Song _ Ahaan Panday_ Aneet Padda _ Tanishk Bagchi_ Faheem A_ Arslan N _ Irshad Kamil(MP3_160K).mp3",
        cover: "https://thumbs.dreamstime.com/b/romantic-couple-standing-face-to-face-hug-gazing-each-other-blushing-cheeks-abstract-dreamy-background-anime-wallpaper-389949343.jpg",
    },
    {
        title: "Barbaad Song | Saiyaara",
        src: "Audio/Barbaad Song _ Saiyaara _ Ahaan Panday_ Aneet Padda _ The Rish _ Jubin Nautiyal(MP3_160K).mp3",
        cover: "https://w0.peakpx.com/wallpaper/979/806/HD-wallpaper-anime-couple-top-best-anime-couple.jpg",
    },
]

const Audio = () => {
    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const currentSong = songs[currentIndex];

    const togglePlay = () => {
        if (!audioRef.current) return;
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        setCurrentIndex((p) => (p + 1) % songs.length);
        setIsPlaying(true);
    };

    const prevSong = () => {
        setCurrentIndex((p) => (p === 0 ? songs.length - 1 : p - 1));
        setIsPlaying(true);
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        const value = (audio.currentTime / audio.duration) * 100 || 0;
        setProgress(value);
        document.documentElement.style.setProperty("--progress", `${value}%`);
    };

    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.load();
        if (isPlaying) audioRef.current.play().catch(() => { });
    }, [currentIndex]);

    return (
        <div className="container landingContainer containerMain">
            <div className="player-container">
                <div className="player-card">
                    <img src={currentSong.cover} className="cover" />
                    <h2>{currentSong.title}</h2>

                    <div className={`waveform ${isPlaying ? "active" : ""}`}>
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i}></span>
                        ))}
                    </div>

                    <div className="controls">
                        <button className="side-btn" onClick={prevSong}>⏮</button>

                        {/* ✅ CLEAN PLAY / PAUSE */}
                        <button className="play-btn" onClick={togglePlay}>
                            <span className={isPlaying ? "pause-icon" : "play-icon"} />
                        </button>

                        <button className="side-btn" onClick={nextSong}>⏭</button>
                    </div>

                    <audio ref={audioRef} src={currentSong.src} onEnded={nextSong} />
                </div>

                <div className="playlist">
                    <h3>Playlist: Romantic Moments</h3>
                    {songs.map((song, index) => (
                        <div
                            key={index}
                            className={`playlist-item ${index === currentIndex ? "active" : ""}`}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsPlaying(true);
                            }}
                        >
                            <img src={song.cover} />
                            <div>{song.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Audio;