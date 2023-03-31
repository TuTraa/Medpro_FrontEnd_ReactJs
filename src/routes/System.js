import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import userRedux from '../containers/System/admin/userRedux';
import Header from '../containers/Header/Header';
import manageDoctor from '../containers/System/admin/manageDoctor';
import manageSpecialty from '../containers/System/specialty/manageSpecialty';
import manageClinic from '../containers/System/clinic/manageClinic';
import examinationSchedule from '../containers/System/admin/examination schedule/examinationSchedule';
import examinationScheduleHistory from '../containers/System/admin/examination schedule/examinationScheduleHistory';
import manageShceduldeAdmin from '../containers/System/admin/manageShceduldeAdmin';
class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <>
                {isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/manage-doctor" component={manageDoctor} />
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/user-redux" component={userRedux} />
                            <Route path="/system/manage-specialty" component={manageSpecialty} />
                            <Route path="/system/manage-clinic" component={manageClinic} />
                            <Route path="/system/manage-booking-cancel" component={examinationSchedule} />
                            <Route path="/system/manage-booking-history" component={examinationScheduleHistory} />
                            <Route path="/system/manage-schedule" component={manageShceduldeAdmin} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
