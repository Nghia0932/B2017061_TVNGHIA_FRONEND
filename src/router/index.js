import {createWebHistory, createRouter} from 'vue-router';
import ContactBook from '../views/ContactBook.vue';
import NotFound from '../views/NotFound.vue';
const routes = [
  {
    path: '/',
    name: 'contactbook',
    component: ContactBook,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
