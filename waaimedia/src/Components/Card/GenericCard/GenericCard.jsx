import './GenericCard.css';
import TextLink from '../../../UI/TextLink/TextLink';
export default function GenericCard({imgUrl, classification, cardTitle, type = "", eventDetails = {}, newsSubtitle = ""}){
    return (
        <div className="generic-card d-flex flex-column">
            <div className="card-img" style={{height: type === 'calender' ? "320px" : "192px"}}>
                {/* لسه معملتش استايل للصورة */}
                <img src={imgUrl} alt="card-img" />
                {type === "event" && (
                    <div className="share-icon d-flex align-items-center justify-content-center">
                        <img src="/assets/icons/share.svg" alt="share-icon" />
                    </div>)}
            </div>
            <div className="card-content d-flex flex-column gap-2">
                <span className="card-classification">{classification}</span>
                <h4 className="card-title">{cardTitle}</h4>
                {type === "calender" ? 
                    ( <>
                        <div className="more-info d-flex flex-column gap-1">
                            <span className="date">Date: {eventDetails.date}</span>
                            <span className="place">Place: {eventDetails.place}</span>
                            </div>
                        </>
                        ) : (
                            <>
                                <div className="news-card">
                                    <p className="card-subtitle pb-2 m-0">{newsSubtitle}</p>
                                    <TextLink textLink = {"Read More"} className="read-more" isCard = {true}/>
                                </div>
                            </>
                        )}
            </div>
        </div>
    );
}