import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: 'Walk the fish', id: 1 },
        { task: 'Groom Chickens', id: 2 },
      ],
    };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
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

  render() {
    const renderTodos = this.state.todos.map((todo) => {
      return (
        <Todo
          id={todo.id}
          key={todo.id}
          task={todo.task}
          removeTodo={this.remove}
        />
      ); //removeTodo={()=>remove}
    });

    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{renderTodos}</ul>
      </div>
    );
  }
}

export default TodoList;
