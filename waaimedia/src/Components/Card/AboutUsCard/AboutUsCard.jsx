import './AboutUsCard.css';
export default function AboutUsCard ({cardTitle, imgUrl, cardDetails}){
    return (
        <div className="about-us-card-container">
            <div className="about-us-card d-flex flex-column">
                <div className="card-heading d-flex align-items-center justify-content-between w-100">
                    <h3 className="card-title">{cardTitle}</h3>
                    <img src={`${import.meta.env.BASE_URL}assets/icons/${imgUrl}`} alt="about-us-img" />
                </div>
                <p className="card-details">{cardDetails}</p>
            </div>
        </div>
    );
}