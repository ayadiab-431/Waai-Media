import Navbar from '../Navbar/Navbar';
import './Sidebar.css';

export default function Sidebar({showSidebar, setShowSidebar}){


    return (
        <>
            {showSidebar && <div className="overlay w-100 position-fixed"
                                    onClick={() => setShowSidebar(false)} style = {{zIndex: '2999'}}></div>}
            <div className={`sidebar px-4 py-5 w-100 d-flex flex-column gap-1 ${showSidebar ? 'show' : ''}`}>
                <div className="close-btn align-self-end mb-1" onClick={() => setShowSidebar(false)}>
                    <img src={`${import.meta.env.BASE_URL}assets/icons/close.svg`} alt="close-btn" />
                </div>
                <Navbar mobile = {true}/>
            </div>
        </>
    );
}