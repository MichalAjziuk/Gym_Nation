import styled from 'styled-components'

export const Container = styled.div`
    margin: 10px 10px 0 5px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
`

export const MainBar = styled.div`
    height: 60px;
    position: relative;
    margin: 20px 0 20px 20px;
    
`

export const Title = styled.h3`
    font-size: 25px;
`

export const SecondBar = styled.div`
    background-color: #0C969C;
    height: 100px;
    padding: 20px;
`

export const SecondTitle = styled.div`
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 10px;
`

export const SubTitle = styled.div`
    font-size: 15px;
`

export const RecipesBlock = styled.div`
    position: relative;
    height: 600px;
    width: 100%;
    /* background-color: #ccc; */
    margin-top: 80px;
`

export const TextInfo = styled.div`
    padding: 20px;
    font-size: 25px;
    font-weight: 800;
    color: #0C969C;
`

export const RecipeWrap = styled.div`
    background-color: #fff;
    height: 450px;
    width: 300px;
    margin: 20px 0px 40px 50px;
    border-radius: 15px;
    box-shadow: 10px 10px 10px black;
    cursor: pointer;

    &:hover {
        transition: all 0.1s ease-in-out;
        transform: scale(1.05);
    }
`

export const RecipeImage = styled.img`
    height: 50%;
    max-width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export const RecipeInfoWrap = styled.div`
    display: flex;
    height: 10%;
    padding-left: 10px;
    padding-top: 10px;
`

export const RecipeBurnImage = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 10px;
`

export const RecipeCalories = styled.div`
    margin-right: 10px;
`

export const RecipeTimerImage = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 10px;
`

export const RecipeTime = styled.div`
    margin-right: 10px;
`

export const RecipeDesc = styled.div`
    margin: 30px;
    font-size: large;
    font-weight: bold;
`











