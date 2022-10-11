import firebase from "firebase";

const firbaseConfig = {
  // CONFIGURE FIREBASE TO USE DATA BASE
};

const firebaseApp = firebase.initializeApp(firbaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
