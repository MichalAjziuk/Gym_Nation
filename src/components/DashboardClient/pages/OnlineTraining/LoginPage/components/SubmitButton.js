import React from 'react'

const SubmitButton = ({ handleSubmitButtonPressed }) => {
    return (
        <div className='login-page_button_container'>
            <button
                className='login-page_button'
                onClick={handleSubmitButtonPressed}
            >
                Start using Videotalker
            </button>
        </div>
    )
}

export default SubmitButton
