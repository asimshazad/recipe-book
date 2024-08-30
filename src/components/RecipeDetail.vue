<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Recipe Detail</h1>
    <div class="recipe-detail" v-if="recipe">
      <h2 class="recipe-name">{{ recipe.name }}</h2>
      <p class="text-blue-500 mb-3">{{ recipe.category }}</p>
      <p class="recipe-description">{{ recipe.description }}</p>

      <button
        @click="toggleFavorite"
        :class="{
          'bg-red-500 text-white': isFavorite,
          'bg-gray-200 text-black': !isFavorite,
        }"
        class="px-4 py-2 rounded mt-4"
      >
        <span v-if="isFavorite">Favorited</span>
        <span v-else>Add to Favorite</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      recipe: null,
      isFavorite: false,
    };
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    favoriteRecipes() {
      return this.$store.state.favoriteRecipes;
    },
  },
  methods: {
    toggleFavorite() {
      if (this.isFavorite) {
        this.$store.commit("removeFavoriteRecipe", this.recipe.id);
      } else {
        this.$store.commit("addFavoriteRecipe", this.recipe);
      }
      this.isFavorite = !this.isFavorite;
    },
    fetchRecipe() {
      this.recipe = this.recipes.find((r) => r.id === this.id);
      this.isFavorite = this.favoriteRecipes.some(
        (fav) => fav.id === this.recipe.id
      );
    },
  },
  watch: {
    id: "fetchRecipe",
  },
  created() {
    this.fetchRecipe();
  },
};
</script>

<style scoped>
.recipe-detail {
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #f8fafc;
}
.recipe-name {
  font-size: 1.5rem;
  font-weight: bold;
}
.recipe-description {
  margin: 8px 0;
  font-size: 1rem;
}
</style>
