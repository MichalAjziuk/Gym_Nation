import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
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
    } from './SigninElements'


const SignIn = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin }  = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard-admin")
        } catch {
            setError("Failed to sign in")
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
                          <FormH1>Sign in to your account</FormH1>
                          <FormError>{error}</FormError>
                          <FormLabel htmlFor='for'>Email</FormLabel>
                          <FormInput type='email' ref={emailRef} required />
                          <FormLabel htmlFor='for'>Password</FormLabel>
                          <FormInput type='password' ref={passwordRef} required />
                          <FormButton disabled={loading} type='submit'>Continue</FormButton>
                          <Text><Link to="/forgot-password">Forgot password ?</Link></Text>
                          <Text>You don't have account. <Link to='/signup'>Click here</Link></Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>  
        </>
    )
}
export default SignIn;
