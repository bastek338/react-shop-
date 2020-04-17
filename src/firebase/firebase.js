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

export const createUserProfile = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = await userRef.get();

  if(!userSnapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(err){
      console.log(`Something went wrong by creating user: ${err.message}`)
    }
  }

  return userRef;
}

export const addCollectionToFirestore = async (collectionName, dataToFirestore) => {
  const collectionRef = firestore.collection(collectionName);

  const batch = firestore.batch();

  dataToFirestore.forEach( obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  })
  
  return await batch.commit()
}

export const transformCollectionToMap = ( collections ) => {
  const transformedArray = collections.docs.map( item => {
    const {items, title} = item.data()
    return {
      id: item.id,
      routeName: title.toLowerCase(),
      title,
      items
    }
  })

  const collectionItems = transformedArray.reduce((accumulator, currentValue) => {
    accumulator[currentValue.title.toLowerCase()] = currentValue;
    return accumulator
  }, {})

  return collectionItems
}

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider).then(res => console.log(res))
