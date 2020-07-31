import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDnIXnC4cKsCg8cVpv-EmJOrlB_BsdpJHQ",
  authDomain: "sabziwala-db.firebaseapp.com",
  databaseURL: "https://sabziwala-db.firebaseio.com",
  projectId: "sabziwala-db",
  storageBucket: "sabziwala-db.appspot.com",
  messagingSenderId: "946265939742",
  appId: "1:946265939742:web:b2e90ee5ad879b18c9f30f",
  measurementId: "G-446656E36N",
};

export const createuser = async (userAuth, additionData) => {
  if (!userAuth) return;
  let userid=userAuth.uid;
  const userRef = firestore.doc('user/'+userid);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData,
      });
    } catch (error) {
      console.log("error", error.message);
    }
    
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
