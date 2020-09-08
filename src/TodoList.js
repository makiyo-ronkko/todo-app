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
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  render() {
    const renderTodos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
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
