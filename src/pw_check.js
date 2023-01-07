let inputField = document.querySelector("#password");
let output = document.querySelector("#sicherheitshinweis");

inputField.addEventListener("keyup", kennwortTest);

function kennwortTest() {
  let kennwort = this.value;
  console.log(kennwort);

  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    
    if (xhr.status != 200) {
      output.textContent = "Zur Zeit keine Prüfung möglich!";
      return;
    }
    output.innerHTML = xhr.responseText;
  };

  let encodeKeyword = encodeURIComponent(kennwort);
  xhr.open("GET", "./src/pw_check.php?pw=" + encodeKeyword);
  console.log("./pw_check.php?pw=" + encodeKeyword);
  xhr.send();
}
