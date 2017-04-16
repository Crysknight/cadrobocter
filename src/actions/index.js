import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

export function defaultAction() {
  return {
    type: 'DEFAUL'
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

/* ======================================================================================================================= */
/* < FILTER ACTIONS > */
/* ======================================================================================================================= */

export function triggerFilter(filter) {
  return {
    type: 'TRIGGER_FILTER',
    payload: {
      filter
    }
  }
};

export function chooseDropdown(filter, unit) {
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

export const checkUser = user => dispatch => {
  setTimeout(() => {
    if (
      (user.login === 'crysknife' && user.password === 'hell0-it-s-me') || 
      (user.login === 'Nick' && user.password === 'hell')
    ) {
      console.log('welcome');
      dispatch({ type: 'CHECK_USER_SUCCESS', payload: { ...user, token: 'f3q9fj948399fj' } });
      cookie.save('login', user.login, { maxAge: 1800 });
      cookie.save('token', 'f3q9fj948399fj', { maxAge: 1800 });
      browserHistory.push('/');
    } else {
      console.log('go away');
      dispatch({ type: 'CHECK_USER_FAILURE' });
    }
  }, 300);
};

export const logOut = token => dispatch => {
  setTimeout(() => {
  	dispatch({ type: 'USER_LOGOUT' });
  	cookie.remove('login');
  	cookie.remove('token');
  	browserHistory.push('/auth');
  }, 300);
};