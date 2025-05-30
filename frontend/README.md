# Recipe Suggester Frontend

This directory contains the React frontend for the Recipe Suggester application.
It provides a user interface for entering ingredients and viewing suggested recipes fetched from the backend.

## Setup and Running

1.  **Navigate to the frontend directory:**
    \`\`\`bash
    cd frontend
    \`\`\`

2.  **Install dependencies:**
    If you have Yarn installed:
    \`\`\`bash
    yarn install
    \`\`\`
    Or, if you prefer npm:
    \`\`\`bash
    npm install
    \`\`\`

3.  **Run the React development server:**
    If you used Yarn:
    \`\`\`bash
    yarn start
    \`\`\`
    Or, if you used npm:
    \`\`\`bash
    npm start
    \`\`\`
    The application will typically open automatically in your default web browser at \`http://localhost:3000\`.

## Prerequisites

*   Node.js and npm (or Yarn) must be installed.
*   The backend server must be running (usually at \`http://localhost:5000\`) for the frontend to fetch recipe suggestions.

## Features

*   **Ingredient Input:** Allows users to type and add ingredients to a list.
*   **Recipe Search:** Sends the list of ingredients to the backend to find a matching recipe.
*   **Recipe Display:** Shows the name, needed ingredients, and instructions for the suggested recipe.
*   **Error Handling:** Displays messages if no recipe is found, if there's an issue with the input, or if there's a problem connecting to the backend.
*   **Clear Ingredients:** Allows users to clear the current list of ingredients and the displayed recipe.

## Project Structure

*   **\`public/\`**: Contains static assets like \`index.html\`.
*   **\`src/\`**: Contains the React application source code.
    *   **\`App.js\`**: The main application component, manages state and API calls.
    *   **\`IngredientInput.js\`**: Component for user input of ingredients.
    *   **\`RecipeDisplay.js\`**: Component for displaying the recipe.
    *   **\`App.css\`**: Basic styling for the application.
    *   **\`index.js\`**: The entry point for the React application.

## Interacting with the Backend

The frontend makes a \`POST\` request to \`http://localhost:5000/suggest-recipe\` on the backend. The request body is a JSON object containing the list of ingredients, for example:
\`\`\`json
{
  "ingredients": ["tomatoes", "onion", "garlic"]
}
\`\`\`
The backend's response is then displayed to the user.

EOL
