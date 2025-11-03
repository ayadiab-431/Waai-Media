import './SectionHeader.css';

export default function SectionHeader({title, description}){
    return (
        <div className="section-header-container w-100">
            <h2 className="section-header fs-2">{title}</h2>
            <p className="section-description">{description}</p>
        </div>
    );
}