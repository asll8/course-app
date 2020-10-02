import React from 'react';

import './CourseList.css'

const CourseList = props => {

    return (
        <ul className = 'course-list'>
            {props.lists.map(list =>{
                return <li key = {list.id}> {list.text}</li>
            })}
        </ul>
    )
}

   

export default CourseList;
