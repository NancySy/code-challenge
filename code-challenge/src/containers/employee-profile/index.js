import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { filter } from 'graphql-anywhere';
import EmployeeInfoMutations from '../../components/employee-profile-info';
import EmployeeProfileHeader from '../../components/employee-profile-header';

class Profile extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      Employee: PropTypes.object
    }).isRequired
  };
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>;
    }

    if (this.props.data.error) {
      return <div>An unexpected error occurred</div>;
    }

    const emp = this.props.data.Employee;

    return (
      <div>
        <EmployeeProfileHeader
          employee={filter(EmployeeProfileHeader.fragments.employee, emp)}
        />
        <EmployeeInfoMutations
          employee={filter(EmployeeInfoMutations.fragments.employee, emp)}
          handleCancel={this.goToHomePage}
          afterChange={this.goToHomePage}
        />
      </div>
    );
  }

  goToHomePage = () => {
    this.context.router.history.push('/');
  };
}

const EmployeeQuery = gql`query EmployeeQuery($id: Int!) {
    Employee(id: $id) {
      ... EmployeeDisp
      ... EmployeeDispHeader
    }
  }
  ${EmployeeProfileHeader.fragments.employee}
  ${EmployeeInfoMutations.fragments.employee}
`;

const EmployeeProfile = graphql(EmployeeQuery, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.employeeId
    }
  })
})(withRouter(Profile));

export default EmployeeProfile;
