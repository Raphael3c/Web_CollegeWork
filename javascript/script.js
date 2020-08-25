function defaultColor(){
    document.bgColor = '#9248ff'
}

function backColor1(){
    document.bgColor = '#000000'
    document.getElementById("buttonCredit").style.backgroundColor = "#9248ff"
}

function backColor2(){
    document.bgColor = '#9248ff'
    document.getElementById("buttonCredit").style.backgroundColor = "#000000"
}

function backColor3(){
    document.bgColor = '#ffffff'
    document.getElementById("buttonCredit").style.backgroundColor = "#000000"
}

function devOps() {
    varWindow = window.open('html/devops.html', 'popup')
}

/*function registerMensage(){
    var data = new Array()

    if (localStorage.hasOwnProperty("data")) {
        data = JSON.parse(localStorage.getItem("data"))
    }

    var name = document.form.name.value
    var mensage = document.form.mensage.value

    data.push({
        name: name,
        mensage: mensage
    })

    localStorage.setItem("data", JSON.stringify(data))
}

function ccc(){
    var data = JSON.parse(localStorage.getItem("data"))
    var mensage = document.getElementById("mensages")
    mensage.innerHTML = data[0].name
}*/

function registerMensage(){ 

   var nome = document.getElementById("name")
   var mensage = document.getElementById("mensage")
   var board = document.getElementById("mensageBoard")
   var div = document.createElement("div")
   var p = document.createElement("p")
   var p1 = document.createElement("p")
   var button = document.createElement("button")

   button.innerHTML = "Excluir"

   var eMensage = `${nome.value}: ${mensage.value}`
   
   board.appendChild(div)
   div.appendChild(p)
   div.appendChild(button)
   p.innerHTML = eMensage
   button.onclick = function(){
       div.style.display = "none"
   }

   div.scrollTop = div.scrollHeight

   div.style.position = "relative"
   //div.style.bottom = "150px"
   div.style.left = "10px"
   div.style.backgroundColor = "#696969"
   div.style.borderRadius = "10px"
   div.style.marginRight = "20px"

   p.style.position = "relative"
   p.style.top = "25px"
   p.style.left = "10px"
   p.style.fontSize = "20px"

   button.style.position = "relative"
   button.style.bottom = "23px"
   button.style.left = "450px"
   
}