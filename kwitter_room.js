var firebaseConfig = {
apiKey: "AIzaSyARkXkSwn17pw5Hll4cI5ZXDz-9vL_pYf4",
authDomain: "lets-chat-6141f.firebaseapp.com",
databaseURL: "https://lets-chat-6141f-default-rtdb.firebaseio.com",
projectId: "lets-chat-6141f",
storageBucket: "lets-chat-6141f.appspot.com",
messagingSenderId: "822745342777",
appId: "1:822745342777:web:f95ea8f504e4ed4295bee8",
measurementId: "G-FDCD3CP4K3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";

}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;

childKey  = childSnapshot.key;
Room_names = childKey;

console.log("room name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});
});
}

getData();

function redirectToRoomName(name)
{
console.log(name); 
localStorage.setItem("room_name",name); 
window.location = "kwitter_page.html"; 
} 

function logout() 
{ 
localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name"); 
window.location = "index.html"; 
}