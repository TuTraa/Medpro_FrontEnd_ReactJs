import React, { Component } from 'react';
import { connect } from "react-redux";
import './doctorInfor.scss';
import { languages } from '../../../utils/constant';
import { getExtraInforDoctorById } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';

class DoctorInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorInfor: {},
            isShowDetail: false,
        }
    }
    async componentDidMount() {
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.doctorId !== prevProps.doctorId) {
            let res = await getExtraInforDoctorById(this.props.doctorId);
            this.setState({
                doctorInfor: res.data.data
            })
        }
    }
    showHidedDetail = () => {
        this.setState({
            isShowDetail: !this.state.isShowDetail,
        })
    }
    render() {
        let { language } = this.props;
        let { isShowDetail } = this.state;
        let { doctorInfor } = this.state;
        console.log('doctorinfor', doctorInfor)
        return (
            <div className='doctor-infor'>
                <div className='content-right-label-adress'><FormattedMessage id={"patient.extra-infor.adress"} /></div>
                <div className='content-right-adress-name mt-2'>{doctorInfor.nameClinic}</div>
                <div className='content-right-adress mt-2'>{doctorInfor.addressClinic}</div>
                <hr />
                <div className='price-row'>
                    <div className='label-price'><FormattedMessage id={"patient.extra-infor.price"} />: </div>
                    {isShowDetail && doctorInfor && doctorInfor.priceTypeData &&
                        <>
                            <div className='price'> <NumberFormat
                                value={doctorInfor.priceTypeData.valueVi}
                                displayType={'text'}
                                thousandSeparator={true}
                            /><sup>đ</sup> - <NumberFormat
                                    value={doctorInfor.priceTypeData.valueVi * 2}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                /><sup>đ</sup>.</div>
                            <div className='more-infor' onClick={() => this.showHidedDetail()}><FormattedMessage id={"patient.extra-infor.show"} /></div>
                        </>
                    }
                </div>
                {
                    !isShowDetail && doctorInfor && doctorInfor.priceTypeData &&
                    <div className='infor-price-more'>
                        <div className='infor-price'>
                            <div className='min-max-price'>
                                <div className='label-min-max'><FormattedMessage id={"patient.extra-infor.price2"} />:</div>
                                {language === languages.VI ?
                                    <div className='label-min-max'><NumberFormat
                                        value={doctorInfor.priceTypeData.valueVi}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    /><sup>đ</sup> - <NumberFormat
                                            value={doctorInfor.priceTypeData.valueVi * 2}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        /><sup>đ</sup></div>
                                    :
                                    <div className='label-min-max'>{doctorInfor.priceTypeData.valueEn}$ - {doctorInfor.priceTypeData.valueEn * 2}$</div>
                                }
                            </div>
                            <div className='infor-detail'><FormattedMessage id={"patient.extra-infor.price15"} /> <NumberFormat
                                value={doctorInfor.priceTypeData.valueVi}
                                displayType={'text'}
                                thousandSeparator={true}
                            /> VND ({doctorInfor.priceTypeData.valueEn}$ for foreigners)</div>
                            <div className='infor-detail'><FormattedMessage id={"patient.extra-infor.price30"} /> <NumberFormat
                                value={doctorInfor.priceTypeData.valueVi * 2}
                                displayType={'text'}
                                thousandSeparator={true}
                            />VND ({doctorInfor.priceTypeData.valueEn * 2}$ for foreigners)</div>
                            <div className='infor-detail'><FormattedMessage id={"patient.extra-infor.prioritize"} />. </div>
                            <div className='note'><FormattedMessage id={"patient.extra-infor.not"} /></div>
                        </div>
                        <div className='hide-infor-price' onClick={() => this.showHidedDetail()}><FormattedMessage id={"patient.extra-infor.hide"} /></div>
                    </div>
                }

                <hr />
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorInfor);
