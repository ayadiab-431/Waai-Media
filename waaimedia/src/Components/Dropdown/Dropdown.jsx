import { useRef, useEffect, useState } from 'react';
import './Dropdown.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

export default function Dropdown({mobile = false, title, id, activeId, onClick }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const newsLinks = [
        { name: 'Now', path: '/now', id: 'now' },
        { name: 'Tech Update', path: '/tech-Update', id: 'tech-Update' },
        { name: 'Expansion News', path: '/expansion-news', id: 'expansion-news' },
        { name: 'Announcement', path: '/announcement', id: 'announcement' },
        { name: 'Trend', path: '/trend', id: 'trend' },
        { name: 'Business', path: '/business', id: 'business' },
        { name: 'Events', path: '/events', id: 'events' },
    ];

    return (
        <li
            ref={dropdownRef}
            className={`dropdown ${mobile ? 'w-100' : ''} ${activeId === id ? 'active' : ''}`}
            onClick={() => {
                if (mobile) {
                    onClick();
                    setOpen((prev) => !prev); // toggle open on click (for mobile)
                }
            }}
            onMouseEnter={() =>!mobile && setOpen(true)} // for desktop hover
        >
            <div className="d-flex align-items-center">
                <span>{title}</span>
                <KeyboardArrowDownIcon
                    className="dropdown-arrow"
                    style={{
                        fontSize: '1.25rem',
                        transform: activeId === id ? 'rotate(180deg)' : '',
                        transition: '0.5s',
                    }}
                />
            </div>
                <div className={`droplist-container ${mobile ? 'w-100' : 'position-absolute'} ${open ? 'open' : ''}`} 
                        style={{backgroundColor: !mobile ? 'var(--white)' : ''}}>
                    <ul
                        className={`dropdown-list d-flex flex-column`}
                        // onMouseLeave={() => setOpen(false)}
                    >
                        {newsLinks.map((newLink) => (
                            <li key={newLink.id}>
                                <Link to={newLink.path}>{newLink.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
        </li>
    );
}
