import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAREI80Rzo8LTdNUkC2XPLMLREoJaeD_R4",
  authDomain: "ssubi-prototype.firebaseapp.com",
  databaseURL: "https://ssubi-prototype.firebaseio.com",
}

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
