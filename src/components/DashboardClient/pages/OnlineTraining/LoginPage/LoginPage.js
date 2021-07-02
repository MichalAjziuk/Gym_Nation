import React, { useState } from 'react'
import { connect } from 'react-redux'
import UsernameInput from './components/UsernameInput'
import SubmitButton from './components/SubmitButton'
import { useHistory } from 'react-router-dom'
import { setUsername } from '../store/actions/dashboardActions'
import { registerNewUser } from '../utils/wssConnection/wssConnection'
import live from '../../../components/Sidebar/images/live.svg'
import './LoginPage.css'

const LoginPage = ({saveUsername}) => {
    const [username, setUsername] = useState('');
    const history = useHistory();

    const handleSubmitButtonPressed = () => {
        registerNewUser(username);
        saveUsername(username);
        history.push('/onlineTraining/dashboard');
    };

    return (
        <div className='login-page_container'>
            <div className='login-page_login_box'>
                <div className='login-page_logo_container'>
                    <img className='login-page_logo_image' src={live} alt='live'/>
                </div>
                <div className='login-page_title_container'>
                    <h2>Start training live</h2>
                </div>
                <UsernameInput username={username} setUsername={setUsername} />
                <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
            </div>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        saveUsername: username => dispatch(setUsername(username))
    };
}

export default connect(null, mapActionsToProps)(LoginPage);
