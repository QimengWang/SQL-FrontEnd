import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home';
import Login from '../components/Login';
import SelectCourse from "../components/SelectCourse";
import PersonalInformation from "../components/PersonalInformation";
import Transcript from "../components/Transcript";

import tHome from '../components/tHome';
import tPersonalInformation from '../components/tPersonalInformation';
import GradeManagement from '../components/GradeManagement';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        // for student:
        {
          path: '/SelectCourse',
          name: 'SelectCourse',
          component: SelectCourse
        },
        {
          path: '/PersonalInformation',
          name: 'PersonalInformation',
          component: PersonalInformation
        },
        {
          path: '/Transcript',
          name: 'Transcript',
          component: Transcript
        }
      ]
    },
    // for teacher:
    {
      path: '/tHome',
      name: 'tHome',
      component: tHome,
      children: [
        {
          path: '/tPersonalInformation',
          name: 'tPersonalInformation',
          component: tPersonalInformation
        },
        {
          path: '/GradeManagement',
          name: 'GradeManagement',
          component: GradeManagement
        }
      ]
    },
  ]
})
