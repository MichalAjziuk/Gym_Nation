import styled from 'styled-components'

export const MoveListContainer = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000000;
`
export const TitleH1 = styled.h1`
    color: #fff;
`
export const TableWrap = styled.div`
    margin-top: 50px;
    width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 5px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const TableItem = styled.div`
    background: #000000;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-height: 500px;
    padding: 30px;
`

export const ImgItem = styled.img`
    height: 50px;
    width: 50px;
    margin-right: 15px;
`

export const Name = styled.h3`
    color: #fff;
`

export const MoveListWrapper = styled.div`
    background-color: #000000;
    height: 500px;
    width: 5000px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const MoveListCard = styled.div`
    background: #000000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding: 30px;
    width: 300px;
    height: 460px;
    margin: 20px;
    animation: move 40s linear infinite;

    @keyframes move {
        0%{
            transform:translate(-1500px)
        }
        100%{
            transform:translate(1500px)
        }
    }
`

export const CardTitle = styled.h2`
    color: #fff;
    margin-left: 5px;
    font-size: 25px;
`

export const CardSubTitle = styled.h3`
    font-size: 14px;
    margin-left: 6px;
    color: #868686;
    margin-top: 10px;
`

export const ImgWrap = styled.div`
`

export const Img = styled.img`
    height: 330px;
    width: 230px;
    border-radius: 5%;
    margin-top: 10px;
`