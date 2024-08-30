import { createRouter, createWebHistory } from 'vue-router';
import RecipeDetail from '../components/RecipeDetail.vue';
import RecipeList from '../components/RecipeList.vue';

const routes = [
  {
    path: '/',
    name: 'RecipeList',
    component: RecipeList,
  },
  {
    path: '/recipe/:id',
    name: 'RecipeDetail',
    component: RecipeDetail,
    props: route => ({ id: Number(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
