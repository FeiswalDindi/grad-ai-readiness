import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import SurveyView from '@/views/SurveyView.vue'
import ModuleView from '@/views/ModuleView.vue'
// NEW IMPORTS:
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import TutorDashboard from '@/views/TutorDashboard.vue'
import TutorResources from '@/views/TutorResources.vue'
import TutorStudents from '@/views/TutorStudents.vue'
import TutorSettings from '@/views/TutorSettings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/dashboard', name: 'dashboard', component: DashboardView },
    { path: '/survey', name: 'survey', component: SurveyView },
    { path: '/module', name: 'module', component: ModuleView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/signup', name: 'signup', component: SignupView },
    { path: '/tutor/dashboard', name: 'tutor-dashboard', component: TutorDashboard },
    { path: '/tutor/resources', name: 'tutor-resources', component: TutorResources },
    { path: '/tutor/students', name: 'tutor-students', component: TutorStudents },
    { path: '/tutor/settings', name: 'tutor-settings', component: TutorSettings },
  ],
})

export default router
