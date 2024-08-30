import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [], // All recipes
    favoriteRecipes: [], // User's favorite recipes
    searchQuery: '', // Search query
    filterCategory: '', // Selected category filter
  },
  mutations: {
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
    addFavoriteRecipe(state, recipe) {
      state.favoriteRecipes.push(recipe);
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setFilterCategory(state, category) {
      state.filterCategory = category;
    },
  },
  actions: {
    fetchRecipes({ commit }) {

      const recipes = [
        {
          id: 1,
          name: 'Spaghetti Carbonara',
          description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
          category: 'Dessert',
        },
        {
          id: 2,
          name: 'Chicken Caesar Salad',
          description: 'A fresh salad with grilled chicken, romaine lettuce, croutons, and Caesar dressing.',
          category: 'Salad',
        },
        {
          id: 3,
          name: 'Chocolate Chip Cookies',
          description: 'Delicious homemade cookies filled with gooey chocolate chips.',
          category: 'Dessert',
        },
        {
          id: 4,
          name: 'Beef Tacos',
          description: 'Tacos filled with seasoned ground beef, cheese, lettuce, and salsa.',
          category: 'Dessert',
        },
        {
          id: 5,
          name: 'Margarita Pizza',
          description: 'A simple pizza topped with fresh tomatoes, mozzarella cheese, and basil.',
          category: 'Dessert',
        },
        {
          id: 6,
          name: 'Strawberry Shortcake',
          description: 'A light and fluffy shortcake topped with fresh strawberries and whipped cream.',
          category: 'Dessert',
        },
        {
          id: 7,
          name: 'Mushroom Risotto',
          description: 'Creamy risotto with sautéed mushrooms and parmesan cheese.',
          category: 'Dessert',
        },
        {
          id: 8,
          name: 'Tomato Basil Soup',
          description: 'A warm and comforting soup made with fresh tomatoes and basil.',
          category: 'Soup',
        },
        {
          id: 9,
          name: 'Grilled Cheese Sandwich',
          description: 'A classic sandwich with melted cheese between two slices of buttery grilled bread.',
          category: 'Snack',
        },
        {
          id: 10,
          name: 'Lemon Garlic Shrimp',
          description: 'Shrimp sautéed in a lemon garlic butter sauce, served over pasta or rice.',
          category: 'Dessert',
        },
        {
          id: 11,
          name: 'Avocado Toast',
          description: 'Toasted bread topped with mashed avocado, olive oil, and a sprinkle of sea salt.',
          category: 'Breakfast',
        },
        {
          id: 12,
          name: 'Banana Bread',
          description: 'Moist and flavorful banana bread with a hint of cinnamon.',
          category: 'Dessert',
        },
        {
          id: 13,
          name: 'Greek Salad',
          description: 'A fresh salad with tomatoes, cucumbers, olives, feta cheese, and a lemon-oregano dressing.',
          category: 'Salad',
        },
        {
          id: 14,
          name: 'Chicken Noodle Soup',
          description: 'A comforting soup with tender chicken, egg noodles, and vegetables.',
          category: 'Soup',
        },
        {
          id: 15,
          name: 'Pancakes',
          description: 'Fluffy pancakes served with butter and maple syrup.',
          category: 'Breakfast',
        },
      ];
      
      commit('setRecipes', recipes);
    },
  },
  getters: {
    filteredRecipes(state) {
      let filtered = state.recipes;

      if (state.searchQuery) {
        filtered = filtered.filter(recipe =>
          recipe.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      if (state.filterCategory) {
        filtered = filtered.filter(recipe =>
          recipe.category === state.filterCategory
        );
      }

      return filtered;
    },
  },
})
