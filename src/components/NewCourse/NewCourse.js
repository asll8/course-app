import React, {useState} from 'react';

import './NewCourse.css';

const NewCourse = props => {
    const [enteredText, setEnteredText] = useState('');

    const addCourseHandler = event => {
        event.preventDefault();
        
        const newCourse = {
            id: Math.random().toString(),
            text: enteredText
        };

        setEnteredText('');

        props.onAddCourse(newCourse);
    };
    
    const textChangeHandler = event =>{

        setEnteredText(event.target.value);
    }

    return (
        <form className = 'new-course' onSubmit = {addCourseHandler}>
            <input type = 'text' value = {enteredText} onChange = {textChangeHandler}/>
            <button type= 'submit'>Add New Course</button>
        </form>
    )
} 

export default NewCourse;