const firebaseConfig = {
      apiKey: "AIzaSyBvbzK_dCTwrP7DNxujG1ipYfL-HQUeQ0U",
      authDomain: "kwitter-c67a4.firebaseapp.com",
      databaseURL: "https://kwitter-c67a4-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "kwitter-c67a4",
      storageBucket: "kwitter-c67a4.appspot.com",
      messagingSenderId: "1050342021615",
      appId: "1:1050342021615:web:6598292780ebeabf4cbe1a",
      measurementId: "G-C2XQVEPFL7"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function() { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
