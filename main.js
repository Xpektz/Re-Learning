var username = document.getElementById("username").InnerText
var password = document.getElementById("password").InnerText
var loginbtn = document.getElementById("login-btn")
var loginattemptTimeout = 3

var credentialsContainer = {
    ccUsername: username,
    ccPassword: password,
    ccAccountGroup: = ["Admin", "User"],
    isPermissionSet: false,
}

 var user = {
     name: null,
     email: null,
     friends: [null],
     address: {
         street: null,
         city: null,
     },
     id: "0",
     nickname: undefined
 }

<!-- Im getting hungry....... -->

if (loginattemptTimeout !== 3){
  
}else{
  
  var conceptVersion = "1.0.0.0"
  var canLogin = false
  if (credentialsContainer.ccUsername !== "username"){
  console.log("Username is Incorrect")
  }elseif (credentialsContainer.ccPassword !== "password1"){
  console.log("Password is incorrect")
  loginattemptTimeout += 1
  }else{
  console.log(credentialsContainer.ccUsername + " has logged in successfully! Welcome back!")
  // Check 
  credentialsContainer.ccAccountGroup === credentialsContainer.ccAccountGroup[1]

  }

}


