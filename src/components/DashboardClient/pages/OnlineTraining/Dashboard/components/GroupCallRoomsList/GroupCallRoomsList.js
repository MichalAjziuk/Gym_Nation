import React from 'react'
import GroupCallRoomsListItem from './GroupCallRoomsListItem'
import './GroupCallRoomsList.css'
import { connect } from 'react-redux'


const GroupCallRoomsList = (props) => {
    const { groupCallRooms } = props;
    return (
        <>
          {groupCallRooms.map(room => <GroupCallRoomsListItem key={room.roomId} room={room} />)}  
        </>
    )
}

const mapStoreStateToProps = ({ dashboard }) => (
    {
        ...dashboard
    }
)

export default connect(mapStoreStateToProps)(GroupCallRoomsList);
