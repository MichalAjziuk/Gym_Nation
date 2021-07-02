import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  height: 120%;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  display: flex;
  padding: 50px 0 200px 400px;
`

export const RecipeWrapper = styled.div`
  width: 600px;
  height: 850px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`
export const ImageRecipe = styled.img`
    height: 40%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const NameRecipe = styled.h1`
    margin: 20px;
    color: #0C969C;
`

export const DescriptionRecipe = styled.p`
    margin: 20px;
    justify-content: center;
    align-items: center;
    
`
