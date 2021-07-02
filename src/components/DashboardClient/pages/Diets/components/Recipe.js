import React, { useRef, useEffect, useCallback} from 'react'
import { useSpring, animated } from 'react-spring';
import Img from '../../../../../images/recipe3.jpg'

import {
    Background,
    RecipeWrapper,
    ImageRecipe,
    NameRecipe,
    DescriptionRecipe
} from './RecipeElements'

const Recipe = ({showRecipe, setShowRecipe}) => {
    const recipeRef = useRef();

    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: showRecipe ? 1 : 0,
        transform: showRecipe ? `translateY(0%)` : `translateY(-100%)`
      });

      const closeRecipe = e => {
        if (recipeRef.current === e.target) {
            setShowRecipe(false);
        }
      };
    
      const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showRecipe) {
            setShowRecipe(false);
            console.log('I pressed');
          }
        },
        [setShowRecipe, showRecipe]
      );
    
      useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );
    return (
        <>
        {showRecipe ? (
            <Background onClick={closeRecipe} ref={recipeRef}>
                <animated.div style={animation}>
                    <RecipeWrapper showRecipe={showRecipe}>
                        <ImageRecipe src={Img}/>
                        <NameRecipe>Zucchini pizzerias with cheese and mushrooms</NameRecipe>
                        <DescriptionRecipe>
                           
Step 1
Heat the oven to 425°. Oil two 12-inch pizza pans or large baking sheets. Press the dough into a 12-inch round, or 9-by-13-inch rectangle, on each prepared pan. Bake until the dough begins to brown, 10 to 15 minutes.

Step 2
Meanwhile, in a large nonstick frying pan, heat 1 tablespoon of the oil over moderately high heat. Add the zucchini and cook, stirring occasionally, until almost tender, about 3 minutes. Transfer to a small bowl. Heat the remaining 2 tablespoons of oil in the same pan. Add the mushrooms, salt, pepper, and thyme and cook, stirring frequently, until the mushrooms are golden, about 5 minutes.

Step 3
Return the zucchini to the pan, add the wine, and simmer, stirring occasionally, until the vegetables are tender and all the wine has evaporated, about 5 minutes more.

Step 4
Spread the vegetable mixture on the partially baked pizza crusts. Sprinkle each with Swiss cheese and Parmesan and bake until the cheese melts, about 10 minutes.   </DescriptionRecipe>
                    </RecipeWrapper>
                </animated.div>
            </Background>
        ) : null}   
        </>
    )
}

export default Recipe
