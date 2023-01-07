


let registerUsername = document.getElementById('username')
let registerFirstName = document.getElementById('firstname')
let registerName = document.getElementById('name')
let registerPassword = document.getElementById('password')
let registerAddress = document.getElementById('address')
let registerButton = document.getElementById('submit')


registerButton.addEventListener('click', function () {

    let gonderlicekJson = {
            "username": registerUsername,
            "firstname": registerFirstName,
            "name": registerName,
            "password": registerPassword,
            "address": registerAddress
        }

    sendFile(gonderlicekJson)
})




function sendFile(jsonString) {
   
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status != 200) return;
        console.log("empfangene Daten:", xhr.responseText);
    };
    xhr.open("POST", "register.php");
    xhr.send(jsonString);
}

