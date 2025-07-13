const listContainer = document.querySelector("#list-container")
const inBox = document.querySelector("#inBox")
const btEnviar = document.querySelector("#btEnviar")
btEnviar.addEventListener("click",()=>{
    
    const tarefas = inBox.value
    if(tarefas == ""){
        alert("Digite uma tarefas")
        return
    }
    criaLinhas(tarefas)
    inBox.value = ""
    inBox.focus()

})

document.addEventListener("click",(e)=>{
    const el = e.target
    if(el.tagName == "LI"){
        el.classList.toggle("checked")
    }
     if(el.tagName == "I"){
         removerItem(el)
     }
})

function criaLinhas(tarefas){
    const li = document.createElement('li')
    const i = document.createElement('i')
    i.className = "bi bi-trash3-fill"
    li.innerText = tarefas

    li.appendChild(i)

    listContainer.appendChild(li)
    
}

function removerItem(e){
    e.parentElement.remove()
}