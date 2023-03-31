import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getAllSpecialtys } from "../../../services/userService";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
// Import css files

import Slider from "react-slick";
class Specialty extends Component {
  state = {
    dataSpecialty: [],
  };

  async componentDidMount() {
    let allSpecialty = await getAllSpecialtys();
    if (allSpecialty && allSpecialty.data && allSpecialty.data.errCode === 0) {
      this.setState({
        dataSpecialty: allSpecialty.data.data,
      })
    }

  }
  handleViewDetailSpecialty = (item) => {
    if (this.props.history) {
      this.props.history.push(`/detail-specialty/${item.id}`)

    }
  }

  render() {
    let { dataSpecialty } = this.state;


    return (
      <div className="section-slide specialty">

        <div className=" slide-content container">
          <div className="slide-title">
            <div className="text"><FormattedMessage id="home-page.specialty" /></div>
            <Link to={`/all-specialties`}><div className="button"><FormattedMessage id="home-page.more-infor" /></div></Link >
          </div>
          <Slider {...this.props.settings}>
            {dataSpecialty.map((item, index) => {
              let imageBase64 = '';
              if (item.image) {
                imageBase64 = new Buffer(item.image, 'base64').toString('binary')
              }
              return (
                <div className="slide-item"
                  key={index}
                  onClick={() => this.handleViewDetailSpecialty(item)}>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));