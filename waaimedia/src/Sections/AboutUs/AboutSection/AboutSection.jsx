import './AboutSection.css';
import TextLink from '../../../UI/TextLink/TextLink';
export default function AboutSection ({aboutPage = false}) {
    return (
        <section className={`about-us-section ${aboutPage ? 'about-page' : ''}`}>
            <div 
            className="about-us-container px-4 my-0 mx-auto 
                d-flex align-items-center align-items-lg-start justify-content-center gap-5 flex-lg-row flex-column">
                <div className="about-us-img">
                    <img src={`${import.meta.env.BASE_URL}assets/images/about-us.png`} alt="about-us" />
                </div>
                <div className="about-us-content-wrapper pt-2">
                    <div className="about-us-content mb-4">
                        <h3 className="about-us-heading mb-4 fs-2">About Us</h3>
                        <p className="about-us-description m-0">We are a full-service marketing agency driven by strategy, powered by creativity, and obsessed with results. From branding, content creation, and social media management to performance advertising, media production, and event activation, we deliver end-to-end solutions that move brands forward.</p>
                    </div>
                    {!aboutPage && (<TextLink
                        textLink={'Learn More'}
                        toLink={'/about'}
                        sty
                        />)}
                </div>
            </div>
        </section>
    );
}