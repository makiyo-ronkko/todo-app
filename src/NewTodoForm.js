import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

export const NewTodoForm = ({ createTodo }) => {
	const [newTodo, setNewTodo] = useState({ task: '', name: '' });

	const handleChange = (e) => {
		setNewTodo({ [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		createTodo({ ...newTodo, id: uuid(), completed: false }); // assign id and completed
		setNewTodo({ task: '' });
	};

	return (
		<form onSubmit={handleSubmit} className='NewTodoForm'>
			<label htmlFor='task'>Enter your new todo</label>
			<input
				type='text'
				placeholder='New todo'
				id='task'
				name='task'
				value={newTodo.task}
				onChange={handleChange}
			/>
			<button id='formBtn'>Add</button>
		</form>
	);
};
