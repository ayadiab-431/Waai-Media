import Header from "../../Components/Header/Header";
import LogoVideo from "../../Components/LogoVideo/LogoVideo";
import HighlightsSlider from "../../Components/Slider/HighlightsSlider/HighlightsSlider";
import AboutSection from "../../Sections/AboutSection/AboutSection";
import CounterSection from "../../Sections/CounterSection/CounterSection";
import OurServicesSection from "../../Sections/OurServicesSection/OurServicesSection";


export default function Home () {
    return (
        <div className="home">
            <Header />
            <LogoVideo />
            <HighlightsSlider />
            <AboutSection />
            <CounterSection />
            <OurServicesSection />
        </div>
    );
}