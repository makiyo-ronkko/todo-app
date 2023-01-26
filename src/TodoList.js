import React, { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { Todo } from './Todo';
import './TodoList.css';

export const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const create = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const remove = (id) => {
		setTodos(todos.filter((t) => t.id !== id));
	};

	const update = (id, updatedTask) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo, // return existing todos
					task: updatedTask, // update to new todo
				};
			}
			return todo; //return todo unchanged
		});
		setTodos(updatedTodos);
	};

	const toggleCompletion = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo, // return existing todos
					isCompleted: !todo.isCompleted, // update completed status
				};
			}
			return todo; //return todo unchanged
		});

		setTodos(updatedTodos);
	};

	const renderTodos = () =>
		todos.map((todo) => {
			return (
				<Todo
					id={todo.id}
					key={todo.id}
					task={todo.task}
					isCompleted={todo.isCompleted}
					removeTodo={remove}
					updateTodo={update}
					toggleTodo={toggleCompletion}
				/>
			); //removeTodo={()=>remove}
		});

	return (
		<div className='TodoList'>
			<h1>
				REACT TODO LIST
				<span>A Simple React Todo List App</span>
			</h1>
			<ul>{renderTodos()}</ul>
			<NewTodoForm createTodo={create} />
		</div>
	);
};
