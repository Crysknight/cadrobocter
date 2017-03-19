import cookie from 'react-cookie';

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
      dispatch({ type: 'CHECK_USER_SUCCES', payload: { ...user, token: 'f3q9fj948399fj' } });
      cookie.save('login', user.login);
      cookie.save('token', 'f3q9fj948399fj');
    } else {
      console.log('go away');
      dispatch({ type: 'CHECK_USER_FAILURE' });
    }
  }, 800);
};