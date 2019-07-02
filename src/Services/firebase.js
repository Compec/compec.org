import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCDcGgQLzssrJlk8d5mj5TLuE0l5CRNdQc",
    authDomain: "compec-web.firebaseapp.com",
    databaseURL: "https://compec-web.firebaseio.com",
    projectId: "compec-web",
    storageBucket: "compec-web.appspot.com",
    messagingSenderId: "253656562095",
    appId: "1:253656562095:web:179466024251df57"
};
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();
const storage=firebase.storage();
export { db , storage };
export default firebase;