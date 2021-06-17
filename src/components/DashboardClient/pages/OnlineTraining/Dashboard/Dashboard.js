import React from 'react'
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard_container'>
            <div className='dashboard_left_section'>
                <div className='dashboard_content_container'>
                    content
                </div>
                <div className='dashboard_rooms_container'>
                    rooms
                </div>
            </div>
            <div className='dashboard_right_section'>
                <div className='dashboard_active_users_list'>
                    <ActiveUsersList />
                </div>
                <div className='dashboard_logo_container'>
                    <h1>GYM NATION</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard
