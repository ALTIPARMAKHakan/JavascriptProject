let nameInput = document.getElementById('name-input')
let surnameInput = document.getElementById('surname-input')
let kiloInput = document.getElementById('kilo-input')
let heightInput = document.getElementById('height-input')
let submitNameSurnameKiloHeightButton =  document.getElementById('submit-name-surname-kilo-height')
let nameDisplaySpan = document.getElementById('name-span')
let surnameDisplaySpan = document.getElementById('surname-span')
let kiloDisplaySpan = document.getElementById('kilo-span')
let heightDisplaySpan = document.getElementById('height-span')
let bmiDisplaySpan = document.getElementById('bmi-span')
let uyariSpan = document.getElementById("uyari-span")
let loschenButton = document.getElementById("loschen")


let personalData = {
    name: "",
    surname: "",
    kilo: 0,
    height: ""
  }
  
  let bmiSkor = 0
  
  nameInput.oninput = () =>{
  
    if(nameInput.value != "" && nameInput.value.length < 35){
      personalData.name = nameInput.value
    }
  }
  surnameInput.oninput = () =>{
  
    if(surnameInput.value != "" && surnameInput.value.length < 35){
      personalData.surname = surnameInput.value
    
  }
  kiloInput.oninput = () =>{
  
    if(kiloInput.value > 0 && kiloInput.value < 125){
      personalData.kilo = kiloInput.value
    
    }
  }
  heightInput.oninput = () =>{
  
    if(heightInput.value > 0 && heightInput.value < 225){
      personalData.height = heightInput.value/100
    
    }
      
  }
  submitNameSurnameKiloHeightButton.addEventListener('click', submitNameSurnameKiloHeight);
  
  }

  function submitNameSurnameKiloHeight(){
    let sonuc = personalData.kilo/(personalData.height*personalData.height)
    bmiDisplaySpan.innerHTML = sonuc.toFixed(2) 
    if(19<sonuc && sonuc<27){
        uyariSpan.innerHTML= "Sie sind Gesundlich"
    }else{
    uyariSpan.innerHTML = "Bitte Sport Machen!"
    }
    nameDisplaySpan.innerHTML = personalData.name
    surnameDisplaySpan.innerHTML = personalData.surname
    kiloDisplaySpan.innerHTML = personalData.kilo
    heightDisplaySpan.innerHTML = personalData.height

    localStorage.setItem("name", personalData.name);
    localStorage.setItem("surname", personalData.surname);
    localStorage.setItem("kilo", personalData.kilo);
    localStorage.setItem("height", personalData.height);

  }
  loschenButton.addEventListener("click", ()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    localStorage.removeItem("kilo");
    localStorage.removeItem("height");
}
  )