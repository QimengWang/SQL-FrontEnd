import axios from 'axios'

axios.defaults.baseURL = '/api';

// For student:
export function stuLogin(stu) {
  return axios.post('/api/student/sign/',{studentid:stu.id, password:stu.password});
}

export function personalInfo() {
  return axios.get('/api/PersonalInformation/');
}

export function selectCourse(action,info) {
  if(action === 'list_course') {
    return axios.get(`/api/student/select_course/?action=${action}`)
  }
  if(action === 'select_course') {
    return axios.post('/api/student/select_course/',{action:action, selectkh:info})
  }
  if(action === 'list_selected_course') {
    return axios.get(`/api/student/select_course/?action=${action}`)
  }
  if(action === 'del_course') {
    return axios.post('/api/student/select_course/',{action:action, courseid:info})
  }
}

export function getGrades() {
  return axios.get('/api/student/list_grade/')
}

// For teacher:
export function teaLogin(tea) {
  return axios.post('/api/teacher/sign/',{teacherid:tea.id, password:tea.password});
}

export function tPersonalInfo() {
  return axios.get('/api/teacher/PersonalInformation/')
}

export function gradeManage(action,kh) {
  if(action === 'list_my_course'){
    return axios.get(`/api/teacher/GradeManage/?action=${action}`);
  }
  if(action === 'list_students'){
    return axios.post('/api/teacher/GradeManage/',{action:action, kh:kh});
  }
}
