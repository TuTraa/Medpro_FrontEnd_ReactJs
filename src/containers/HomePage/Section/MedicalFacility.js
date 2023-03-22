import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getAllClinic } from "../../../services/userService";
import Slider from "react-slick";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class MedicalFacility extends Component {
  state = {
    allClinic: [],
  }
  async componentDidMount() {
    let resAllClinic = await (await getAllClinic()).data;
    console.log('resclinic:', resAllClinic)
    if (resAllClinic && resAllClinic.data && resAllClinic.errCode === 0) {
      this.setState({
        allClinic: resAllClinic.data,
      })
    }
    console.log(resAllClinic.data)
  }

  handleViewDetailDoctor = (item) => {
    if (this.props.history) {

      this.props.history.push(`/detail-clinic/${item.id}`)

    }
  }

  render() {

    let { allClinic } = this.state;
    console.log('allClinic state:', allClinic)
    return (
      <div className="section-slide medicalFacility"  >

        <div className=" slide-content container">
          <div className="slide-title">
            <div className="text">Phòng khám phổ biến</div>
            <Link to={`/all-specialties`}><div className="button"><FormattedMessage id="home-page.more-infor" /></div></Link >
          </div>
          <Slider {...this.props.settings}>
            {allClinic && allClinic.length > 0 && allClinic.map((item, index) => {
              let imageBase64 = '';
              if (item.image) {
                imageBase64 = new Buffer(item.image, 'base64').toString('binary')
              }
              return (
                <div className="slide-item"
                  key={index}
                  onClick={() => this.handleViewDetailDoctor(item)}
                >
                  <div className="slick-img bg-image" style={{ backgroundImage: `url(${imageBase64})` }}></div>
                  <span> {item.name}</span>
                </div>

              )

            })}
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));