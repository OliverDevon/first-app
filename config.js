import * as firebase from "firebase"
require("@firebase/firestore")
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDV37fp8gaBwmKrJr6GeQ7zcjHlZiHT_oI",
    authDomain: "wlu-2aa43.firebaseapp.com",
    projectId: "wlu-2aa43",
    storageBucket: "wlu-2aa43.appspot.com",
    messagingSenderId: "580177351817",
    appId: "1:580177351817:web:0020983de738b24bac2258"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()

