import Header from "../../Components/Header/Header";
import AboutCardsSection from "../../Sections/AboutUs/AboutCardsSection/AboutCardsSection";
import AboutSection from "../../Sections/AboutUs/AboutSection/AboutSection";
import OurTeamSection from "../../Sections/AboutUs/OurTeamSection/OurTeamSection";
import WhatMakesUsDifferentSection from "../../Sections/AboutUs/WhatMakesUsDifferentSection/WhatMakesUsDifferentSection";

export default function About(){
    return (
        <div className="about-page">
            <Header />
            <AboutSection aboutPage = {true}/>
            <WhatMakesUsDifferentSection />
            <AboutCardsSection />
            <OurTeamSection />
        </div>
    
    );
}