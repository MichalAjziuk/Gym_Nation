import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList'
import * as webRTChandler from '../utils/webRTC/webRTCHandler'
import * as webRTCGroupHandler from '../utils/webRTC/webRTCGroupCallHandler'
import './Dashboard.css'
import DirectCall from './components/DirectCall/DirectCall'
import DashboardInformation from './components/DashboardInformation/DashboardInformation'
import { callStates } from '../store/actions/callActions'
import GroupCallRoomsList from './components/GroupCallRoomsList/GroupCallRoomsList'
import GroupCall from './components/GroupCall/GroupCall'

const Dashboard = ({ username, callState }) => {

    useEffect(() => {
        webRTChandler.getLocalStream();
        webRTCGroupHandler.connectWithMyPeer();
    }, []);

    return (
        <div className='dashboard_container'>
            <div className='dashboard_left_section'>
                <div className='dashboard_content_container'>
                    <DirectCall />
                    <GroupCall />
                    {callState !== callStates.CALL_IN_PROGRESS && <DashboardInformation username={username}/>}
                </div>
                <div className='dashboard_rooms_container'>
                    <GroupCallRoomsList />
                </div>
            </div>
            <div className='dashboard_right_section'>
                <div className='dashboard_active_users_list'>
                    <ActiveUsersList />
                </div>
                <div className='dashboard_logo_container'>
                    <h1 className="logo_text">GYM NATION</h1>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ call, dashboard }) => ({
     ...call,
     ...dashboard
})

export default connect(mapStateToProps)(Dashboard);
