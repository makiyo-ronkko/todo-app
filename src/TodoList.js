import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, // return existing todos
          task: updatedTask, // update to new todo
        };
      }
      return todo; //return todo unchanged
    });
    this.setState({
      todos: updatedTodos,
    });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, // return existing todos
          isCompleted: !todo.isCompleted, // update completed status
        };
      }
      return todo; //return todo unchanged
    });
    this.setState({
      todos: updatedTodos,
    });
  }

  render() {
    const renderTodos = this.state.todos.map((todo) => {
      return (
        <Todo
          id={todo.id}
          key={todo.id}
          task={todo.task}
          isCompleted={todo.isCompleted}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      ); //removeTodo={()=>remove}
    });

    return (
      <div className='TodoList'>
        <h1>
          REACT TODO LIST
          <span>A Simple React Todo List App</span>
        </h1>
        <ul>{renderTodos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
