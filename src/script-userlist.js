let json;
const MESSAGE = "Leider wurde kein passender User gefunden!";

let request = new XMLHttpRequest();

request.onload = function () {
  if (request.status != 200) return;
  if (request.responseType === 'json') json = request.response;
  else json = JSON.parse(request.responseText);
  init();
};

request.open('GET', './src/userlist.json');
request.responseType = 'json';
request.send();

const userAbgleich = function (aktUser) {
  if (document.querySelectorAll("div.username").length != 0) {
    document.querySelector("div.username").remove();
  }

  let username;

  for (let i = 0; i < json.users.length; i++) {
    if (json.users[i].username == aktUser) {
      username = json.users[i];
      break;
    }
  }

  if (username != undefined) {

    document.querySelector("#hinweis").textContent = "";
    
  } else {
    document.querySelector("#hinweis").textContent = MESSAGE;
  }
};

function userPasswordFunc(aktPassword) {
  if (document.querySelectorAll("div.password").length != 0) {
    document.querySelector("div.password").remove();
  }

  let password;

  for (let i = 0; i < json.users.length; i++) {

    if (json.users[i].password == aktPassword) {
      password = json.users[i];
      break;
    }
  }

  if (password != undefined) {
    document.querySelector("#hinweis-password").textContent = "";
    let listStart = createElem("div");
    listStart.className = "password";

    let passwortButton = createElem("button", "Passwort zeigen ");
    passwortButton.addEventListener("mousedown", function () {
      listPasswort.textContent = "Passwort: " + password.password
    });
    passwortButton.addEventListener("mouseup", function () { listPasswort.innerHTML = "Passwort: *******" });

    let listFirstname = createElem("p", "Vorname: " + password.firstname);
    let listName = createElem("p", "Nachname: " + password.name);
    let listUsername = createElem("p", "Username: " + password.username);
    let listPasswort = createElem("p", "Passwort: *******");
    let underPasswort = createElem("p", "");
    underPasswort.append(passwortButton);
    let listaddress = createElem("p", "Anschrift: " + password.address);

    listStart.append(listFirstname, listName, listUsername, listPasswort, underPasswort, listaddress);
    document.querySelector("#main-content").append(listStart);
  } else {
    document.querySelector("#hinweis-password").textContent = MESSAGE;
  }
};

function init() {
  let userSearch = document.querySelector("#username");
  userSearch.addEventListener("keyup", function () {
    userAbgleich(this.value);
  });

  let userPassword = document.querySelector('#password')
  userPassword.addEventListener("keyup", function () {
    userPasswordFunc(this.value)
  })
}
function createElem(elem, text = "") {
  let element = document.createElement(elem);
  element.textContent = text;
  return element;
}