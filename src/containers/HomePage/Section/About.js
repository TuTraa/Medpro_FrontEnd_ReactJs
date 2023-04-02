import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
    state = {}
    render() {
        return (
            <div className="section-about ">
                <div className="row">
                    <div className="about-left col-7">
                        <p><FormattedMessage id="banner.medpro-18" /></p>
                        <iframe width="94%"
                            height="400px" src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            // frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        >
                        </iframe>
                    </div>
                    <div className="about-right col-5">
                        <p>
                            <FormattedMessage id="banner.medpro-19" />
                        </p>
                    </div>

                </div>
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(About);