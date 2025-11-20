import {React} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMemberCard from '../../Card/TeamMemberCard/TeamMemberCard';
import './OurTeamSlider.css';

// Next Arrow
function NextArrow(props){
  const {onClick } = props;
  return (
    <div className={`arrow-btn arrow-right`} onClick={onClick}>
      <img style={{right: '22%'}} src={`${import.meta.env.BASE_URL}assets/icons/right.svg`} alt="right-arrow" />
    </div>
  );
}

// Prev Arrow
function PrevArrow(props){
  const {onClick } = props;
  return (
    <div className={`arrow-btn arrow-left`} onClick={onClick}>
      <img style={{left: '22%'}} src={`${import.meta.env.BASE_URL}assets/icons/left.svg`} alt="left-arrow" />
    </div>
  );
}


export default function OurTeamSlider() {

    const teamMembers = [
        {id: 12, img: 'ganna.png', name: 'Ganna Elgamal', role: 'CEO'},
        {id: 23, img: 'hager.jpg', name: 'Hagar Ahmed', role: 'HR'},
        {id: 1, img: 'shahd.jpg', name: 'Shahd Hossam', role: 'Account Manager'},
        {id: 13, img: 'noura.jpg', name: 'Noura Ali', role: 'Graphic designer'},
        {id: 2, img: 'mohamed.jpg', name: 'Mohamed Zantout', role: 'Video graphar'},
        {id: 123, img: 'dena.jpg', name: 'Dena Youssef ', role: 'Moderator'}
    ]


  const settings = {
    infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {slidesToShow: 3},
      },
      {
        breakpoint: 576,
        settings: {slidesToShow: 2},
      },
      {
        breakpoint: 448,
        settings: {slidesToShow: 1},
      }
    ]
  }

  return (
    <div className="our-team-slider mt-5 w-100 px-5">
      <Slider {...settings}>
        {teamMembers.map(member => (
                    <TeamMemberCard
                    key={member.id}
                    imgUrl={member.img}
                    memberName={member.name}
                    memberRole={member.role}
                    />
                ))}
      </Slider>
    </div>
    
  );
}
