import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Burn from '../../../../images/fire.png'
import TimerCook from '../../../../images/timerCook.png'
import Recipe1 from '../../../../images/recipe1.jpg'
import Recipe2 from '../../../../images/recipe2.jpg'
import Recipe3 from '../../../../images/recipe3.jpg'
import Recipe4 from '../../../../images/recipe4.jpg'
import Recipe5 from '../../../../images/recipe5.jpg'
import Recipe6 from '../../../../images/recipe6.jpg'
import Recipe from './components/Recipe'

import {
    Container,
    MainBar,
    Title,
    SecondBar,
    SecondTitle,
    SubTitle,
    RecipesBlock,
    TextInfo,
    RecipeWrap,
    RecipeImage,
    RecipeBurnImage,
    RecipeCalories,
    RecipeTimerImage,
    RecipeTime,
    RecipeInfoWrap,
    RecipeDesc
} from './DietsElements'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const recipes = [
    {id: 0, recipeImage: Recipe1, recipeCalorie: '253.8 kcal', recipeTime: '15 min', recipeDesc: 'Yogurt with mango, oatmeal and chocolate'},
    {id: 1, recipeImage: Recipe2, recipeCalorie: '498.4 kcal', recipeTime: '10 min', recipeDesc: 'Egg, cheese, and vegetables toast'},
    {id: 2, recipeImage: Recipe3, recipeCalorie: '456.5 kcal', recipeTime: '40 min', recipeDesc: 'Zucchini pizzerias with cheese and mushrooms'},
    {id: 3, recipeImage: Recipe4, recipeCalorie: '211.3 kcal', recipeTime: '11 min', recipeDesc: 'Fruit salad with avocado'},
    {id: 4, recipeImage: Recipe5, recipeCalorie: '301.1 kcal', recipeTime: '10 min', recipeDesc: 'Millet cocoa pudding with blueberries'},
    {id: 5, recipeImage: Recipe6, recipeCalorie: '431.7 kcal', recipeTime: '10 min', recipeDesc: 'Bruschetta with tomatoes and tuna'},
]


const Diets = () => {
    const [showRecipe, setShowRecipe] = useState(false);

    const openRecipe = () => {
        setShowRecipe(prev => !prev);
    }

    const recipeComponent = recipes.map((recipe) => 
    <SwiperSlide>
        <RecipeWrap key={recipe.id}>
            <RecipeImage src={recipe.recipeImage}/>
            <RecipeInfoWrap>
                <RecipeBurnImage src={Burn}/>
                <RecipeCalories>{recipe.recipeCalorie}</RecipeCalories>
                <RecipeTimerImage src={TimerCook}/>
                <RecipeTime>{recipe.recipeTime}</RecipeTime>
            </RecipeInfoWrap>
            <RecipeDesc>{recipe.recipeDesc}</RecipeDesc>
        </RecipeWrap>
    </SwiperSlide>    
    )   

    return (
        <>
        <Recipe showRecipe={showRecipe} setShowRecipe={setShowRecipe}/>
          <Container>
                <MainBar>
                    <Title>Diet Plan</Title>
                </MainBar>
                <SecondBar>
                    <SecondTitle>Try, our tasty recipes ! </SecondTitle>
                    <SubTitle>Check menu</SubTitle>
                </SecondBar>
                <RecipesBlock>
                    <TextInfo onClick={() => openRecipe()}>Fast and easy</TextInfo>
                    <Swiper 
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {recipeComponent}
                    </Swiper>
                </RecipesBlock>
          </Container>
        </>
    )
}

export default Diets
