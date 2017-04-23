import cookie from 'react-cookie';
import axios from 'axios';
import { browserHistory } from 'react-router';

// const actionTypes = {
//   default: "DEFAULT",
//   signIn: "SIGN_IN",
//   signUp: "SIGN_UP",
//   triggerFilter: "TRIGGER_FILTER",
//   chooseDropdown: "CHOOSE_DROPDOWN",

// };

export function defaultAction() {
  return {
    type: 'DEFAULT'
  }
};

export function authSignIn() {
  return {
  	type: 'SIGN_IN'
  };
};

export function authSignUp() {
  return {
  	type: 'SIGN_UP'
  };
};

export function createError(error) {
  return {
    type: "CREATE_ERROR",
    payload: error
  }
};

export function deleteErrors(errors) {
  return {
    type: "DELETE_ERRORS",
    payload: errors
  }
};

/* ======================================================================================================================= */
/* < FILTER ACTIONS > */
/* ======================================================================================================================= */

export function triggerFilter(filter) {
  console.log('TRIGGER_FILTER');
  return {
    type: 'TRIGGER_FILTER',
    payload: {
      filter
    }
  }
};

export function chooseDropdown(filter, unit) {
  console.log('CHOOSE_DROPDOWN');
  return {
    type: 'CHOOSE_DROPDOWN',
    payload: {
      filter,
      unit
    }
  }
}

/* ======================================================================================================================= */
/* </ FILTER ACTIONS > */
/* ======================================================================================================================= */

export const checkUser = (login, pwd) => dispatch => {
  axios.post('/api/login', { login, pwd })
    .then(res => {
      dispatch({ type: "CHECK_USER_SUCCESS", payload: {
        login,
        pwd,
        id: res.data._id,
        token: res.data.token
      }});
      cookie.save('login', login, { maxAge: 1800 });
      cookie.save('token', res.data.token, { maxAge: 1800 });
      browserHistory.push('/');
    })
    .catch(err => {
      if (err.response.data === 'Wrong password') {
        dispatch({ type: "CREATE_ERROR", payload: 'wrong_password' });
      } else if (err.response.data === 'No such user') {
        dispatch({ type: "CREATE_ERROR", payload: 'wrong_user' });
      }
    });
  // setTimeout(() => {
  //   if (
  //     (user.login === 'crysknife' && user.password === 'hell0-it-s-me') || 
  //     (user.login === 'Nick' && user.password === 'hell')
  //   ) {
  //     console.log('welcome');
  //     dispatch({ type: 'CHECK_USER_SUCCESS', payload: { ...user, token: 'f3q9fj948399fj' } });
  //     cookie.save('login', user.login, { maxAge: 1800 });
  //     cookie.save('token', 'f3q9fj948399fj', { maxAge: 1800 });
  //     browserHistory.push('/');
  //   } else {
  //     console.log('go away');
  //     dispatch({ type: 'CHECK_USER_FAILURE' });
  //   }
  // }, 300);
};

export const logOut = token => dispatch => {
  setTimeout(() => {
  	dispatch({ type: 'USER_LOGOUT' });
  	cookie.remove('login');
  	cookie.remove('token');
  	browserHistory.push('/auth');
  }, 300);
};