import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

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

export const checkUser = user => dispatch => {
  setTimeout(() => {
    if (
      (user.login === 'crysknife' && user.password === 'hell0-it-s-me') || 
      (user.login === 'name-s-Nick' && user.password === 'I-am-the-0wner')
    ) {
      console.log('welcome');
      dispatch({ type: 'CHECK_USER_SUCCESS', payload: { ...user, token: 'f3q9fj948399fj' } });
      cookie.save('login', user.login);
      cookie.save('token', 'f3q9fj948399fj');
      browserHistory.push('/');
    } else {
      console.log('go away');
      dispatch({ type: 'CHECK_USER_FAILURE' });
    }
  }, 800);
};

export const logOut = token => dispatch => {
  setTimeout(() => {
  	dispatch({ type: 'USER_LOGOUT' });
  	cookie.remove('login');
  	cookie.remove('token');
  	browserHistory.push('/auth');
  }, 800);
};