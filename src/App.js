import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SignUp from './components/Signup'
import SignIn from './components/Signin'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './pages/PrivateRoute'
import ForgotPassword from './components/ForgotPassword'
import DashboardClient from './components/DashboardClient/dashboardClient'
import FormNewUser from './components/FormNewUser';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/signin" component={SignIn} exact />
          <PrivateRoute path="/dashboard-client" component={DashboardClient} exact />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/form-new-user" component={FormNewUser} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
