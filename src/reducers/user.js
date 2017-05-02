export default function(state = {}, action) {
  switch (action.type) {
  	case 'CHECK_USER_SUCCESS': {
  	  return {
  	  	...action.payload
  	  }
  	}
  	case 'USER_LOGOUT': {
  	  return {};
  	}
  	default: {
  	  return state;
  	}
  }
}