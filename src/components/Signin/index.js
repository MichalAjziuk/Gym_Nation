import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import Img from './signin.jpg'
import {
    Container,
    Icon,
    Form, 
    Text, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormErrorWrap,
    FormError,
    FormInput, 
    FormLabel, 
    FormWrap,
    Photo,
    IconWrap,
    NavigationLink
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
            history.push("/dashboard-client")
        } catch {
            setError("Failed to sign in")
        }
        setLoading(false)
    }
    
    return (
        <>
          <Container>
            <IconWrap>
                <Icon to='/'>Gym Nation</Icon>
            </IconWrap>
            <FormWrap>
                <FormContent>
                    <Photo src={Img}></Photo>
                    <Form onSubmit={handleSubmit}>
                          <FormH1>Sign in to your account</FormH1>
                          {error && <FormErrorWrap><FormError>{error}</FormError></FormErrorWrap>}
                          <FormLabel htmlFor='for'>Email</FormLabel>
                          <FormInput type='email' ref={emailRef} required />
                          <FormLabel htmlFor='for'>Password</FormLabel>
                          <FormInput type='password' ref={passwordRef} required />
                          <FormButton disabled={loading} type='submit'>Continue</FormButton>
                          <NavigationLink to="/forgot-password">Forgot password ?</NavigationLink>
                          <Text>You don't have account. <NavigationLink to='/signup'>Click here</NavigationLink></Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>  
        </>
    )
}
export default SignIn;
