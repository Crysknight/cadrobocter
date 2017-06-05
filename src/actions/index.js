import cookie from 'react-cookie';
import axios from 'axios';
import { browserHistory } from 'react-router';

/* =================================================================================================== */
/* < */
  const development = 1;
/* > */
/* =================================================================================================== */

export function defaultAction() {
  return {
    type: 'DEFAULT'
  };
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
  };
};

export function deleteErrors(errors) {
  return {
    type: "DELETE_ERRORS",
    payload: errors
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
  };
};

export function chooseDropdown(filter, unit) {
  return {
    type: 'CHOOSE_DROPDOWN',
    payload: {
      filter,
      unit
    }
  };
};

export function resetFilters() {
  return {
    type: 'RESET_FILTERS'
  };
};

/* ======================================================================================================================= */
/* </ AXIOS ACTIONS > */
/* ======================================================================================================================= */

export const checkUser = (login, pwd) => dispatch => {
  if (development) {
    setTimeout(() => {
      if (
        (login === 'crysknife' && pwd === 'hell0-it-s-me') || 
        (login === 'Nick' && pwd === 'hell') ||
        (login === 'Vasya' && pwd === 'yopta')
      ) {
        console.log('welcome');
        dispatch({ type: 'CHECK_USER_SUCCESS', payload: { login, role: login === 'Vasya' ? 'user' : 'admin', token: 'f3q9fj948399fj' } });
        cookie.save('login', login);
        cookie.save('token', 'f3q9fj948399fj');
        cookie.save('role', login === 'Vasya' ? 'user' : 'admin');
        browserHistory.push('/');
      } else {
          if (login !== 'crysknife' && login !== 'Nick') {
            dispatch({ type: "CREATE_ERROR", payload: 'wrong_user' });
          } else if ((login === 'crysknife' && pwd !== 'hell0-it-s-me') || (login === 'Nick' && pwd !== 'hell')) {
            dispatch({ type: "CREATE_ERROR", payload: 'wrong_password' });
          }
      }
    }, 300);
  } else {
    axios.post('/api/login', { login, pwd })
      .then(res => {
        dispatch({ type: "CHECK_USER_SUCCESS", payload: {
          login,
          role: res.data.role,
          id: res.data._id,
          token: res.data.token
        }});
        cookie.save('login', login);
        cookie.save('token', res.data.token);
        cookie.save('role', res.data.role);
        browserHistory.push('/');
      })
      .catch(err => {
        if (err.response.data === 'Wrong password') {
          dispatch({ type: "CREATE_ERROR", payload: 'wrong_password' });
        } else if (err.response.data === 'No such user') {
          dispatch({ type: "CREATE_ERROR", payload: 'wrong_user' });
        }
      });
  }
};

export const logOut = token => dispatch => {
	dispatch({ type: 'USER_LOGOUT' });
	cookie.remove('login');
	cookie.remove('token');
  cookie.remove('role');
};

