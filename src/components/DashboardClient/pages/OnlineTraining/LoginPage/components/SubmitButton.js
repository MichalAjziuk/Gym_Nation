import React from 'react'

const SubmitButton = ({ handleSubmitButtonPressed }) => {
    return (
        <div className='login-page_button_container'>
            <button
                className='login-page_button'
                onClick={handleSubmitButtonPressed}
            >
                Start
            </button>
        </div>
    )
}

export default SubmitButton
