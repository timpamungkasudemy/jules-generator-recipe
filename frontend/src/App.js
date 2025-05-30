import React, { useState } from 'react';
import './App.css';
import IngredientInput from './IngredientInput';
import RecipeDisplay from './RecipeDisplay';

function App() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState('');

  const clearIngredientsHandler = () => {
    setRecipe(null);
    setError('');
  };

  const findRecipeHandler = async (currentIngredients) => {
    setError('');
    setRecipe(null);
    if (currentIngredients.length === 0) {
      setError("Please add some ingredients first.");
      return;
    }
    try {
      // Assuming the backend is running on port 5000
      const response = await fetch('http://localhost:5000/suggest-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: currentIngredients }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If backend returns an error (e.g., 400, 404, 500)
        // data might contain an 'error' or 'message' field
        const errorMsg = data.error || data.message || \`Error: \${response.status}\`;
        setError(errorMsg);
        setRecipe({ error: errorMsg }); // Pass error to RecipeDisplay
      } else {
        setRecipe(data);
      }
    } catch (err) {
      console.error("Failed to fetch recipe:", err);
      const errorMsg = "Failed to connect to the recipe server. Please ensure it's running.";
      setError(errorMsg);
      setRecipe({ error: errorMsg }); // Pass error to RecipeDisplay
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Suggester</h1>
      </header>
      <main>
        <IngredientInput
          onFindRecipe={findRecipeHandler}
          onClearIngredients={clearIngredientsHandler}
        />
        {error && <p style={{color: 'red'}}>{error}</p>}
        <RecipeDisplay recipe={recipe} />
      </main>
    </div>
  );
}

export default App;
