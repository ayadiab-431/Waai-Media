import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import OurTeamSlider from "../../../Components/Slider/OurTeamSlider/OurTeamSlider";
import './OurTeamSection.css';
export default function OurTeamSection () {
    return (
        <section className="our-team-sec mb-5">
            <div className="our-team-container px-4 mx-auto mb-3" style={{maxWidth: '1200px'}}>
                <SectionHeader 
                    title={'Our Team'}
                    description={'Meet the dedicated professionals behind Waai Media'}
                />
                <OurTeamSlider />
            </div>
        </section>
    
    );
}