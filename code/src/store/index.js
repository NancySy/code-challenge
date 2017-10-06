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

const handleActions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...action.state, addEmployee(action)];
    default:
      return state;
  }
};

const reduxApp = combineReducers({ handleActions });

export default reduxApp;
