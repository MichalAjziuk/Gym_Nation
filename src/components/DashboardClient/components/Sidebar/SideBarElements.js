import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-right-style: solid; 
    border-width: 1px;
    border-color: #B8C0C0;
`
export const LogoWrap = styled.div`
    padding: 80px 0px 50px 20px;
`

export const Logo = styled.h1`
    color: #0C969C;
    justify-self: flex-start;
    font-size: 28px;
    display: flex;
    align-items: center;
    margin-left: 60px;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 2px 3px #000;
`

export const CalendarWrap = styled.div`
    height: 220px;
    margin-left: 30px;
    margin-right: 30px;
`

export const MenuWrap = styled.div`
    height: 50%;
    margin-top: 100px;
`

export const MenuCard = styled(Link)`
    display: grid;
    height: 60px;
    grid-template-columns: 30px 170px;
    grid-column-gap: 20px;
    margin-top: 10px;
    margin-bottom: 15px;
    padding-left: 30px;
    align-items: center;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
    

    &:hover {
        border: solid;
        border-color: #0C969C;
        transition: all 0.1s ease-in-out;
        padding-left: 40px;
    }
`

export const IconItem = styled.img`
    height: 40px;
    width: 40px;
`

export const TitleItem = styled.h2`
    font-size: 16px;
    font-weight: 100;
    padding-left: 15px;
    text-decoration: none;
    color: #000;
`

