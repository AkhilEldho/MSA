import './IngredientList.css'
import React from 'react';

function IngredientList(props) {
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index} 
                className={ ingredient.prepared ? 'prepared' : '' }

                // TODO: Add onClick event
                //adding the onClick attribute to each item
                //so when ingredient is clicked it triggers the function
                onClick={ () => props.ingredientSet(index) }
            >
                { ingredient.name }
            </li>
        );
    });

    return (
        <ul>
            { ingredientListItems }
        </ul>
    );
}

export default IngredientList;