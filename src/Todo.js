import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false, // to toggle edit form
      task: this.props.task, // passing <Task task={todo.task}> from TodoList
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    // take new task data and pass up to parent
    // id is accessing from TodoList and task is updated task
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div classNames='Todo'>
          <form onSubmit={this.handleUpdate} className='Todo-edit-form'>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
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
            className={
              this.props.isCompleted ? 'Todo-task isCompleted' : 'Todo-task'
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className='Todo-buttons'>
            <button onClick={this.toggleForm}>
              <i className='fas fa-pen' />
            </button>
            <button onClick={this.handleRemove}>
              <i className='fas fa-trash' />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
