import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home';
import Login from '../components/Login';
import SelectCourse from "../components/SelectCourse";
import PersonalInformation from "../components/PersonalInformation";
import Transcript from "../components/Transcript";
import classTable from "../components/classTable";

import tHome from '../components/tHome';
import tPersonalInformation from '../components/tPersonalInformation';
import GradeManagement from '../components/GradeManagement';

import mHome from '../components/mHome';
import mPersonalInformation from '../components/mPersonalInformation';
import StudentManagement from "../components/StudentManagement";
import TeacherManagement from "../components/TeacherManagement";
import CourseManagement from "../components/CourseManagement";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    // for student:
    {
      path: '/Home',
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
        },
        {
          path: '/classTable',
          name: 'classTable',
          component: classTable
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
    // for manager:
    {
      path: '/mHome',
      name: 'mHome',
      component: mHome,
      children: [
        {
          path: '/mPersonalInformation',
          name: 'mPersonalInformation',
          component: mPersonalInformation
        },
        {
          path: '/StudentManagement',
          name: 'StudentManagement',
          component: StudentManagement
        },
        {
          path: '/TeacherManagement',
          name: 'TeacherManagement',
          component: TeacherManagement
        },
        {
          path: '/CourseManagement',
          name: 'CourseManagement',
          component: CourseManagement
        }
      ]
    },
  ]
})