export const getTicketPreviews = (token, safety) => dispatch => {
  if (development) {
    setTimeout(() => {
      dispatch({ type: 'GOT_TICKETS', payload: [
        {
          "_id": "5907926dccaa29184c3bef67",
          "ticketId": 14,
          "name": "Glass Inspection",
          "importance": 1,
          "complexityOfDiagnose": 1,
          "complexityOfRepair": 3,
          "mechanicalGroup": {
            "_id": "5901849dba0757cd10bda8fc",
            "name": "Glass"
          },
          "location": {
            "_id": "59018495ba0757cd10bda8ec",
            "name": "Exterior Walkaround"
          },
          "photoPreview": "",
          "diagTools": []
        },
        {
          "_id": "59079282ccaa29184c3bef68",
          "ticketId": 15,
          "name": "Exterior Lights",
          "importance": 1,
          "complexityOfDiagnose": 1,
          "complexityOfRepair": 1,
          "mechanicalGroup": {
            "_id": "5901849dba0757cd10bda8fd",
            "name": "Lights"
          },
          "location": {
            "_id": "59018495ba0757cd10bda8ec",
            "name": "Exterior Walkaround"
          },
          "photoPreview": "",
          "diagTools": []
        },
        {
          "_id": "5908d9f7a5163d01144360f5",
          "ticketId": 26,
          "name": "Exhaust Integrity Boolshit Pavity",
          "importance": 2,
          "complexityOfDiagnose": 1,
          "complexityOfRepair": 3,
          "mechanicalGroup": {
            "_id": "5901849dba0757cd10bda8f6",
            "name": "Exhaust"
          },
          "location": {
            "_id": "59018495ba0757cd10bda8f1",
            "name": "Rear - Lifted"
          },
          "photoPreview": "",
          "diagTools": ["5901849dba0757cd12bda8f0"]
        },
        {
          "_id": "5908d9f7a5162d01144360f5",
          "ticketId": 21,
          "name": "Exhaust Integrity2",
          "importance": 2,
          "complexityOfDiagnose": 1,
          "complexityOfRepair": 3,
          "mechanicalGroup": {
            "_id": "5901849dba0757cd10bda8f6",
            "name": "Exhaust"
          },
          "location": {
            "_id": "59018495ba0757cd10bda8f1",
            "name": "Rear - Lifted"
          },
          "photoPreview": "",
          "diagTools": []
        },
        {
          "_id": "5908d9f7a5163d01044360f5",
          "ticketId": 42,
          "name": "Exhaust Integrit3y",
          "importance": 2,
          "complexityOfDiagnose": 1,
          "complexityOfRepair": 3,
          "mechanicalGroup": {
            "_id": "5901849dba0757cd10bda8f6",
            "name": "Exhaust"
          },
          "location": {
            "_id": "59018495ba0757cd10bda8f1",
            "name": "Rear - Lifted"
          },
          "photoPreview": "",
          "diagTools": []
        }
      ]});
    }, 300);
  } else {
    axios.post('/api/getticketpreviews', { token, safety })
      .then(res => {
        dispatch({ type: 'GOT_TICKETS', payload: res.data });
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 401 && err.response.data === 'Unauthorized') {
          browserHistory.push('/auth');
        } else if (err.response.status === 401 && err.response.data === 'Unprivileged') {
          dispatch({ type: 'GOT_TICKETS', payload: [] });
          dispatch({ type: 'CREATE_ERROR', payload: 'unprivileged' });
        }
      });
  }
};

export const getTicket = (token, id) => dispatch => {
  if (development) {
    setTimeout(() => {
      dispatch({ type: 'GOT_TICKET', payload: {
        "_id": "59079241ccaa29184c3bef65",
        "ticketId": 12,
        "name": "OBDII Trouble Codes",
        "safety": false,
        "complexityOfDiagnose": 2,
        "complexityOfRepair": 1,
        "importance": 3,
        "mechanicalGroup": {
          "_id": "5901849dba0757cd10bda902",
          "name": "Trouble Codes"
        },
        "location": {
          "_id": "59018495ba0757cd10bda8ed",
          "name": "Interior"
        },
        "descriptionLevelOne": "",
        "threats": [],
        "symptoms": [],
        "causes": [],
        "visualLevelOne": ['wrench-0.png', 'no-preview.jpg', 'bar-medium.png'],
        "diagTools": [
          {
            "_id": "5901847fba0757cd10bda8e6",
            "name": "OBD II Scanner",
            "description": "OBD II scanner with a relevant adapter for cars older than 1996"
          }
        ]
      }});
    }, 300); 
  } else {
    axios.post('/api/getticket', { token, ticketId: id })
      .then(res => {
        dispatch({ type: 'GOT_TICKET', payload: res.data });
      })
      .catch(err => {
        console.log(err);
        if (err.status === 401) {
          browserHistory.push('/auth');
        }
      });
  }
};