import React from 'react';
import './RecipeStep.css';

function RecipeStepList(props) {
    // Create the list items using map
    const recipeStepsListItems = props.recipeSteps.map((recipeStep, index) => {
        return (
            <li>    
                {recipeStep.steps}
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ol>
            { recipeStepsListItems }
        </ol>
    );
}

export default RecipeStepList;