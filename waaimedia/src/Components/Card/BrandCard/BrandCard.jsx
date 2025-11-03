import './BrandCard.css';
export default function BrandCard({imgUrl, brandName}){
    return(
        <div className="brand-card d-flex align-items-center justify-content-center flex-column gap-3">
            <div className="card-img">
                <img src={imgUrl} alt="brand-image" />
            </div>
            <div className="brand-card-name">
                <h4>{brandName}</h4>
            </div>
        </div>
    );
}