function defaultColor(){
    document.bgColor = '#1b1c1c'
    document.getElementById("buttonCredit").style.backgroundColor = "#ffffff"
    document.getElementById("buttonCredit").style.color = "#000000"
    window.resizeTo(1366, 768);
}

function backColor1(){
    document.bgColor = '#3c3c3c'
    document.getElementById("buttonCredit").style.backgroundColor = "#00ff75"
    document.getElementById("buttonCredit").style.color = "#ffffff"
}

function backColor2(){
    document.bgColor = '#00ff75'
    document.getElementById("buttonCredit").style.backgroundColor = "#e2e7e4"
    document.getElementById("buttonCredit").style.color = "#0e0e0e"
}

function backColor3(){
    document.bgColor = '#e2e7e4'
    document.getElementById("buttonCredit").style.backgroundColor = "#3c3c3c"
    document.getElementById("buttonCredit").style.color = "#ffffff"
}

function devOps() {
    varWindow = window.open('html/devops.html', 'popup')
}

function registerMensage(){ 
    
    var nome = document.getElementById("name")
    var mensage = document.getElementById("mensage")

    if(nome.value != "" && mensage.value != ""){

        var board = document.getElementById('mensageBoard')
        var div = document.createElement("div")
        var p = document.createElement("p")
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

        div.style.position = "relative"
        div.style.left = "10px"
        div.style.backgroundColor = "#696969"
        div.style.borderRadius = "10px"
        div.style.marginRight = "20px"

        p.style.position = "relative"
        p.style.top = "23px"
        p.style.left = "10px"
        p.style.fontSize = "15px"

        button.style.position = "relative"
        button.style.bottom = "17px"
        button.style.left = "450px"
        button.style.backgroundColor = "#3c3c3c"
    }
}