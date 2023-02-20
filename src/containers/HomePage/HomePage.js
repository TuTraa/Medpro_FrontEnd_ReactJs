import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MedicalFacility from "./Section/MedicalFacility";
import OutStandingDoctor from "./Section/OutStandingDoctor";
import About from "./Section/About";
import HomeFooter from "./HomeFooter";
class HomePage extends Component {
  // handleAfterChange=(event,slick,currentSlide)=>{
  //   console.log('tutran')
  // }
  render() {

    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      // afterChange: this.handleAfterChange,
    }
    return (
        <>
        <HomeHeader isShowBanner={true} />
        <Specialty settings={settings} />
        <MedicalFacility settings={settings} />
        <OutStandingDoctor settings={settings} />
        <About />
        <HomeFooter />
        </>
    )
  }
}
const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.user.isLoggedIn,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {};
  };
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
