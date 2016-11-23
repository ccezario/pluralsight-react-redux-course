import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './AjaxStatusActions';

export function loadCoursesSuccess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCoursesSuccess(course){
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCoursesSuccess(course){
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(err => {
      dispatch(ajaxCallError());
      throw(err);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCoursesSuccess(savedCourse)) :
        dispatch(createCoursesSuccess(savedCourse));
    }).catch(err => {
      dispatch(ajaxCallError());
      throw(err);
    });
  };
}
