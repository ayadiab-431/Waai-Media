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
                    <li>
                        <a href="https://www.facebook.com/share/1C6phBHbBB/" target="_blank" rel="noopener noreferrer">
                        <img src={`${import.meta.env.BASE_URL}assets/icons/facebook.svg`} alt="facebook-icon" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/waai_media?igsh=MWVoZXZwYjZ6NG1oMA==" target="_blank" rel="noopener noreferrer">
                        <img src={`${import.meta.env.BASE_URL}assets/icons/instagram.svg`} alt="instagram-icon" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.tiktok.com/@waaimedia?_t=ZS-8zape7BmKSW&_r=1" target="_blank" rel="noopener noreferrer">
                        <img src={`${import.meta.env.BASE_URL}assets/icons/tiktok.svg`} alt="tiktok-icon" />
                        </a>
                    </li>

                    <li>
                        <a href="https://youtube.com/@waaimedia?si=L7aO1wb_XAaQY3Oh" target="_blank" rel="noopener noreferrer">
                        <img src={`${import.meta.env.BASE_URL}assets/icons/youtube.svg`} alt="youtube-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com/@waaimedia?si=L7aO1wb_XAaQY3Oh" target="_blank" rel="noopener noreferrer">
                        <img src={`${import.meta.env.BASE_URL}assets/icons/linkedin.svg`} alt="linkedin-icon" />
                        </a>
                    </li>
                    </ul>

            </div>
        </div>
    );

}