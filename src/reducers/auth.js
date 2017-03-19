export default function(state = [
  {
	key: 'sign_in_login',
	describer: 'sign_in_login',
	inputType: 'text',
	inputPlaceholder: 'Login'
  }, {
	key: 'sign_in_password',
	describer: 'sign_in_password',
	inputType: 'password',
	inputPlaceholder: 'password'
  }
], action) {
  switch (action.type) {
  	case 'SIGN_IN': {
  	  return [
		{
		  key: 'sign_in_login',
		  describer: 'sign_in_login',
		  inputType: 'text',
		  inputPlaceholder: 'Login'	
		}, {
		  key: 'sign_in_password',
		  describer: 'sign_in_password',
		  inputType: 'password',
		  inputPlaceholder: 'password'
		}
	  ];
  	}
  	case 'SIGN_UP': {
  	  return [
		{
		  key: 'sign_up_login',
		  describer: 'sign_up_login',
		  inputType: 'text',
		  inputPlaceholder: 'Your login (must be unique)'	
		}, {
		  key: 'sign_up_email',
		  describer: 'sign_up_email',
		  inputType: 'email',
		  inputPlaceholder: 'Your E-mail'
		}, {
		  key: 'sign_up_password',
		  describer: 'sign_up_password',
		  inputType: 'password',
		  inputPlaceholder: 'Think of a password'
		}
	  ];
  	}
  	default: {
  	  return state;
  	}
  }
};