import React from 'react'
import { Route, Switch } from 'react-router';
import { AuthProvider } from '../../../../contexts/AuthContext';
import Diets from '../../pages/Diets';
import ErrorPage from '../../pages/ErrorPage';
import OnlineTraining from '../../pages/OnlineTraining';
import Profile from '../../pages/Profile';
import Progress from '../../pages/Progress';
import Trainings from '../../pages/Trainings';
import PrivateRoute from '../../../../pages/PrivateRoute'


const Main = () => {
    return (
            <AuthProvider>
                <Switch>
                    <Route path="/progress" component={Progress}/>
                    <Route path="/onlineTraining" component={OnlineTraining}/>
                    <Route path="/trainings" component={Trainings}/>
                    <Route path="/diets" component={Diets}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <Route component={ErrorPage}/>
                </Switch>
        </AuthProvider>
    )
}

export default Main;