import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { postVerifyBookingApointment } from '../../services/userService';
import HomeHeader from '../HomePage/HomeHeader';
import "./verifyEmail.scss"

class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 3,
        }
    }
    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            const urlParams = new URLSearchParams(this.props.location.search);
            const token = urlParams.get('token');
            const doctorId = urlParams.get('doctorId');
            console.log(doctorId)
            let res = await postVerifyBookingApointment({ token: token, doctorId: doctorId });
            console.log('verify res:', res)
            if (res && res.data && res.data.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.data.errCode,
                })
            }
            else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.data.errCode && res.data ? res.data.errCode : -1,
                })
            }
        }
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    render() {
        let { errCode, statusVerify } = this.state;
        console.log('state', errCode, statusVerify)
        return (
            <>
                <HomeHeader />

                {
                    statusVerify === false ?
                        <div className='load'>
                            loading data....
                        </div>
                        :
                        <div className='Notification'>
                            {errCode === 3 ?
                                <div > Lỗi truy cập xin vui lòng đặt lại ! </div> :
                                <>
                                    {errCode === 0 ?
                                        <div >Bạn đã xác nhận lịch hẹn thành công! </div>
                                        :
                                        <div>Lịch hẹn đã được xác nhận hãy kiểm tra ở thông tin cá nhân! </div>
                                    }
                                </>}
                        </div>
                }
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
