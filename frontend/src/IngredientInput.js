import React, { useState } from 'react';

function IngredientInput({ onFindRecipe, onClearIngredients }) {
  const [inputValue, setInputValue] = useState(''); // For the text input field
  const [currentIngredients, setCurrentIngredients] = useState([]);

  const handleAddIngredient = () => {
    if (inputValue.trim() !== '') {
      const newIngredient = inputValue.trim().toLowerCase();
      // Prevent adding duplicate ingredients
      if (!currentIngredients.includes(newIngredient)) {
        setCurrentIngredients([...currentIngredients, newIngredient]);
      }
      setInputValue(''); // Clear input field after adding
    }
  };

  const handleRemoveIngredient = (ingredientToRemove) => {
    setCurrentIngredients(currentIngredients.filter(ingredient => ingredient !== ingredientToRemove));
  };

  const handleFind = () => {
    onFindRecipe(currentIngredients); // Send the list to parent for API call
  };

  const handleClear = () => {
    setCurrentIngredients([]);
    onClearIngredients(); // Notify parent to clear recipe display
    setInputValue('');
  };

  // Allow adding ingredient by pressing Enter key
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddIngredient();
    }
  };

  return (
    <div className="ingredient-input-container">
      <h3>Enter Your Ingredients:</h3>
      <div className="ingredient-adder">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="e.g., tomatoes"
        />
        <button onClick={handleAddIngredient}>Add Ingredient</button>
      </div>

      {currentIngredients.length > 0 && (
        <div className="ingredients-list">
          <h4>Current Ingredients:</h4>
          <table>
            <tbody>
              {currentIngredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-item">
                  <td>{ingredient}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveIngredient(ingredient)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="action-buttons">
        <button onClick={handleFind} disabled={currentIngredients.length === 0}>
          Find Recipe
        </button>
        <button onClick={handleClear} disabled={currentIngredients.length === 0}>
          Clear All Ingredients
        </button>
      </div>
    </div>
  );
}

export default IngredientInput;
