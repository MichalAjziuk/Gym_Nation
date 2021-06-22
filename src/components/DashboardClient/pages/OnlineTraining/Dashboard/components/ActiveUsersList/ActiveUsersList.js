import React from 'react'
import ActiveUsersListItem from './ActiveUsersListItem'
import './ActiveUsersList.css'
import { connect } from 'react-redux'

const ActiveUsersList = (props) => {
    const { activeUsers, callState } = props; 

    return (
        <div className='active_user_list_container'>
            {activeUsers.map((activeUser) => 
                <ActiveUsersListItem 
                key={activeUser.socketId} 
                activeUser={activeUser}
                callState={callState}
                />)}
        </div>
    )
}

const mapStateToProps = ({ dashboard, call }) => ({
    ...dashboard,
    ...call
});

export default connect(mapStateToProps)(ActiveUsersList);
