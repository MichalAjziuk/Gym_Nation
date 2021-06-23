import React from 'react'
import Icon1 from './images/your_training.svg'
import Icon2 from './images/broadcasting.svg'
import Icon3 from './images/trainings.svg'
import Icon4 from './images/diets.svg'
import Icon5 from './images/user.svg'
import ProgressBar from './ProgressBar'
import firebase from '../../../../firebase'

import {
    Container,
    LogoWrap,
    Logo,
    ProgressWrap,
    MenuWrap,
    MenuCard,
    IconItem,
    TitleItem
    } from './SideBarElements'


const Sidebar = () => {
    // const [progress, setProgress] = useState(0);
    const state = {
        size: 200,
        // progress,
        strokeWidth: 12,
        circleOneStroke: '#B8C0C0',
        circleTwoStroke: '#000000'
    }
    return (
        <Container>
            <LogoWrap>
                <Logo to='/dashboard-client'>GYM NATION</Logo>
            </LogoWrap>
            <ProgressWrap>
                <ProgressBar { ...state}/>
            </ProgressWrap>
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
                        <IconItem src={Icon5}/>
                        <TitleItem>Logout</TitleItem>
                    </MenuCard>
            </MenuWrap>
        </Container>
    )
}

export default Sidebar
