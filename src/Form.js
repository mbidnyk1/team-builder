import React from 'react';

function Form(props) {
    return (
    <form onSubmit={props.onFormSubmit}>
        <label> First Name: 
        <input
            onChange={props.onInputChange}
            value={props.formValues.fname}
            name='fname'
            type='text'
            />
        </label>
        <label> Last Name: 
        <input
            onChange={props.onInputChange}
            value={props.formValues.lname}
            name='lname'
            type='text'
            />
        </label>
        <label> Email: 
        <input
            onChange={props.onInputChange}
            value={props.formValues.email}
            name='email'
            type='text'
            />
        </label>
        <label> Role: 
        <input
            onChange={props.onInputChange}
            value={props.formValues.role}
            name='role'
            type='text'
            />
        </label>
        <input type='submit' />
    </form>
    )
}

export default Form;