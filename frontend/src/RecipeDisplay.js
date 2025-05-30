import React from 'react';

function RecipeDisplay({ recipe }) {
  // Use a consistent root container for styling
  return (
    <div className="RecipeDisplay-container">
      {!recipe ? (
        <p>Enter ingredients and click "Find Recipe" to see a suggestion!</p>
      ) : recipe.message ? (
        <p className="info-message">{recipe.message}</p> // For 'not found' messages
      ) : recipe.error ? (
        <p className="error-message">{recipe.error}</p> // For error messages
      ) : (
        <>
          <h3>Suggested Recipe:</h3>
          <h4>{recipe.name}</h4>
          <p>
            <strong>Needed Ingredients:</strong>
            {Array.isArray(recipe.needed_ingredients) ? recipe.needed_ingredients.join(', ') : 'Not specified'}
          </p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </>
      )}
    </div>
  );
}

export default RecipeDisplay;
