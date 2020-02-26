import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBW69XMKgL_M3vnjxtcQ_mjve-VbftecYs",
    authDomain: "react-shop-b237d.firebaseapp.com",
    databaseURL: "https://react-shop-b237d.firebaseio.com",
    projectId: "react-shop-b237d",
    storageBucket: "react-shop-b237d.appspot.com",
    messagingSenderId: "1013849255877",
    appId: "1:1013849255877:web:dfae008fbff783c93725ac"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider).then(res => console.log(res))
