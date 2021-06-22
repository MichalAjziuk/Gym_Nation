import React from 'react'

const FormNewUser = () => {
    return (
        <>
        <Container>
            <IconWrap>
                <Icon to='/'>Gym Nation</Icon>
            </IconWrap>
            <WelcomeText> Help us find the best training plan for You !</WelcomeText>
            <FormWrapper>
                <FormLabel htmlFor='for'>Name:</FormLabel>
                <FormInput type='text'required />
                <FormLabel htmlFor='for'>Gender:</FormLabel>
                <FormInput type='text'required />
                <FormLabel htmlFor='for'>Age:</FormLabel>
                <FormInput type='text'required />
                <FormLabel htmlFor='for'>Weight:</FormLabel>
                <FormInput type='text'required />
                <FormLabel htmlFor='for'>Height:</FormLabel>
                <FormInput type='text'required />
                <FormButton disabled={loading} type='submit'>Continue</FormButton>
            </FormWrapper>
        </Container>  
        </>
    )
}

export default FormNewUser
