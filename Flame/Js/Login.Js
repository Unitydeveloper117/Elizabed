 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA41ZHFF9FBFhXHFetnvYIt_skn0LZw2UI",
    authDomain: "weatherapp-3a128.firebaseapp.com",
    databaseURL: "https://weatherapp-3a128.firebaseio.com",
    projectId: "weatherapp-3a128",
    storageBucket: "weatherapp-3a128.appspot.com",
    messagingSenderId: "547351739868",
    appId: "1:547351739868:web:dbf7dd87020353a21de319",
    measurementId: "G-4P1TZ74HSN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



var usernameRef = document.getElementById('username');
var cellnumberRef = document.getElementById('cellnumber');
var emailRef = document.getElementById('email');
var passwordRef = document.getElementById('password');
var passwordrepeatRef = document.getElementById('passwordrepeat');



function SignUp(){

    var user=
    {
    
    userName : usernameRef.value,
    cellNumber : cellnumberRef.value,
    email : emailRef.value,
    password : passwordRef.value,
    passwordrepeat : passwordrepeatRef.value
    
    }
    console.log('user',user);
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(function(success){
        console.log('success',success);
    })
    .catch(function(error){
        console.log('error',error);
    })

}

