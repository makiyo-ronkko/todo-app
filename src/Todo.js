import React, { Component } from 'react';

class Todo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button>Edit</button>
        <button>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
