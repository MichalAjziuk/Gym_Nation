import React, { useState } from 'react'
import Icon1 from './images/your_training.svg'
import Icon2 from './images/broadcasting.svg'
import Icon3 from './images/trainings.svg'
import Icon4 from './images/diets.svg'
import Icon5 from './images/user.svg'
import Icon6 from './images/logout.png'
import firebase from '../../../../firebase'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {
    Container,
    LogoWrap,
    Logo,
    CalendarWrap,
    MenuWrap,
    MenuCard,
    IconItem,
    TitleItem
    } from './SideBarElements'


const Sidebar = () => {
    const [value, onChange] = useState(new Date());
    
    return (
        <Container>
            <LogoWrap>
                <Logo to='/dashboard-client'>GYM NATION</Logo>
            </LogoWrap>
            <CalendarWrap>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </CalendarWrap>
            <MenuWrap>
                    <MenuCard to="/progress">
                        <IconItem src={Icon1}/>
                        <TitleItem >Your Training</TitleItem>
                    </MenuCard>
                    <MenuCard to="/onlineTraining">
                        <IconItem src={Icon2}/>
                        <TitleItem>Online Training</TitleItem>
                    </MenuCard>
                    <MenuCard to="/trainings">
                        <IconItem src={Icon3}/>
                        <TitleItem>Trainings</TitleItem>
                    </MenuCard>
                    <MenuCard to="/diets">
                        <IconItem src={Icon4}/>
                        <TitleItem>Diet plan</TitleItem>
                    </MenuCard>
                    <MenuCard to="/profile">
                        <IconItem src={Icon5}/>
                        <TitleItem>Your profile</TitleItem>
                    </MenuCard>
                    <MenuCard onClick={() => firebase.auth().signOut()}>
                        <IconItem src={Icon6}/>
                        <TitleItem>Logout</TitleItem>
                    </MenuCard>
            </MenuWrap>
        </Container>
    )
}

export default Sidebar
