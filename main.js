
const titulo = document.querySelector("h1")

const botao = document.querySelector("#botao")

botao.addEventListener("click", () =>{
    if(titulo.getAttribute("letra") == "azul"){
        titulo.setAttribute("letra", "vermelho")
    }else {
        titulo.setAttribute("letra","azul")
    }
})