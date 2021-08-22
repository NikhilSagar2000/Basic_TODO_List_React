import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.empty ? 'red' : 'inherit')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 3px solid ${props => (props.empty ? 'red' :  '#ccc')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none!important;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   & i {
//     display: ${props => props.empty ? 'block' : 'none'};
//     color: red;
//     font-size: 0.7rem;
//   }
// `;

const CourseInput = (props) => {
  const [emptyTextFlag, setEmptyTextFlag] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      // console.log(event.target.value.trim().length);
      setEmptyTextFlag(true);
    } else if (event.target.value.trim().length >= 0) {
      setEmptyTextFlag(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setEmptyTextFlag(true);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${emptyTextFlag && styles.empty}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
        <i>Please enter some text.</i>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
