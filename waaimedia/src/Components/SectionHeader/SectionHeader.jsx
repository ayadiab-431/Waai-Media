import './SectionHeader.css';

export default function SectionHeader({title, description, start = false}){
    return (
        <div className={`section-header-container w-100 d-flex flex-column align-items-${start ? 'start' : 'center'}`}>
            <h2 className="section-header fs-2 mb-3">{title}</h2>
            <p className={`section-description m-0 text-${start ? 'start' : 'center'}`}>{description}</p>
        </div>
    );
}