import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ResearchView from '../views/ResearchView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import GroupsView from '../views/GroupsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },
    {
      path: '/research',
      name: 'research',
      component: ResearchView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/groups',
      name: 'groups',
      component: GroupsView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0, behavior: 'auto' };
  }
})

export default router
