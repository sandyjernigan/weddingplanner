function navBarDropDown() {
  let nav = document.getElementById("mainNav");
    nav.classList.toggle("responsive");
}

// Sign In Function
const signInButton = document.getElementById("signIn");
signInButton.onclick = checkCookie;
//signInButton.addEventListener("click", checkCookie());

  // Check on load
  window.addEventListener("load", checkOnLoadCookie);

function setCookie(cname, cvalue, exdays) {
  // name of the cookie (cname)
  // the value of the cookie (cvalue)
  // the number of days until the cookie should expire (exdays)
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  // name of the cookie (cname)
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var username = getCookie("username");
  if (username != "") {
   // alert("Welcome again " + username);
   document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   signInButton.textContent = "Sign In";
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
      signInButton.textContent = "Welcome " + username;
    }
  }
}

function checkOnLoadCookie() {
  var username = getCookie("username");
    if (username != "" && username != null) {
      signInButton.textContent = "Welcome " + username;
    }
}
