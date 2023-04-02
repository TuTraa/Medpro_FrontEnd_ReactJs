import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import * as actions from '../../../store/actions';
import { languages } from "../../../utils/constant";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
class OutStandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    }
  }
  componentDidUpdate(prevProps, prevstate, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        arrDoctors: this.props.topDoctorsRedux
      })
    }
  }
  componentDidMount() {
    this.props.loadTopDoctors();
  }
  handleViewDetailDoctor = (doctor) => {
    if (this.props.history) {

      this.props.history.push(`/detail-doctor/${doctor.id}`)

    }
  }
  render() {
    let language = this.props.language;
    let arrDoctors = this.state.arrDoctors;
    return (
      <div className="section-slide OutSandingDoctor">

        <div className=" slide-content">
          <div className="slide-title">
            <div className="text"><FormattedMessage id="home-page.out-Standing-Doctor" /></div>
            <Link to={`/all-doctors`}><div className="button"><FormattedMessage id="home-page.more-infor" /></div></Link >
          </div>
          <Slider {...this.props.settings}>
            {arrDoctors && arrDoctors.length > 0
              && arrDoctors.map((item, index) => {
                let imageBase64 = '';
                if (item.image) {
                  imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                }
                return (
                  <div className="slide-item text-center" key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                    <div className="img-doctor-out">
                      <div className="slick-img-doctor bg-image" style={{ backgroundImage: `url(${imageBase64})` }}>
                      </div>
                      <span > {item.positionData.valueVi + ', ' + item.lastName + ' ' + item.firstName}
                      </span>
                      <p>{item.doctorinfor.specialtyData.name}</p>
                    </div>
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
    language: state.app.language,
    topDoctorsRedux: state.admin.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));