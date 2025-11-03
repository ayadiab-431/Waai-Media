import './OurPortfolioCard.css';
export default function OurPortfolioCard({portfolioImg,cardTitle, cardDescription}){
    return (
        <div className="portfolio-card d-flex align-items-start justify-content-center flex-column">
            <div className="portfolio-img">
                <img src={`/assets/portfolio/${portfolioImg}`} alt="portfolio-img" />
            </div>
            <div className="card-content">
                <h3 className="card-heading m-0">{cardTitle}</h3>
                <p className="card-description m-0">{cardDescription}</p>
            </div>
        </div>
    );
}