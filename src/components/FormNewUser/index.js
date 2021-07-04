import React, { useState, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import firebase from '../../firebase'
import uuid from 'react-uuid'
import {
    Container,
    IconWrap,
    Icon,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Wrap
} from './FormNewUserElements'

const FormNewUser = (props) => {
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const nameRef = useRef()
    const agedRef = useRef()
    const genderRef = useRef()
    const weightRef = useRef()
    const heightRef = useRef()
    const levelRef = useRef()
    const db = firebase.firestore();
    const location = useLocation();
    



    async function handleSubmit(e) {
        e.preventDefault()
        const userId = uuid();
        const data = {
            userId: userId,
            email: location.state.email,
            password: location.state.password,
            name: nameRef.current.value,
            age: agedRef.current.value,
            gender: genderRef.current.value,
            weight: weightRef.current.value,
            height: heightRef.current.value,
            training_level: levelRef.current.value
        }

        try{
            setLoading(true)
            db.collection('users').doc().set(data)
            history.push("/dashboard-client")
        } catch {
            console.log('Something gone wrong')
        }
        setLoading(false)
    }

    return (
        <>
        <Container>
            <IconWrap>
                <Icon to='/'>Gym Nation</Icon>
            </IconWrap>
            <Wrap>
                <Form onSubmit={handleSubmit}>
                    <FormH1>Help us find the best training plan for You ! Please fill the form </FormH1>
                    <FormLabel htmlFor='for'>Name:</FormLabel>
                    <FormInput type='text' ref={nameRef} required />
                    <FormLabel htmlFor='for'>Gender:</FormLabel>
                    <FormInput type='text' ref={genderRef} required />
                    <FormLabel htmlFor='for'>Age:</FormLabel>
                    <FormInput type='number' ref={agedRef} required />
                    <FormLabel htmlFor='for'>Weight (kg):</FormLabel>
                    <FormInput type='number' ref={weightRef} required />
                    <FormLabel htmlFor='for'>Height (cm):</FormLabel>
                    <FormInput type='number' ref={heightRef} required />
                    <FormLabel htmlFor='for'>Training Level:</FormLabel>
                    <FormInput type='text' ref={levelRef} required />
                    <FormButton disabled={loading} type='submit'>Submit</FormButton>
                </Form>
            </Wrap>
        </Container>  
        </>
    )
}

export default FormNewUser
