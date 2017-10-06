import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Button, Profile } from '../styled-division';
import './index.css';

const updateAction = (state, props, context) => {
  return {
    type: 'UPDATE_EMPLOYEE',
    state,
    props
  };
};

export class EmployeeProfileInfo extends Component {
  static fragments = {
    employee: gql`
      fragment EmployeeDisp on Employee {
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
    `
  };

  static propTypes = {
    employee: propType(EmployeeProfileInfo.fragments.employee).isRequired,
    handleCancel: PropTypes.func.isRequired,
    afterChange: PropTypes.func.isRequired,
    dispatch: PropTypes.func
  };

  state = {
    firstName: this.props.employee.firstName,
    lastName: this.props.employee.lastName,
    prefix: this.props.employee.prefix,
    department: this.props.employee.department,
    title: this.props.employee.title,
    jobType: this.props.employee.jobType,
    jobDescription: this.props.employee.jobDescription,
    jobArea: this.props.employee.jobArea,
    phone: this.props.employee.phone,
    email: this.props.employee.email,
    picture: this.props.employee.picture,
    country: this.props.employee.country,
    state: this.props.employee.state,
    city: this.props.employee.city,
    street: this.props.employee.street
  };

  render() {
    return (
      <div className="w-100 pa4 flex justify-center">
        <Profile style={{ maxWidth: 450 }}>
          <label className="label"> Prefix </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.prefix}
            placeholder="Mr./Ms./Mrs."
            onChange={e => this.setState({ prefix: e.target.value })}
          />
          <br />
          <label className="label"> First Name </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <br />
          <label className="label"> Last Name </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <br />
          <label className="label"> Title </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.title}
            placeholder="Title"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <br />
          <label className="label"> Department </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.department}
            placeholder="Department"
            onChange={e => this.setState({ department: e.target.value })}
          />
          <br />
          <label className="label"> Job Type </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.jobType}
            placeholder="Job Type"
            onChange={e => this.setState({ jobType: e.target.value })}
          />
          <br />
          <label className="label"> Job Description </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.jobDescription}
            placeholder="Job Description"
            onChange={e => this.setState({ jobDescription: e.target.value })}
          />
          <br />
          <label className="label"> Job Area </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.jobArea}
            placeholder="Job Area"
            onChange={e => this.setState({ jobArea: e.target.value })}
          />
          <br />
          <label className="label"> Phone </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.phone}
            placeholder="Phone Number"
            onChange={e => this.setState({ phone: e.target.value })}
          />
          <br />
          <label className="label"> Email </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.email}
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <label className="label"> Country </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.country}
            placeholder="Country"
            onChange={e => this.setState({ country: e.target.value })}
          />
          <br />
          <label className="label"> State </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.state}
            placeholder="State"
            onChange={e => this.setState({ state: e.target.value })}
          />
          <br />
          <label className="label"> City </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.city}
            placeholder="City"
            onChange={e => this.setState({ city: e.target.value })}
          />
          <br />
          <label className="label"> Street </label>
          <input
            className="w-100 pa3 mv2 inputText"
            value={this.state.street}
            placeholder="Street"
            onChange={e => this.setState({ street: e.target.value })}
          />
          <br />
          <div className="flex justify-between">
            <Button onClick={this.props.handleCancel}>Cancel</Button>
            {this.enableUpdate() ? (
              <Button
                save
                onClick={() =>
                  this.props.dispatch(
                    updateAction(this.state, this.props, this.context)
                  )}
              >
                Update
              </Button>
            ) : (
              <Button disabled>Update</Button>
            )}
          </div>
        </Profile>
      </div>
    );
  }

  enableUpdate = () => {
    return (
      this.state.firstName &&
      this.state.lastName &&
      this.state.prefix &&
      this.state.title &&
      this.state.department &&
      this.state.jobType &&
      this.state.jobArea &&
      this.state.jobDescription &&
      this.state.phone &&
      this.state.country &&
      this.state.state &&
      this.state.city &&
      this.state.street &&
      (this.props.employee.firstName !== this.state.firstName ||
        this.props.employee.lastName !== this.state.lastName ||
        this.props.employee.prefix !== this.state.prefix ||
        this.props.employee.title !== this.state.title ||
        this.props.employee.department !== this.state.department ||
        this.props.employee.jobType !== this.state.jobType ||
        this.props.employee.jobArea !== this.state.jobArea ||
        this.props.employee.jobDescription !== this.state.jobDescription ||
        this.props.employee.phone !== this.state.phone ||
        this.props.employee.email !== this.state.email ||
        this.props.employee.country !== this.state.country ||
        this.props.employee.state !== this.state.state ||
        this.props.employee.city !== this.state.city ||
        this.props.employee.street !== this.state.street)
    );
  };
}

EmployeeProfileInfo = connect()(EmployeeProfileInfo);

const updateEmployee = gql`
  mutation updateEmployee($id: Int!, $firstName: String, $lastName: String,
  $prefix: String, $title: String,$department: String,  $jobType: String, $jobArea: String,
  $jobDescription: String, $country: String, $phone: String, $email: String,
  $city: String, $state: String, $street: String
  ) {
    updateEmployee(id: $id, firstName: $firstName, lastName: $lastName,
	prefix: $prefix, title: $title, department: $department, jobType: $jobType, jobArea: $jobArea,
	jobDescription: $jobDescription, country: $country, phone: $phone, email: $email,
	city: $city, state: $state, street: $street
	) {
      id
      ... EmployeeDisp
    }
  }
  ${EmployeeProfileInfo.fragments.employee}
`;

const EmployeeInfoMutations = graphql(updateEmployee, {
  name: 'updateEmployee'
})(EmployeeProfileInfo);

export default EmployeeInfoMutations;
