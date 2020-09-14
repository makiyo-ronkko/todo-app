import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false }); // assign id and completed
    this.setState({ task: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='NewTodoForm'>
        <label htmlFor='task'>Enter your new todo</label>
        <input
          type='text'
          placeholder='New todo'
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}
export default NewTodoForm;
