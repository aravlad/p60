// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDnT8wbbyVpfzlL_sLGLc5B1g9SqfpfWgg",
//     authDomain: "project41-e7307.firebaseapp.com",
//     projectId: "project41-e7307",
//     storageBucket: "project41-e7307.appspot.com",
//     messagingSenderId: "157195785072",
//     appId: "1:157195785072:web:89b78185047368d8fd35b5"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>

 import firebase from "firebase"
  var firebaseConfig = {
    apiKey: "AIzaSyDnT8wbbyVpfzlL_sLGLc5B1g9SqfpfWgg",
    authDomain: "project41-e7307.firebaseapp.com",
    projectId: "project41-e7307",
    storageBucket: "project41-e7307.appspot.com",
    messagingSenderId: "157195785072",
    appId: "1:157195785072:web:89b78185047368d8fd35b5"
  };
  // Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database()

