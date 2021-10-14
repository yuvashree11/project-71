import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBkvSVw44BFuFnDK1S72jDBtwDxdtjRYeI",
 authDomain: "project-71-fdf43.firebaseapp.com",
 projectId: "project-71-fdf43",
 storageBucket: "project-71-fdf43.appspot.com",
 messagingSenderId: "587636760443",
 appId: "1:587636760443:web:cce7bca941a3f7b265a7de"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

