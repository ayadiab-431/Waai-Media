import './CategoryBtn.css';
export default function CategoryBtn ({categoryName}){
    return (
        <button className="category-btn">{categoryName}</button>
    );
}