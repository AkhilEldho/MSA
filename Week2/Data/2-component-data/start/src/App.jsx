import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle'

// TODO: Import IngredientList
import IngredientList from './IngredientList'

// TODO: Import RecipeStep
import RecipeStep from './RecipeStep'

function App() {
// TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        recipeSteps: [
            { steps: "Add cut potatoes to a pot of heavily salted water."},
            { steps: "Bring pot to a boil."},
            { steps: "Boil the potatoes until fork tender, about 15-20 minutes."},
            { steps: "Strain the potatoes."},
            { steps: "Return potatoes to pot."},
            { steps: "Add butter, cream, salt, and pepper to taste."},
            { steps: "Mash potatoes."},
            { steps: "Reseason and add butter and cream as desired."},
        ]
    };    

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />

            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />

            {/* TODO: Add RecipeStep component */}
            <RecipeStep recipeSteps={recipe.recipeSteps} />

        </article>
    )
}

export default App;
