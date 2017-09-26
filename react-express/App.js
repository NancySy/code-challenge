import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from './todoListRedux';
import List from './List';
import Input from './Input';
import Title from './Title';

const mapStateToProps = state => ({
  todos: state.todos
});

class App extends Component {
  onAddTodo = text => {
    const { dispatch } = this.props;

    dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    const { dispatch } = this.props;

    dispatch(actionCreators.remove(index));
  };

  render() {
    const { todos } = this.props;

    return (
      <div style={styles.container}>
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onClickItem={this.onRemoveTodo} />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
};

export default connect(mapStateToProps)(App);
