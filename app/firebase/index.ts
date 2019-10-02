import firebase from 'firebase'
// import 'firebase/auth'

import config from "./config";

if (!firebase.apps.length) {
    firebase.initializeApp(config);
    console.log(firebase.app().name)
}

export default {
    login: (email: string, password: string): Promise<any> => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }
}
