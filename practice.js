
//ADD YOUR FIREBASE LINKS// Your web app's Firebase configuration
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
  function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
}
function getData (){firebase.database().ref("/").on('value', function(snapshot){ document.getElementById("output").innerHTML;

Room_names = childKey;
console.log("Room Name - " + Room_Names);
row = "div class='room_name' id="+Room_Names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});}

function redirectToRoomNmae(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}