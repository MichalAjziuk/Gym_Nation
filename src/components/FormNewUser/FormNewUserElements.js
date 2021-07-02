import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background-color: #0C969C;
`
export const IconWrap = styled.div`
    margin-top: 20px;
`
export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
` 
export const Wrap = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: #010101;
    border: 1px solid #000;
    margin: 0 auto;
    padding: 30px 40px 50px 40px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
        width: 60%;
        height: 60%;
    }
` 

export const FormH1 = styled.h1`
    margin-bottom: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 10px 5px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px; 
`

export const FormButton = styled.button`
    background: #0C969C;
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`
