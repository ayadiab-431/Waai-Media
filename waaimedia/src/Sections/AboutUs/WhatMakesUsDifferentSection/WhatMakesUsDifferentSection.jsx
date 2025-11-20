import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import './WhatMakesUsDifferentSection.css';
import { useState, useEffect } from 'react';
export default function WhatMakesUsDifferentSection(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768)
            }
    
            window.addEventListener('resize', handleResize);
    
            return () => window.removeEventListener('resize', handleResize);
        }, [])

    return (
        <section style={{maxWidth: '1216px', margin: '0 auto'}} className='px-4'>
            <SectionHeader title={<>What Makes Us <span style={{color: 'var(--primary-rose)'}}>Different</span></>}
                start = {isMobile}
                description={'A diverse team with real experience across multiple marketing fields. Tailored strategies designed for each client never one-size-fits-all. A balance of creativity and data driven marketing. Continuous monitoring and reporting to maximize results.'}
                />
        </section>

    );
}