import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    justify-content: center;
    align-items: center;
`
export const Wrap = styled.div`
    text-align: center;
`
export const Title = styled.h1`
    margin-bottom: 10px;
`
export const CommentsButton = styled.button`
    display: flex;
    justify-content: center;
    margin: 30px 800px 0 800px;
    padding: 20px;
    color: #000;
    border-radius: 4px;
    transition: ease-out 0.3s;
    font-size: 2rem;
    outline: none;
    border: 3px solid #0C969C;
    position: relative;
    z-index: 1;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        color: #fff;
    }

    &:before {
        transition: 0.5s all ease;
        position: absolute;
        top: 0;
        left: 50%;
        right: 50%;
        bottom: 0;
        opacity: 0;
        content:"";
        background-color: #0C969C;
    }
    
    &:hover:before {
        transition: 0.5s all ease;
        left: 0;
        right: 0;
        opacity: 1;
        z-index: -1;
    }

`
export const CommentsWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const CommentCard = styled.div`
    display: grid;
    grid-template-columns: 140px 290px;
    grid-template-rows: 200px;
    background-color: #CCCCCC;
    width: 430px;
    height: 250px;
    margin-right: 20px;
    border-radius: 10%;
`
export const ClientImg = styled.img`
    height: 210px;
    width: 140px;
    border-top-left-radius: 10%;
    box-shadow: 12px 10px #888888;
    z-index: 1;
`
export const CommentText = styled.p`
    font-size: 15px;
    background-color: #0C969C;
    color: #fff;
    z-index: 2;
    padding: 40px 20px 0 30px;
    border-top-right-radius: 10%;
`
export const ClientName = styled.h3`
    font-size: 16px;
    margin-left: 170px;
    margin-top: 8px;
    color: #0C969C;
`