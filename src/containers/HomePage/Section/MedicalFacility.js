import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
class MedicalFacility extends Component {
    state = {  } 
    render() { 
        return (
            <div className="section-slide medicalFacility">

            <div className=" slide-content container">
              <div className="slide-title">
                <div className="text">Chuyên khoa phổ biến</div>
                <div className="button">XEM THÊM</div>
              </div>
              <Slider {...this.props.settings}>
                <div className="slide-item"><div className="slick-img-facility1 bg-image"></div><span> Bệnh viện Chợ Rẫy</span></div>
                <div className="slide-item"><div className="slick-img-facility bg-image"></div><span> Bệnh viện Thu Cúc</span></div>
                <div className="slide-item"><div className="slick-img-facility bg-image"></div><span> Bệnh viện Thu Cúc</span></div>
                <div className="slide-item"><div className="slick-img-facility bg-image"></div><span> Bệnh viện Thu Cúc</span></div>
                <div className="slide-item"><div className="slick-img-facility bg-image"></div><span> Bệnh viện Thu Cúc</span></div>
                <div className="slide-item"><div className="slick-img-facility bg-image"></div><span> Bệnh viện Thu Cúc</span></div>
    
              </Slider>
            </div>
          </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.user.isLoggedIn,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);