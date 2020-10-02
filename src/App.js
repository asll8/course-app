import React, { useState } from 'react';

import CourseList from './components/CourseList/CourseList';

import './App.css';
import NewCourse from './components/NewCourse/NewCourse';

const App = () => {
  const [courseList, setCourseList] = useState([
    {id: 'c1', text: 'Python 101'},
    {id: 'c2', text: 'Introduction to ML Algorithms'},
    {id: 'c3', text: 'Statistics'},
    {id: 'c4', text: 'Data Structures'},
    {id: 'c5', text: 'Object-Oriented Programming'}
  ]);

  const addNewCourseHandler = newCourse => {
    setCourseList(prevCourseList => prevCourseList.concat(newCourse));

  };

  return (
    <div className= 'course-list'>
      <h2>Course List</h2>
      <NewCourse onAddCourse = {addNewCourseHandler}/>
      <br/>
      <CourseList lists = {courseList}/>    
    </div>

  ); 
  
};

export default App;
