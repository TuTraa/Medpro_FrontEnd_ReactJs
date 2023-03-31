import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import BannerMedpro from '../../HomePage/bannerMedpro';
import HomeHeader from '../../HomePage/HomeHeader';
import avatarDoctor from "../../../assets/images/clinic/151320-benhvienhungviet1.png";
import './allSpecialties.scss';
import { getAllSpecialtys } from '../../../services/userService';
import HomeFooter from '../../HomePage/HomeFooter';
import { Link } from "react-router-dom";

class DefaultClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrPecialty: '',
        }
    }
    async componentDidMount() {
        let allSpecialty = await getAllSpecialtys();
        if (allSpecialty && allSpecialty.data && allSpecialty.data.errCode === 0) {
            this.setState({
                arrPecialty: allSpecialty.data.data
            })
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleViewDetailSpecialty = (id) => {
        if (this.props.history) {

            this.props.history.push(`/detail-specialty/${id}`)

        }
    }
    render() {
        let { arrPecialty } = this.state;

        return (
            <>
                <HomeHeader isShowBanner={true} />
                <div className='all-specialty'>
                    <div className='title-all-specialty'>
                        <h5 className=''>Tất cả chuyên khoa</h5>
                    </div>
                    <div className='all-item-specialty'>
                        {arrPecialty && arrPecialty.length > 0 && arrPecialty.map((item, index) => {
                            let imageBase64 = '';
                            if (item.image) {
                                imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                            }
                            return (
                                <div className='item-specialty' key={index} onClick={() => this.handleViewDetailSpecialty(item.id)}>
                                    <div className='image-specialty' style={{ backgroundImage: `url(${imageBase64})` }}></div>
                                    <p>{item.name}</p>
                                </div>
                            )

                        })}
                    </div>

                </div>
                <HomeFooter />

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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);
