import React, { Component } from 'react';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Title = styled.div`
  color: #7f7f7f;
  font-size: 32px;
  font-weight: 300;
  max-width: 400px;
  margin-top: 50px;
`;

class EmployeeProfileHeader extends Component {
  static fragments = {
    employee: gql`
      fragment EmployeeDispHeader on Employee {
        firstName
        lastName
      }
    `
  };

  static propTypes = {
    employee: propType(EmployeeProfileHeader.fragments.employee).isRequired
  };

  render() {
    return (
      <div className="w-100 flex justify-center">
        <Title>
          {this.props.employee.firstName} {this.props.employee.lastName} Profile
        </Title>
      </div>
    );
  }
}

export default EmployeeProfileHeader;
