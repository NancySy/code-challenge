import React, { Component } from 'react';
import './index.css';

class DisplayData extends Component {
  goToProfile = employeeId => {
    this.props.cnt.history.push('/view/' + employeeId);
  };
  render() {
    const rows = [];
    this.props.employees.forEach(employee => {
      rows.push(
        <tr key={employee.id} onClick={() => this.goToProfile(employee.id)}>
          {' '}
          <td>
            {employee.firstName} {employee.lastName}{' '}
          </td>
          <td>{employee.title}</td>
          <td>{employee.department}</td>
          <td>{employee.country}</td>{' '}
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Department</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default DisplayData;
