import React, { Component } from 'react';

class AddEmployee extends Component {
  addEmployee = () => {
    this.props.cnt.history.push('/create');
  };
  render() {
    return (
      <img
        alt=""
        onClick={this.addEmployee}
        src="/resource/image/icon/add.png"
        style={{
          cursor: 'pointer',
          position: 'absolute',
          marginLeft: '80%'
        }}
        height="40"
      />
    );
  }
}

export default AddEmployee;
