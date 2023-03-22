import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import userRedux from '../containers/System/admin/userRedux';
import Header from '../containers/Header/Header';
import manageDoctor from '../containers/System/admin/manageDoctor';
import manageSpecialty from '../containers/System/specialty/manageSpecialty';
import manageClinic from '../containers/System/clinic/manageClinic';
import examinationScheduleWaiting from '../containers/System/admin/examination schedule/examinationScheduleWaiting';
import examinationScheduleFinished from '../containers/System/admin/examination schedule/examinationScheduleFinished';
import examinationScheduleCancel from '../containers/System/admin/examination schedule/examinationScheduleCancel';

class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <>
                {isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">

                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/user-redux" component={userRedux} />
                            <Route path="/system/manage-doctor" component={manageDoctor} />
                            <Route path="/system/manage-specialty" component={manageSpecialty} />
                            <Route path="/system/manage-clinic" component={manageClinic} />
                            <Route path="/system/manage-booking-waiting" component={examinationScheduleWaiting} />
                            <Route path="/system/manage-booking-finished" component={examinationScheduleFinished} />
                            <Route path="/system/manage-booking-cancel" component={examinationScheduleCancel} />
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
