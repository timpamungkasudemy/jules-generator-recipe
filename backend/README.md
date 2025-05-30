# Recipe Suggester Backend

This directory contains the Python Flask backend for the Recipe Suggester application.
It provides an API endpoint to suggest recipes based on a list of provided ingredients.

## Setup and Running

1.  **Navigate to the backend directory:**
    \`\`\`bash
    cd backend
    \`\`\`

2.  **Create and activate a virtual environment:**
    On macOS/Linux:
    \`\`\`bash
    python3 -m venv venv
    source venv/bin/activate
    \`\`\`
    On Windows:
    \`\`\`bash
    python -m venv venv
    .\venv\Scripts\activate
    \`\`\`

3.  **Install dependencies:**
    \`\`\`bash
    pip install -r requirements.txt
    \`\`\`

4.  **Run the Flask application:**
    \`\`\`bash
    python app.py
    \`\`\`
    The backend server will start, typically on \`http://localhost:5000\`.

## API Endpoint

### POST /suggest-recipe

*   **Description:** Suggests a recipe based on the provided ingredients.
*   **Request Body (JSON):**
    \`\`\`json
    {
      "ingredients": ["ingredient1", "ingredient2", "..."]
    }
    \`\`\`
*   **Success Response (200 OK):**
    If a recipe is found:
    \`\`\`json
    {
      "name": "Recipe Name",
      "needed_ingredients": ["ingredient1", "garlic", "olive oil"],
      "instructions": "1. Do this. 2. Do that."
    }
    \`\`\`
    If no ingredients are provided or no recipe is found with given ingredients:
    \`\`\`json
    {
      "message": "No recipe found with the provided ingredients."
    }
    \`\`\`
    (Note: The 'no recipe found' message might also come with a 404 status depending on the implementation in app.py)
*   **Error Response (400 Bad Request):**
    If the request payload is malformed (e.g., missing 'ingredients' field or 'ingredients' is not a list):
    \`\`\`json
    {
      "error": "Missing ingredients field in JSON payload"
    }
    \`\`\`
    or
    \`\`\`json
    {
      "error": "Ingredients should be a list"
    }
    \`\`\`

## Predefined Recipes

The recipes are currently hardcoded in \`recipe_logic.py\`. To add or modify recipes, edit the \`RECIPES\` dictionary in this file. Each recipe includes:
*   A set of required ingredients.
*   Instructions for preparation.

Example recipes include:
*   Pasta Aglio e Olio
*   Tomato Soup
*   Guacamole
*   Cheese Omelette

EOL
