import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/LoginPage';
import { connectWithSocket } from './utils/wssConnection/wssConnection';

const OnlineTraining = () => {

    useEffect (() => {
        connectWithSocket();
    }, []);

    return (
        <Router>
            <Switch>
                <Route path='/onlineTraining/dashboard' component={Dashboard} exact/>
                <Route path='/' component={LoginPage}/>
            </Switch>
        </Router>
    )
}

export default OnlineTraining
