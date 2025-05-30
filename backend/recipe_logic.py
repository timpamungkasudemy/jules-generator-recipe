# Predefined recipes
# Each recipe is a dictionary with 'ingredients' (a set for easy comparison)
# and 'instructions'.
RECIPES = {
    "Pasta Aglio e Olio": {
        "ingredients": {"pasta", "garlic", "olive oil", "chili flakes"},
        "instructions": "1. Cook pasta. 2. Sauté garlic and chili flakes in olive oil. 3. Toss pasta with oil mixture. Serve hot."
    },
    "Tomato Soup": {
        "ingredients": {"tomatoes", "onion", "garlic", "vegetable broth", "cream"},
        "instructions": "1. Sauté onion and garlic. 2. Add chopped tomatoes and broth, simmer. 3. Blend until smooth. 4. Stir in cream. Serve warm."
    },
    "Guacamole": {
        "ingredients": {"avocado", "lime", "onion", "cilantro", "jalapeno"},
        "instructions": "1. Mash avocados. 2. Mix in finely chopped onion, cilantro, and jalapeno. 3. Squeeze in lime juice. 4. Season with salt. Serve with chips."
    },
    "Cheese Omelette": {
        "ingredients": {"eggs", "cheese", "butter"},
        "instructions": "1. Whisk eggs. 2. Melt butter in a pan. 3. Pour in eggs. 4. Add cheese as eggs set. 5. Fold and cook to desired doneness."
    }
}

def find_recipe(available_ingredients):
    """
    Finds a recipe that can be made with the available ingredients.

    Args:
        available_ingredients (list or set): A list/set of ingredients the user has.

    Returns:
        dict: A dictionary containing the recipe name and instructions if a match is found,
              otherwise a message indicating no recipe was found.
    """
    available_set = set(ingredient.lower() for ingredient in available_ingredients)

    for name, details in RECIPES.items():
        if details["ingredients"].issubset(available_set):
            return {
                "name": name,
                "needed_ingredients": list(details["ingredients"]),
                "instructions": details["instructions"]
            }

    return {"message": "No recipe found with the provided ingredients."}
