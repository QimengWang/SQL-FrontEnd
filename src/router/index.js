import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Login from '../components/Login'
import SelectCourse from "../components/SelectCourse";
import PersonalInformation from "../components/PersonalInformation"
import Transcript from "../components/Transcript";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
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
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
