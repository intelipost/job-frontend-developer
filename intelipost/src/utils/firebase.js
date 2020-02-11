import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBuikKFss0F3Fm-9FH4nSSmN0v50FYx76I",
    authDomain: "job-frontend-developer.firebaseapp.com",
    databaseURL: "https://job-frontend-developer.firebaseio.com",
    projectId: "job-frontend-developer",
    storageBucket: "job-frontend-developer.appspot.com",
    messagingSenderId: "661667034935",
    appId: "1:661667034935:web:83089b3eeb49b5a67e8cb2",
    measurementId: "G-ZDB073VZNX"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;