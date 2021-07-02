import styled from 'styled-components'

export const Container = styled.div`
    margin: 10px 10px 0 5px;
    padding-top: 20px;
    position: absolute;
`

export const MainBar = styled.div`
    height: 60px;
    position: relative;
    margin: 20px 0 20px 20px;
`

export const Title = styled.h3`
    font-size: 25px;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 1.1fr 1fr;
    height: 100%;
    width: 100%;
    position: relative;
`

export const TrnBox = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    margin-left: 20px;
    margin-bottom: 50px;
    margin-right: 60px;
    cursor: pointer;
    border: 3px solid #000;
    box-shadow: 10px 10px 10px black;

    &:hover {
        transition: all 0.1s ease-in-out;
        transform: scale(1.05);
    }
`

export const TrnImg = styled.img`
    width: 100%;
    height: 50%;
`

export const TrnCategory = styled.span`
    font-size: 12px;
    color: grey;
    margin-left: 10px;
`

export const TrnName = styled.h2`
    padding: 5px 0 10px ;
    margin-left: 10px;
`

export const TrnInfo = styled.div`
    font-size: 15px;
    margin-left: 10px;
`

export const DetailsBlock = styled.div`
    margin-top: 40px;
`

export const BrnImg = styled.img`
    width: 15px;
    height: 15px; 
    margin-left: 10px;  
`

export const Level = styled.span`
    font-size: 12px;
    margin-left: 5px;
`

export const FireImg = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 10px;
`

export const Calories = styled.span`
    font-size: 12px;
    margin-left: 5px;
`