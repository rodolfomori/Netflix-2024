/*   
JavaScript (E qualquer linguagem)
    - Variável 
Um pedacinho da memória do computador, 
que eu posso guardar o que eu quiser

    - Funções 
Pedacinho de código que só executa,
Quando é chamado


Botão -> For Clicado -> Chamar a minha Função -> Ligar o SOM
Document = HTML
querySelector (Selecionar ou pegar um item do HTML)
addEventListener - Sua vizinha fofoqueira (Ouvindo alguém e te contar quando algo aconteceu)
*/

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

// Ligar o SOM
botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted =  !video.muted
}
// ! = inverso / inverte tudo
// Se ta mudo, ele vai tocar, se tiver tocando ele vai deixar mudo


// Mostrar o MODAL

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}

// Tocar o TUNDUM

window.addEventListener("load", tocarAudio)


function tocarAudio(){
    audio.play()
}