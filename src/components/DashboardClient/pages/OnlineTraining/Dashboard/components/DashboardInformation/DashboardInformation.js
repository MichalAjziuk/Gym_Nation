import React from 'react'

import './DashboardInformation.css'

const DashboardInformation = ({ username }) => {
    return (
        <div className='dashboard_info_text_container'>
            <span className='dashboard_info_text_title'>
                Hello { username } welcome in Training Online.
            </span>
            <span className='dashboard_info_text_description'>
                You can start a training calling directy to one of the coaches from the list or join group training call.
            </span>
        </div>
    )
}

export default DashboardInformation
