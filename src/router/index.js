import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import GroupsView from '../views/GroupsView.vue'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' },
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
      meta: { title: 'Experience' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: { title: 'Projects' },
    },
    {
      path: '/groups',
      name: 'groups',
      component: GroupsView,
      meta: { title: 'Groups' },
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: { title: 'Blog' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'auto' };
  }
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | Joel McCandless` : 'Joel McCandless'
})

export default router
