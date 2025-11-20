import { Link, NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './Navbar.css';
import { useState } from 'react';
export default function Navbar({mobile = false}){

    // Set Active Link
    const [linkActive, setLinkActive] = useState('home');

    const links = [
        {name: 'Home', path: '/', id: 'home'},
        {name: 'News', path: '/', id: 'news'}, 
        {name: 'About', path: '/about', id: 'about'},
        {name: 'Services', path: '/', id: 'services'},
        {name: 'Portfolio', path: '/', id: 'portfolio'},
        {name: 'Blogs', path: '/', id: 'blogs'},
        {name: 'Events Calender', path: '/', id: 'events'},
        {name: 'Contact', path: '/', id: 'contact'},
    ]

        // News Links
        const navLinks = [
            { 
                name: 'Entertainment', 
                path: '/entertainment', 
                id: 'entertainment',
                subLinks: [
                { name: 'Celebrities', path: '/entertainment/celebrities', id: 'celebrities' },
                { name: 'In Theaters', path: '/entertainment/in-theaters', id: 'in-theaters' },
                { name: 'TV Shows', path: '/entertainment/tv-shows', id: 'tv-shows' },
                { name: 'Book Reviews', path: '/entertainment/book-reviews', id: 'book-reviews' }
                ]
            },
            { name: 'Food', path: '/food', id: 'food' },
            { name: 'Fashion & Beauty', path: '/fashion-beauty', id: 'fashion-beauty' },
            { name: 'Travel', path: '/travel', id: 'travel' },
            { name: 'Economy', path: '/economy', id: 'economy' },
            { name: 'Sports', path: '/sports', id: 'sports' },
            { name: 'Health', path: '/health', id: 'health' },
            { name: 'Podcast', path: '/podcast', id: 'podcast' },
            { name: 'Events', path: '/events', id: 'events' },
            ];

    return (
        <nav className={`navbar ${mobile ? 'py-3 px-3 d-flex overflow-auto' : ''}`} 
        style={{backgroundColor: mobile ? 'var(--secondry-bg-color)' : '',
                height: 'auto',
                borderRadius: mobile? 'var(--border-radius)' : ''
        }}>
            <ul className={`links d-flex ${mobile ? 'flex-column align-items-start w-100' : 'align-items-center'} justify-content-between gap-3 p-0 m-0`}>
                {links.map((link) => (
                    link.id === 'news' ? 
                    (<Dropdown key = {link.id}
                                mobile = {mobile}
                                title={link.name}
                                id = {link.id}
                               activeId = {linkActive} 
                               navLinks={navLinks}
                               onClick={()=> setLinkActive(link.id)} 
                               />)
                    :
                    (<li key={link.id} className='link' onClick={()=> setLinkActive(link.id)}>
                        <Link to={link.path} className={linkActive === link.id ? 'active' : ''}>{link.name}</Link>
                    </li>)
                ))}
                </ul>
        </nav>
    );
}