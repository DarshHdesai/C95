// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2twVBhaPcOtUwi7kGOvTLx6tbc507xfg",
  authDomain: "firstproject-a36da.firebaseapp.com",
  projectId: "firstproject-a36da",
  storageBucket: "firstproject-a36da.appspot.com",
  messagingSenderId: "310992360373",
  appId: "1:310992360373:web:d3d26cf1401a94f332bffc",
  measurementId: "G-DW2NY8BF86"
};

function adduser()
{
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
    });
}