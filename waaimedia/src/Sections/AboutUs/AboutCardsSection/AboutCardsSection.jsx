import AboutUsCard from "../../../Components/Card/AboutUsCard/AboutUsCard";

export default function AboutCardsSection (){

    const aboutUsCards = [
        {id : 'our-vision', title: 'Our Vision', icon: 'ourvision.svg', description: 'Our vision is to become the go-to marketing partner for ambitious businesses, leading digital transformation locally and regionally.'},
        {id : 'our-mission', title: 'Our Mission', icon: 'ourmission.svg', description: 'Our mission is to help brands grow through innovative marketing strategies built on data driven insights and a deep understanding of their audience.'},
        {id : 'our-values', title: 'Our Values', icon: 'ourvalues.svg', description: 'We believe in bold creativity, transparent communication, unwavering commitment to your success, and continuous innovation to deliver smarter solutions.'}
    ]
    return (
        <section style={{paddingTop: '64px', paddingBottom: '64px'}}
        className="about-us-cards px-4 mx-auto d-flex align-items-center justify-content-center flex-wrap gap-4">
            {aboutUsCards.map((card) => (
                <AboutUsCard 
                    key={card.id}
                    cardTitle={card.title}
                    imgUrl={card.icon}
                    cardDetails={card.description}
                />
            ))}
        </section>
    );
}