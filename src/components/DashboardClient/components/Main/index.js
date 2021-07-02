import React from 'react'
import { Route, Switch } from 'react-router';
import { AuthProvider } from '../../../../contexts/AuthContext';
import Diets from '../../pages/Diets';
import OnlineTraining from '../../pages/OnlineTraining';
import Profile from '../../pages/Profile';
import Progress from '../../pages/Progress';
import Trainings from '../../pages/Trainings';
import PrivateRoute from '../../../../pages/PrivateRoute'
import { Scrollbars } from 'react-custom-scrollbars'


const Main = () => {
    return (
        <Scrollbars style={{width: "100%", height: "100%" }}>
            <AuthProvider>
                <Switch>
                    <Route path="/dashboard-client" component={Progress}/>
                    <Route path="/progress" component={Progress}/>
                    <Route path="/onlineTraining" component={OnlineTraining}/>
                    <Route path="/trainings" component={Trainings}/>
                    <Route path="/diets" component={Diets}/>
                    <PrivateRoute path="/profile" component={Profile}/>z
                </Switch>
            </AuthProvider>
        </Scrollbars>
    )
}

export default Main;