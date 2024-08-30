<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["searchQuery", "filterCategory"]),
    ...mapGetters(["filteredRecipes"]),
  },
  methods: {
    updateSearch(event) {
      this.$store.commit("setSearchQuery", event.target.value);
    },
    updateFilter(event) {
      this.$store.commit("setFilterCategory", event.target.value);
    },
  },
  mounted() {
    this.$store.dispatch("fetchRecipes");
  },
};
</script>


<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Recipe List</h1>
    <input
      v-model="searchQuery"
      @input="updateSearch"
      type="text"
      placeholder="Search recipes..."
      class="p-2 border rounded mb-4"
    />
    <select
      v-model="filterCategory"
      @change="updateFilter"
      class="p-2 border rounded mb-4"
    >
      <option value="">All Categories</option>
      <option value="Dessert">Dessert</option>
      <option value="Salad">Salad</option>
      <option value="Soup">Soup</option>
      <option value="Breakfast">Breakfast</option>
    </select>
    <div
      v-if="filteredRecipes.length"
      class="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <div
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        class="border p-4 rounded"
      >
        <h2 class="text-lg font-bold">{{ recipe.name }}</h2>
        <p>{{ recipe.description }}</p>
        <router-link :to="`/recipe/${recipe.id}`" class="text-blue-500"
          >View Details</router-link
        >
      </div>
    </div>
    <div v-else>No recipes found.</div>
  </div>
</template>


