const inBox = document.querySelector("#inBox")
const btEnviar = document.querySelector("#btEnviar")

const listContainer = document.querySelector("#list-container")

btEnviar.addEventListener("click",()=>{
    
    const tarefas = inBox.value
    if(tarefas == ""){
        alert("Digite uma tarefas")
        return
    }
    criaLinhas(tarefas)
    inBox.value = ""
    inBox.focus()
    saveData()

})

listContainer.addEventListener("click",(e)=>{
    const el = e.target
    if(el.tagName == "LI"){
        el.classList.toggle("checked")
        saveData()
    }
     if(el.tagName == "I"){
         removerItem(el)
         saveData()
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

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

loadData()