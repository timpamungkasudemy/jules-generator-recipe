from flask import Flask, request, jsonify
from recipe_logic import find_recipe # Import the new function

app = Flask(__name__)

@app.route('/suggest-recipe', methods=['POST'])
def suggest_recipe_api():
    data = request.get_json()
    if not data or 'ingredients' not in data:
        return jsonify({'error': 'Missing ingredients field in JSON payload'}), 400

    ingredients = data['ingredients']
    if not isinstance(ingredients, list):
        return jsonify({'error': 'Ingredients should be a list'}), 400
    if not ingredients:
        return jsonify(find_recipe([])), 200 # Let find_recipe handle empty list message

    result = find_recipe(ingredients)

    if "message" in result and "No recipe found" in result["message"]:
        return jsonify(result), 404 # Not found
    return jsonify(result), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000) # Specify port for clarity
