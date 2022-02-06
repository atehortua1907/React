import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return(dispatch)=>{        
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ({user}) => {
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
        }).catch(error => {
            console.error(error);
            dispatch(finishLoading());
        })
    };
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async({ user }) => {

            await user.updateProfile({displayName: name}) //para actualizar el display name del usuario
            dispatch(
                login(user.uid, user.displayName)
            )
        })
        .catch(error => {console.error(error);})
    };
};

export const startGoogleLogin = () =>{
    return(dispatch) =>{
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})