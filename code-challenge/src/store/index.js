import { combineReducers } from 'redux';

const addEmployee = action => {
  const {
    firstName,
    lastName,
    picture,
    prefix,
    title,
    department,
    email,
    country,
    city,
    phone,
    state,
    street,
    jobArea,
    jobType,
    jobDescription
  } = action.state;
  action.props
    .mutate({
      variables: {
        firstName,
        lastName,
        picture,
        prefix,
        title,
        department,
        jobType,
        jobArea,
        jobDescription,
        country,
        phone,
        email,
        city,
        state,
        street
      }
    })
    .then(({ data }) => {
      action.context.router.history.go('/');
      action.context.router.history.replace('/');
    });
};

const updateEmployeeInfo = action => {
  action.props
    .updateEmployee({
      variables: {
        id: action.props.employee.id,
        firstName: action.state.firstName,
        lastName: action.state.lastName,
        prefix: action.state.prefix,
        title: action.state.title,
        department: action.state.department,

        jobType: action.state.jobType,
        jobArea: action.state.jobArea,
        jobDescription: action.state.jobDescription,
        country: action.state.country,
        phone: action.state.phone,
        email: action.state.email,
        city: action.state.city,

        state: action.state.state,

        street: action.state.street
      }
    })
    .then(action.props.afterChange);
};

const handleActions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...action.state, addEmployee(action)];
    case 'UPDATE_EMPLOYEE':
      return [action.state, updateEmployeeInfo(action)];
    default:
      return state;
  }
};

const reduxApp = combineReducers({ handleActions });

export default reduxApp;
