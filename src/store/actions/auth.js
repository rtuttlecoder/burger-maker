// import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
    };
};

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = (expirationTime) => {
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch(logout());
    //     }, expirationTime * 1000);
    // };
    return {type: actionTypes.AUTH_CHECKTIMEOUT, expirationTime: expirationTime};
};

export const auth = (email, password, isSignup) => {
    // return dispatch => {
    //     dispatch(authStart());
    //     const authData = {
    //         email: email,
    //         password: password,
    //         returnSecureToken: true
    //     };
    //     let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBTRXe_CIV3V7-8lCpJ3sDC0rVbnoOprUQ';
    //     if (!isSignup) {
    //         url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBTRXe_CIV3V7-8lCpJ3sDC0rVbnoOprUQ';
    //     }
    //     axios.post(url, authData)
    //          .then(response => {
    //             const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
    //             localStorage.setItem('token', response.data.idToken);
    //             localStorage.setItem('expirationDate', expirationDate);
    //             localStorage.setItem('userId', response.data.localId);
    //             dispatch(authSuccess(response.data.idToken, response.data.localId));
    //             dispatch(checkAuthTimeout(response.data.expiresIn));
    //         })
    //          .catch(err => {
    //             dispatch(authFail(err.response.data.error));
    //         });
    // };
    return { type: actionTypes.AUTH_USER, email: email, password: password, isSignup: isSignup };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    // return dispatch => {
        // const token = localStorage.getItem('token');
        // if (!token) {
        //     dispatch(logout());
        // } else {
        //     const expirationDate = new Date(localStorage.getItem('expirationDate'));
        //     if (expirationDate <= new Date()) {
        //         dispatch(logout());
        //     } else {
        //         const userId = localStorage.getItem('userId');
        //         dispatch(authSuccess(token, userId));
        //         dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
        //     }   
        // }
    // };
    return { typpe: actionTypes.AUTH_CHECK_INITIAL_STATE};
};