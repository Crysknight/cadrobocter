export default function(state = {}, action) {
  switch (action.type) {
  	case 'CHECK_USER_SUCCESS': {
  	  return {
  	  	...action.payload,
  	  	error: false
  	  }
  	}
  	case 'CHECK_USER_FAILURE': {
  	  return {
  	  	error: true
  	  };
  	}
  	case 'USER_LOGOUT': {
  	  return {};
  	}
  	default: {
  	  return state;
  	}
  }
}