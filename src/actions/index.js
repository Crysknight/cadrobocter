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

export function triggerFilter(filterId, filterType, isFilterActive, filterSortsBy) {
  return {
    type: 'TRIGGER_FILTER',
    payload: {
      filterId,
      filterType,
      isFilterActive,
      filterSortsBy
    }
  }
};

export function chooseDropdown(filterId, filtersBy, unit) {
  return {
    type: 'CHOOSE_DROPDOWN',
    payload: {
      filterId,
      filtersBy,
      unit
    }
  }
}

// export function filterTickets(filterId, value) {
//   return {
//     type: 'FILTER_TICKETS',
//     payload: {
//       filterId,
//       value
//     }
//   }
// }

// export function handleDropdown(filterId) {
//   return {
//     type: 'DROP_DOWN_FILTER',
//     payload: filterId
//   }
// }

// export function sortAlphabetDown() {
//   return {
//     type: 'SORT_ALPHABET_DOWN'
//   };
// };

// export function sortAlphabetUp() {
//   return {
//     type: 'SORT_ALPHABET_UP'
//   };
// };

// export function sortToolsDown() {
//   return {
//     type: 'SORT_TOOLS_DOWN'
//   };
// };

// export function sortToolsUp() {
//   return {
//     type: 'SORT_TOOLS_UP'
//   };
// };

// export function sortCorDown() {
//   return {
//     type: 'SORT_COR_DOWN'
//   };
// };

// export function sortCorUp() {
//   return {
//     type: 'SORT_COR_UP'
//   };
// };

// export function sortCodDown() {
//   return {
//     type: 'SORT_COD_DOWN'
//   };
// };

// export function sortCodUp() {
//   return {
//     type: 'SORT_COD_UP'
//   };
// };

// export function sortImportanceDown() {
//   return {
//     type: 'SORT_IMPORTANCE_DOWN'
//   };
// };

// export function sortImportanceUp() {
//   return {
//     type: 'SORT_IMPORTANCE_UP'
//   };
// };

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