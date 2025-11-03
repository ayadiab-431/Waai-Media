import { Link, NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './Navbar.css';
import { useState } from 'react';
export default function Navbar({mobile = false}){

    // Set Active Link
    const [linkActive, setLinkActive] = useState('home');

    const links = [
        {name: 'Home', path: '/', id: 'home'},
        {name: 'About', path: '/', id: 'about'},
        {name: 'Services', path: '/', id: 'services'},
        {name: 'Portfolio', path: '/', id: 'portfolio'},
        {name: 'News', path: '/', id: 'news'},
        {name: 'Blogs', path: '/', id: 'blogs'},
        {name: 'Events Calender', path: '/', id: 'events'},
        {name: 'Contact', path: '/', id: 'contact'},
    ]

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
                               setActive = {setLinkActive}
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