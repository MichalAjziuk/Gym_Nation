import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import {
    Container,
    Icon,
    Form, 
    Text, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormError,
    FormInput, 
    FormLabel, 
    FormWrap 
    } from './FPWDElements'

const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <>
          <Container>
              <FormWrap>
                  <Icon to='/'>Gym Nation</Icon>
                  <FormContent>
                      <Form onSubmit={handleSubmit}>
                          <FormH1>Reset your password</FormH1>
                          <FormError>{error}</FormError>
                          {message}
                          <FormLabel htmlFor='for'>Email</FormLabel>
                          <FormInput type='email' ref={emailRef} required />
                          <FormButton disabled={loading} type='submit'>Continue</FormButton>
                          <Text><Link to='/signin'>Cancel</Link></Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>  
        </>
    )
}

export default ForgotPassword;
