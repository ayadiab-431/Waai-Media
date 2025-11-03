export default function LogoVideo (){
    return (
        <div className="logo-video" 
            style={{maxWidth: '100%', height: 'auto', display: 'block', overflow: 'hidden'}}>
            <video className="w-100 d-block" 
                autoPlay loop muted playsInline   
                src={`${import.meta.env.BASE_URL}assets/videos/waaiMm.mp4`}></video>
        </div>
    );
}