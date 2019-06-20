//firebase SDK down ,it is already present in admin.html,so commented here

/*var firebaseConfig = {
  apiKey: "AIzaSyDZvqNQT6rdf2l01EsEIzqHTIWJB3zxGxI",
  authDomain: "mini-f82de.firebaseapp.com",
  databaseURL: "https://mini-f82de.firebaseio.com",
  projectId: "mini-f82de",
  storageBucket: "mini-f82de.appspot.com",
  messagingSenderId: "831810058583",
  appId: "1:831810058583:web:0dff1039873565a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);*/

//ON REGISTERING INTO ADMIN

  function Register(fn,ln,mail,pass){
    var db=firebase.database();
  //var fn=document.getElementById("fname").value;
  //var ln=document.getElementById("lname").value;
  //var mail=document.getElementById("ID").value;
  //var pass=document.getElementById("pwd").value;
  var data={
    firstname:fn,
    lastname:ln,
    email:mail,
    password:pass
  };
 // console.log(data);
  var ref=db.ref('users');
  //push - to append data
  //as well checking if successfull or not
  db.push(data,function(error){
    if(error){
      alert("Data not saved "+error);
    }
    else{
      alert("You are successfully registered");
    }
  });
  }
//console.log(firebase)
 
//ON LOGINIG IN

function check(fna,lpwd){
  //var fna=document.getElementById('lfname').value;
  //var lpwd=document.getElementById('pass').value;
  var db1=firebase.database();
  var dbRef=db1.ref('users');
   dbRef.once('value' ,function(snapshot){
     //snapshot - used to get a instance od db at that specific state
    var dataset=[];
    snapshot.forEach(function(childsnapshot){
      user=childsnapshot.val().firstname;
      pass=childsnapshot.val().password;
      if((fna==user)&&(lpwd==pass)){
        window.location="Modify.html";
      }
      else{
        alert("Invalid user!!!!");
      }
    });
   });
}