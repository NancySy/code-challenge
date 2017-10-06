import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import DisplayData from '../../components/display-data';
import SearchBox from '../../components/search-box';
import AddEmployee from '../../components/add-employee';

const RetrieveEmployeesQuery = gql`
  query RetrieveEmployeesQuery {
    Employees {
      id
      firstName
      lastName
      prefix
      department
      title
      jobType
      jobDescription
      jobArea
      phone
      email
      picture
      country
      state
      city
      street
    }
  }
`;

class HomeContent extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      Employee: PropTypes.object
    }).isRequired
  };

  search = searchFor => {
    let result = [];
    this.props.data.Employees.forEach(e => {
      if (
        (!isEmpty(e.firstName) &&
          e.firstName.toLowerCase().indexOf(searchFor.toLowerCase()) !== -1) ||
        (!isEmpty(e.lastName) &&
          e.lastName.toLowerCase().indexOf(searchFor.toLowerCase()) !== -1) ||
        (!isEmpty(e.department) &&
          e.department.toLowerCase().indexOf(searchFor.toLowerCase()) !== -1) ||
        (!isEmpty(e.department) &&
          e.country.toLowerCase().indexOf(searchFor.toLowerCase()) !== -1) ||
        (!isEmpty(e.title) &&
          e.title.toLowerCase().indexOf(searchFor.toLowerCase()) !== -1)
      ) {
        result.push(e);
      }
    });
    this.setState({ retrievedData: result });
  };
  state = { retrievedData: '' };
  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>;
    }

    const { router } = this.context;
    if (isEmpty(this.state.retrievedData)) {
      return (
        <div>
          <SearchBox search={this.search} />
          <AddEmployee cnt={router} />
          <DisplayData employees={this.props.data.Employees} />
        </div>
      );
    } else {
      return (
        <div>
          <SearchBox search={this.search} />
          <AddEmployee cnt={router} />
          <DisplayData cnt={router} employees={this.state.retrievedData} />
        </div>
      );
    }
  }
}

const Home = graphql(RetrieveEmployeesQuery, {
  options: ownProps => ({
    variables: {
      name: 'allEmployeesQuery'
    },
    fetchPolicy: true
  })
})(HomeContent);

export default Home;
