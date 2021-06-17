import React from 'react'

const UsernameInput = (props) => {
    const { username, setUsername } = props;

    return (
        <div className='login-page_input_container'>
            <input 
                placeholder='Enter your name'
                type='text'
                value={username}
                onChange={(event) => {setUsername(event.target.value); }}
                className='login-page_input'
            />
        </div>
    )
}

export default UsernameInput
