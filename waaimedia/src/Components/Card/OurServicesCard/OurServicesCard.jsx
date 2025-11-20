import './OurServicesCard.css';
export default function OurServicesCard ({iconName, cardTitle, cardDescription}) {
    return (
        <div className="service-card d-flex align-items-center justify-content-start flex-column">
            <div className="icon">
                <img src={`${import.meta.env.BASE_URL}assets/icons/${iconName}`} alt="card-icon" />
            </div>
            <h3 className='card-heading m-0'>{cardTitle}</h3>
            <p className='card-description m-0'>{cardDescription}</p>
        </div>
    );
}