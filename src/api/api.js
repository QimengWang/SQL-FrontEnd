import axios from 'axios'

axios.defaults.baseURL = '/api';

// For student:
export function stuLogin(stu) {
  return axios.post('/api/student/sign/',{studentid:stu.id, password:stu.password});
}

export function personalInfo() {
  return axios.get('/api/PersonalInformation/');
}

export function classTable() {
  return axios.get('/api/student/classtable/');
}

export function selectCourse(action,info) {
  if(action === 'list_course') {
    return axios.get(`/api/student/select_course/?action=${action}`);
  }
  if(action === 'select_course') {
    return axios.post('/api/student/select_course/',{action:action, selectkh:info});
  }
  if(action === 'list_selected_course') {
    return axios.get(`/api/student/select_course/?action=${action}`);
  }
  if(action === 'del_course') {
    return axios.post('/api/student/select_course/',{action:action, courseid:info});
  }
}

export function getGrades() {
  return axios.get('/api/student/list_grade/');
}

export function verifyOldPwd(d) {
  return axios.post('/api/student/password/verify',{oldpassword: d});
}

export function changePassword(data) {
  return axios.post('/api/student/password/alter',{newpassword: data.newPwd, newpwdagain: data.checkNewPwd});
}

export function getAllGrade() {
  return axios.get('/api/student/list_grade/tendance');
}

// For teacher:
export function teaLogin(tea) {
  return axios.post('/api/teacher/sign/',{teacherid:tea.id, password:tea.password});
}

export function tPersonalInfo() {
  return axios.get('/api/teacher/PersonalInformation/');
}

export function gradeManage(action,data) {
  if(action === 'list_my_course') {
    return axios.get(`/api/teacher/GradeManage/?action=${action}`);
  }
  if(action === 'list_students') {
    return axios.post('/api/teacher/GradeManage/',{action:action, kh:data});
  }
  if(action === 'post_grade') {
    return axios.post('/api/teacher/GradeManage/',{action:action, xh:data.xh, kh:data.kh, zpcj:data.zpcj});
  }
  if(action === 'grade_distribution') {
    return axios.post('/api/teacher/GradeManage/', {action:action, kh: data});
  }
}

export function verifyPwd(d) {
  return axios.post('/api/teacher/password/verify',{oldpassword: d});

}

export function changeTeaPassword(data) {
  return axios.post('/api/teacher/password/alter',{newpassword: data.newPwd, newpwdagain: data.checkNewPwd});
}

//For manager
export function manLogin(manager) {
  return axios.post('/api/admin/sign/',{adminId:manager.id, password:manager.password});
}

export function mPersonalInfo() {
  return axios.get('/api/admin/PersonalInformation/');
}

export function listStudents(action, data) {
  if(action === 'list_students') {
    return axios.get(`/api/admin/student_info/?action=${action}`)
  }
  if(action === 'alter_info') {
    return axios.post('/api/admin/student_info/',{action: action, studentid: data.studentId, newdata: data.newData});
  }
  if(action === 'add_student') {
    return axios.post('/api/admin/student_info/',{action: action, data: data});
  }
  if(action === 'del_student') {
    return axios.post('/api/admin/student_info/',{action: action, studentid: data.studentId});
  }
}

export function listTeachers(action, data) {
  if(action === 'list_teachers') {
    return axios.get(`/api/admin/teacher_info/?action=${action}`)
  }
  if(action === 'alter_info') {
    return axios.put('/api/admin/teacher_info/',{action: action, teacherid: data.teacherId, newdata: data.newData});
  }
  if(action === 'add_teacher') {
    return axios.post('/api/admin/teacher_info/',{action: action, data: data});
  }
  if(action === 'del_teacher') {
    return axios.post('/api/admin/teacher_info/',{action: action, teacherid: data.teacherId});
  }
}

export function listCourses(action, data) {
  if(action === 'add_course') {
    return axios.post('/api/admin/course_info/',{action: action, data: data});
  }
  if(action === 'del_course') {
    return axios.post('/api/admin/course_info/',{action: action, courseid: data});
  }
  if(action === 'list_course') {
    return axios.post('/api/admin/course_info/',{action: action, yx:data});
  }
  if(action === 'alter_info') {
    return axios.put('/api/admin/course_info/',{action: action, courseid: data.kh, newdata: data.newData});
  }
}

export function getDepartment(action) {
  return axios.post('/api/admin/yx_info/',{action: action});
}

export function getTerms(action) {
  return axios.get(`/api/admin/term/?action=${action}`);
}

export function setTerm(action, data) {
  return axios.post('/api/admin/term/',{action: action, curterm: data});
}

export function addTerm(action, data) {
  return axios.post('/api/admin/term/',{action: action, newterm: data});
}

export function getCurTerm(action) {
  return axios.get(`/api/admin/term/?action=${action}`);
}
