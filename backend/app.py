from flask import Flask, request, jsonify
from flask_cors import CORS # Import CORS
from recipe_logic import find_recipe

app = Flask(__name__)
# Initialize CORS, allowing requests from http://localhost:3000 (React dev server)
CORS(app, resources={r"/suggest-recipe": {"origins": "http://localhost:3000"}})

@app.route('/suggest-recipe', methods=['POST'])
def suggest_recipe_api():
    data = request.get_json()
    if not data or 'ingredients' not in data:
        return jsonify({'error': 'Missing ingredients field in JSON payload'}), 400

    ingredients = data['ingredients']
    if not isinstance(ingredients, list):
        return jsonify({'error': 'Ingredients should be a list'}), 400

    # No need to check for empty ingredients list here,
    # find_recipe can handle it and return a specific message if desired.
    # Let frontend decide if it wants to send empty list or not.

    result = find_recipe(ingredients)

    # Based on find_recipe, result will have "message" for no recipe, or "name" for found.
    if "name" in result:
        return jsonify(result), 200 # Recipe found
    else:
        # This covers "No recipe found" or any other info messages from find_recipe
        return jsonify(result), 404 # Not Found (or 200 if we prefer to always return 200 with a message)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
