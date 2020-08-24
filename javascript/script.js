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

function registerMensage(){
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