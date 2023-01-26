import React, { useState } from 'react';
import './Todo.css';

export const Todo = ({
	id,
	task,
	isCompleted,
	removeTodo,
	updateTodo,
	toggleTodo,
}) => {
	const [isEditing, setIsEditing] = useState(false); // to toggle edit form
	const [todo, setTodo] = useState({ task }); // passing <Task task={todo.task}> from TodoList

	const handleRemove = () => {
		removeTodo(id);
	};

	const toggleForm = () => {
		setIsEditing(!isEditing);
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		// take new task data and pass up to parent
		// id is accessing from TodoList and task is updated task
		updateTodo(id, todo);
		setIsEditing(false);
	};

	const handleChange = (e) => {
		setTodo({ task: e.target.value });
	};

	const handleToggle = () => {
		toggleTodo(id);
	};

	let result;
	if (isEditing) {
		result = (
			<div className='Todo'>
				<form onSubmit={handleUpdate} className='Todo-edit-form'>
					<input
						type='text'
						value={todo.task}
						name='task'
						onChange={handleChange}
					/>
					<div className='Todo-buttons'>
						<button>Save</button>
					</div>
				</form>
			</div>
		);
	} else {
		result = (
			<div className='Todo'>
				<li
					className={isCompleted ? 'Todo-task isCompleted' : 'Todo-task'}
					onClick={handleToggle}
				>
					{todo.task}
				</li>
				<div className='Todo-buttons'>
					<button onClick={toggleForm}>
						<i className='fas fa-pen' />
					</button>
					<button onClick={handleRemove}>
						<i className='fas fa-trash' />
					</button>
				</div>
			</div>
		);
	}
	return result;
};

export default Todo;
