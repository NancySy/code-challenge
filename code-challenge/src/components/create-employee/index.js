import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmployeeMutation } from '../../graphql/querries';
import { Button, Profile, ImageContainer } from '../styled-division';

const addAction = (state, props, context) => {
  return {
    type: 'ADD_EMPLOYEE',
    state,
    props,
    context
  };
};

class CreateEmployee extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired,
    dispatch: PropTypes.func
  };
  static contextTypes = {
    router: PropTypes.object
  };

  state = {
    firstName: '',
    lastName: '',
    prefix: '',
    title: '',
    department: '',
    email: '',
    picture: '',
    phone: '',
    country: '',
    city: '',
    state: '',
    street: '',
    jobArea: '',
    jobType: '',
    jobDescription: ''
  };

  enableSave = () => {
    return (
      this.state &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.title &&
      this.state.department &&
      this.state.jobType &&
      this.state.email &&
      this.state.phone
    );
  };

  handleCancel = () => {
    this.context.router.history.push('/');
  };

  render() {
    return (
      <div className="w-100 pa4 flex justify-center">
        <Profile style={{ maxWidth: 450 }} className="">
          <label className="label"> Prefix </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Mr./Ms./Mrs."
            onChange={e => this.setState({ prefix: e.target.value })}
          />
          <br />
          <label className="label"> First Name </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="First Name"
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <br />
          <label className="label"> Last Name </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Last Name"
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <br />
          <label className="label"> Title </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Title"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <br />
          <label className="label"> Department </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Department"
            onChange={e => this.setState({ department: e.target.value })}
          />
          <br />
          <label className="label"> Job Type </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Job Type"
            onChange={e => this.setState({ jobType: e.target.value })}
          />
          <br />
          <label className="label"> Job Description </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Job Description"
            onChange={e => this.setState({ jobDescription: e.target.value })}
          />
          <br />
          <label className="label"> Job Area </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Job Area"
            onChange={e => this.setState({ jobArea: e.target.value })}
          />
          <br />
          <label className="label"> Phone </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Phone Number"
            onChange={e => this.setState({ phone: e.target.value })}
          />
          <br />
          <label className="label"> Email </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <label className="label"> Country </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Country"
            onChange={e => this.setState({ country: e.target.value })}
          />
          <br />
          <label className="label"> State </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="State"
            onChange={e => this.setState({ state: e.target.value })}
          />
          <br />
          <label className="label"> City </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="City"
            onChange={e => this.setState({ city: e.target.value })}
          />
          <br />
          <label className="label"> Street </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Street"
            onChange={e => this.setState({ street: e.target.value })}
          />
          <br />
          <label className="label"> Picture </label>
          <input
            className="w-100 pa3 mv2 inputText"
            placeholder="Picture URL"
            onChange={e => this.setState({ picture: e.target.value })}
          />
          <ImageContainer>
            {this.state &&
              this.state.picture && (
                <img
                  src={this.state.picture}
                  alt=""
                  style={{ width: 410 }}
                  className="w-100 mv3"
                />
              )}
          </ImageContainer>
          <div className="flex justify-between">
            <Button onClick={this.handleCancel}>Cancel</Button>
            {this.enableSave() ? (
              <Button
                save
                onClick={() =>
                  this.props.dispatch(
                    addAction(this.state, this.props, this.context)
                  )}
              >
                Save
              </Button>
            ) : (
              <Button disabled>Save</Button>
            )}
          </div>
        </Profile>
      </div>
    );
  }
}

CreateEmployee = connect()(CreateEmployee);

const AddEmployeeWithMutation = graphql(addEmployeeMutation)(
  withRouter(CreateEmployee)
);

export default AddEmployeeWithMutation;
