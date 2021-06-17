import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Img from './signup.jpg'
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
    FormWrap,
    Photo,
    IconWrap
    } from './SignupElements'

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/Dashboard")
        } catch {
            setError('Failed to create an account')
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
                  <Photo src={Img}></Photo>
                  <FormContent>
                      <Form onSubmit={handleSubmit}>
                          <FormH1>Change your life today !</FormH1>
                          <FormError>{error}</FormError>
                          <FormLabel htmlFor='for'>Email</FormLabel>
                          <FormInput type='email' ref={emailRef} required />
                          <FormLabel htmlFor='for'>Password</FormLabel>
                          <FormInput type='password' ref={passwordRef} required />
                          <FormLabel htmlFor='for'>Password Confirmation</FormLabel>
                          <FormInput type='password' ref={passwordConfirmRef} required />
                          <FormButton disabled={loading} type='submit'>Continue</FormButton>
                          <Text>Already you have account ? <Link to='/signin'>Log in</Link></Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>  
        </>
    )
}

export default SignUp;
