import styled from 'styled-components'

export const Container = styled.div`
    margin: 10px 10px 0 30px;
    padding-top: 20px;
    position: absolute;
`
export const BlockData = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const MainBar = styled.div`
    height: 60px;
    position: relative;
    margin: 20px 0 20px 20px;
`

export const Title = styled.h3`
    font-size: 25px;
`

export const BasicWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 250px;
    margin-top: 30px;
    background-color: #ccc;
    padding: 20px;
    border-radius: 10px;
`

export const ProfileImg = styled.img`
    display: flex;
    margin-top: 20px;
    width: 150px;
    height: 140px;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`

export const BasicData = styled.text`
    display: flex;
    margin-top: 10px;
    height: 30px;
    margin-left: 20px;
`

export const Label = styled.label`
    display: flex;
    margin-top: 10px;
`

export const Input = styled.input`
    display: flex;
    margin-top: 10px;
    height: 30px;
    border-radius: 10px;
    
    &::placeholder {
        color: #000;
    }
`

export const ExtendedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ccc;
    margin-top: 30px;
    margin-left: 20px;
    padding: 20px;
    border-radius: 10px;
`

export const SecondFormWrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 300px;
`

export const ChangeButton = styled.button`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 10px;

    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #0C969C;
        border: solid #fff;
        color: #fff;
    }
`

export const TitleData = styled.text`
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
`



