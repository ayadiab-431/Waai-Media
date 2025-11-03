import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import OurServicesCard from '../../Components/Card/OurServicesCard/OurServicesCard';
import TextLink from "../../UI/TextLink/TextLink";
import './OurServicesSection.css';
export default function OurServicesSection (){

    // Our Services
    const ourServices = [
        {id : 'digital-marketing-strategy', icon : 'digital-marketing.svg', title : 'Digital Marketing Strategy', description : 'We craft tailored strategies that fit your business goals, analyze your market, and help you stand out from the competition.'},
        {id : 'social-media-management', icon : 'social-media.svg', title : 'Social Media Management', description : 'From content creation to community engagement, we handle your social platforms to grow your brand presence and connect with your audience.'},
        {id : 'content-creation', icon : 'content-creation.svg', title : 'Content Creation', description : 'Creative visuals, engaging videos, and compelling copy that speak your brand’s voice and capture attention.'},
        {id : 'performance-marketing', icon : 'performance-marketing.svg', title : 'Performance Marketing (Paid Ads)', description : 'Maximize ROI with data-driven campaigns on Facebook, Instagram, Google & more designed to convert clicks into customers.'},
        {id : 'branding-identity', icon : 'branding.svg', title : 'Branding & Identity', description : 'We build brands that people love from logos and color palettes to full visual identities.'},
        {id : 'web-design-development', icon : 'web-develop.svg', title : 'Web Design & Development', description : 'Modern, responsive websites designed to showcase your brand, generate leads, and drive growth.'},
        {id : 'media-partner', icon : 'media-partner.svg', title : 'Media Partner', description : 'Strong collaborations with top media outlets to maximize your exposure and reach the right audience.'},
        {id : 'public-relations', icon : 'public-relation.svg', title : 'Public Relations (PR)', description : 'Crafting impactful communication strategies that shape your image and strengthen your reputation.'},
        {id : 'events-activations', icon : 'events.svg', title : 'Events & Activations', description : 'Planning and executing memorable events that bring your brand to life and connect you with your audience.'},
        {id : 'openings-launches', icon : 'opening.svg', title : 'Openings & Launches', description : 'Organizing exclusive openings and product launches that leave a lasting first impression.'},
    ]
    return (
        <section className="our-services-section">
            <div className="our-services-section-container d-flex aling-items-center justify-content-center flex-column gap-5">
                <SectionHeader title={'Our Services'}
                    description={'Comprehensive digital marketing solutions tailored to your business needs'}
                />
                <div className="our-services-wrapper w-100 gap-5 d-flex aling-items-center justify-content-center flex-wrap">
                    {ourServices.map((service) => (
                        <OurServicesCard
                        key={service.id}
                        iconName={service.icon}
                        cardTitle={service.title}
                        cardDescription={service.description}
                    />
                    ))}
                </div>
                <TextLink 
                    textLink={'View all services'}
                    toLink={'/our-services'}
                    center = {true}
                    />
            </div>
            
        </section>
    );
}