export function defAction(payload) {
  return {
  	type: 'DEF_ACTION',
  	payload
  };
}

export function authSignIn() {
  return {
  	type: 'SIGN_IN'
  };
}

export function authSignUp() {
  return {
  	type: 'SIGN_UP'
  };
}