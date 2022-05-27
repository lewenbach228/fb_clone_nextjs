import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkM4pHaXdeKLz9BjMYQET7gpPDonv59kA",
  authDomain: "fb-clone-next-7e2fc.firebaseapp.com",
  projectId: "fb-clone-next-7e2fc",
  storageBucket: "fb-clone-next-7e2fc.appspot.com",
  messagingSenderId: "490736808470",
  appId: "1:490736808470:web:823821ecc521521c2ebb37",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
