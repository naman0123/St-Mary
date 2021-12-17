var roomName;

function init()
{
    let username = localStorage.getItem("userName");
    document.getElementById("login_statement").innerHTML = "Hi, " + username + "!";
}

const config = {
  apiKey: "AIzaSyBN1N1pclEMBXTVOYRZlJQ0wxOkf5TEm8U",
  authDomain: "chatting-app-b6cc2.firebaseapp.com",
  databaseURL: "https://chatting-app-b6cc2-default-rtdb.firebaseio.com",
  projectId: "chatting-app-b6cc2",
  storageBucket: "chatting-app-b6cc2.appspot.com",
  messagingSenderId: "98850665613",
  appId: "1:98850665613:web:a12d7c309fd60f46ba9ec4"
};
  
// Initialize Firebase
firebase.initializeApp(config);

function addRoom()
{
  roomName = document.getElementById("room_name").value;
  localStorage.setItem("RoomName", roomName);
  firebase.database().ref("/").child(roomName).update({
    purpose: "Adding room name"
  });
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
      console.log("Room name:" + Room_names);
      row = "<div class='RoomName' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    //End code
});});}

getData();

function redirectToRoomName(id)
{
  roomName = id;
  localStorage.setItem("RoomName", roomName);
  window.location = "kwitter_page.html";
}