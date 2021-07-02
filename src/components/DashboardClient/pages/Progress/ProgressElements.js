import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    margin: 10px 10px 0 5px;
    padding-top: 20px;
    position: absolute;
`

export const RecentDateWrap = styled.div`
    height: 40px;
    width: 300px;
    margin: 20px 0 20px 20px;
    padding-left: 15px;
    font-size: 24px;
    font-weight: 800;
    border: solid #0C969C;
`
export const WelcomeBlock = styled.div`
    height: 400px;
    background-color: #000;
    margin: 10px;
    display: flex;
    flex-direction: row;
`

export const TrainingTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0C969C;
    height: 100%;
    width: 55%;
`
export const TrainerInfo = styled.h4`
    display: flex;
    margin: 40px 0 20px 30px;
    color: #ccc;
`
export const TrainingLabel = styled.h1`
    display: flex;
    font-size: 35px;
    margin: 0 0 20px 30px;
    color: #000;
`
export const TrainingText = styled.text`
    display: flex;
    font-size: 20px;
    margin: 0 50px 20px 30px;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`
export const TrainingButton = styled(Link)`
    display: flex;
    border: solid #000;
    border-radius: 15px;
    width: 20%;
    justify-content: center;
    height: 40px;
    margin: 0 0 20px 30px;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: #000;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #0C969C;
        border: solid #fff;
        color: #fff;
    }
`

export const TrainingImageWrap = styled.div`
    display: flex;
    width: 45%;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const SecondMotivationBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    height: 300px;
`
export const ChartBlock = styled.div`
    width: 370px;
    margin: 20px 0 40px 10px;
    background-color: #fff;
    padding: 10px;
`
export const SecondMotivationText = styled.div`
    margin: 20px 10px 40px 10px;
    padding: 20px;
    background-color: #0C969C;
    font-size: 20px;
    align-self: center;
`
export const TitleArea = styled.h2`
    display: flex;
    margin: 180px 0 30px 20px;
    font-size: 23px;
    font-weight: 800;
`

export const BlogWrap = styled.div`
    display: flex;
    flex-direction: row;
    height: 600px;
    margin-top: 30px;
`

export const BlogPostCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 100%;
    margin: 0 20px 0;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
    border: 3px solid #000;
    box-shadow: 10px 10px 10px black;

    &:hover {
        transition: all 0.1s ease-in-out;
        transform: scale(1.05);
    }
`
export const PostImageWrap = styled.div`
    display: flex;
    height: 52%;
    width: 100%;
    border-radius: 10%;
`
export const PostImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`
export const PostTitle = styled.h3`
    display: flex;
    color: #0C969C;
    margin: 10px 15px 0 15px;
`
export const PostText = styled.p`
    display: flex;
    justify-content: center;
    margin: 17px;
    color: #000;
`



