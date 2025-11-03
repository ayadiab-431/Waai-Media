import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import './Header.css';
import Sidebar from '../Sidebar/Sidebar';
export default function Header() {

    const [showSidebar, setShowSidebar] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
    useEffect (() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    })

    return (
        <header className="header">
            {/* Topbar */}
            <div className="topbar-container">
                <Topbar />
            </div>
            {/* Header */}
            <div className="header-container w-100 px-4 d-flex align-items-center justify-content-between gap-3">
                <div className="logo">
                    <img src={`${import.meta.env.BASE_URL}assets/logo-02.png`} alt="logo" />
                </div>
                {/* Navbar */}
                {!isMobile && <Navbar />}
                <div className="icons d-flex align-items-center justify-content-center" style={{gap: '12px'}}>
                    <img className='translate-icon' src={`${import.meta.env.BASE_URL}assets/translate.png`} alt="" />
                    {isMobile && <MenuIcon className='menu-bar' onClick = {() => setShowSidebar(true)}/>}
                </div>
            </div>
            {/* Sidebar for phones */}
            <Sidebar showSidebar = {showSidebar} setShowSidebar = {setShowSidebar}/>
        </header>
    );
}