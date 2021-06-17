import React from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import styled from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    min-height: 100vh;
    margin: 0 auto;
`
const SidebarWrapped = styled.div`
    min-width: 240px;
`
const MainWrapped = styled.div`
    flex-grow: 1;
    background-color: #fff;
`

const DashboardClient = () => {
    return (
        <Router>
            <Container>
               <SidebarWrapped>
                    <Sidebar />
                </SidebarWrapped>
                <MainWrapped>
                    <Main />
                </MainWrapped> 
            </Container>
        </Router>
    )
}

export default DashboardClient
