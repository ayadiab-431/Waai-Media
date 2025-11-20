import './TeamMemberCard.css';
export default function TeamMemberCard ({imgUrl, memberName, memberRole}) {
    return (
        <div className="team-member-card d-flex flex-column gap-3 justify-content-center align-items-center">
            <div className="member-img">
                <img src={`${import.meta.env.BASE_URL}assets/member/${imgUrl}`} alt="member-image" />
            </div>
            <div className="member-details d-flex flex-column gap-1 justify-content-center align-items-center">
                <h5 className="member-name m-0">{memberName}</h5>
                <span className="member-role">{memberRole}</span>
            </div>
        </div>
    );
}