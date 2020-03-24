import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Form from './Form';

const teamMemberList = [
  {id : uuid(), fname: 'Luke', lname: 'Darwin', email:'lukeyd@gmail.com', role:'backend engineer'}
];
function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList);
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    email: '',
    role: '',
  })
  const onInputChange = event => {
    const inputThatChanged = event.target.name;
    const newValueForInput = event.target.value;
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }
  const onFormSubmit = event => {
    event.preventDefault();
    const newTeamMember = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      role: formValues.role,
    }
    setTeamMembers([...teamMembers, newTeamMember])
  }
  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />    

      <h3>Team Members: </h3>
      {
        teamMembers.map( tm => <div key={tm.id}> {tm.fname} {tm.lname} {tm.email} {tm.role}</div>)
      }
    </div>
  )
}

export default App;
