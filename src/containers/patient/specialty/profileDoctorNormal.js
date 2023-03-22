import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import { getDetailInforDoctor } from '../../../services/userService';
import { Link } from "react-router-dom";
import "./profileDoctorNormal.scss"

class ProfileDoctorNormal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: ''
        }
    }
    async componentDidMount() {
        if (this.props.doctorId) {
            let id = this.props.doctorId;
            let res = await (await getDetailInforDoctor(id)).data;
            if (res && res.errCode === 0) {
                this.setState({
                    detailDoctor: res.data
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.doctorId !== prevProps.doctorId) {
            let id = this.props.doctorId;
            let res = await (await getDetailInforDoctor(id)).data;
            if (res && res.errCode === 0) {
                this.setState({
                    detailDoctor: res.data
                })
            }
        }
    }
    render() {
        let { language } = this.props;
        let { detailDoctor } = this.state;
        let nameVi = '', nameEn = '';
        if (detailDoctor) {
            nameVi = `${detailDoctor.lastName} ${detailDoctor.firstName}`;
            nameEn = `${detailDoctor.firstName} ${detailDoctor.lastName}`;
        }
        return (
            <div className='profile-doctor-normal'>

                <div className='intro-doctor'>
                    <div className='content-left'
                        style={{ backgroundImage: `url(${detailDoctor && detailDoctor.image ? detailDoctor.image : 'oke'})` }}>
                    </div>
                    <div className='content-right'>
                        <div className='up'>
                            {language === languages.VI ? nameVi : nameEn}
                        </div>
                        <div className='down'>
                            {detailDoctor && detailDoctor.Markdown
                                && detailDoctor.Markdown.description &&
                                <span> {detailDoctor.Markdown.description}</span>}
                        </div>
                        <div className='link-to-detail'> <Link to={`/detail-doctor/${this.props.doctorId}`}>Xem thêm</Link >  </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctorNormal);
