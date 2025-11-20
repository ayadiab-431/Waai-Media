import { useEffect, useRef } from "react";

export default function LogoVideo() {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.pause();
            video.currentTime = 0;
            video.muted = true;
        }

        const enableSoundOnce = () => {
            if (!video) return;

            const playWithSound = () => {
                video.currentTime = 0;
                video.play();
                video.muted = false;

                const durationMs = video.duration * 1000; 

                setTimeout(() => {
                    video.muted = true;
                }, durationMs);

            };

            if (video.readyState >= 1) {
     
                playWithSound();
            } else {
               
                video.addEventListener("loadedmetadata", playWithSound, { once: true });
            }

            window.removeEventListener("click", enableSoundOnce);
            window.removeEventListener("scroll", enableSoundOnce);
            window.removeEventListener("mousemove", enableSoundOnce);
        };

        window.addEventListener("click", enableSoundOnce, { once: true });
        window.addEventListener("scroll", enableSoundOnce, { once: true });
        window.addEventListener("mousemove", enableSoundOnce, { once: true });

        return () => {
            window.removeEventListener("click", enableSoundOnce);
            window.removeEventListener("scroll", enableSoundOnce);
            window.removeEventListener("mousemove", enableSoundOnce);
        };

    }, []);

    return (
        <div className="logo-video" style={{maxWidth: '100%', height: 'auto', overflow: 'hidden'}}>
            <video
                ref={videoRef}
                loop
                playsInline
                src={`${import.meta.env.BASE_URL}assets/videos/waaiMm.mp4`}
                style={{ width: "100%", display: "block" }}
            />
        </div>
    );
}
