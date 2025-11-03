import './Topbar.css';
export default function Topbar() {

    // Get day date
    const today = new Date();
    const weekday = today.toLocaleDateString('en-US', {weekday: 'short'});
    const month = today.toLocaleDateString('en-US', {month: 'long'});
    const day = today.getDate();
    const year = today.getFullYear();
    const formattedDate = `${weekday} ${month} ${day}, ${year}`;
    return (
        <div className="topbar w-100 py-2 px-4 d-flex align-items-center justify-content-center">
            <div className="custome-container w-100 d-flex align-items-center justify-content-between gap-4">
                <div className="date">{formattedDate}</div>
                <ul className="social-media-container p-0 m-0 d-flex align-items-center justify-content-center flex-wrap">
                    <li><img src= {`${import.meta.env.BASE_URL}assets/facebook.svg`} alt="instagram-icon" /></li>
                    <li><img src= {`${import.meta.env.BASE_URL}assets/instagram.svg`} alt="facebook-icon"/></li>
                    <li><img src= {`${import.meta.env.BASE_URL}assets/tiktok.svg`} alt="tiktok-icon" /></li>
                    <li><img src= {`${import.meta.env.BASE_URL}assets/youtube.svg`} alt="youtube-icon" /></li>
                </ul>
            </div>
        </div>
    );

}