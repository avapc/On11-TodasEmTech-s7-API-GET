const filmes = require("./data/ghibli.json")

const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem":"Salve, mundão!"
    }])
})

//"/filmes" retorna lista de todos os filmes
app.get("/filmes", (request, response)=>{
    console.log(request.url)
    response.status(200).json(filmes)
})

app.get("/filmes/filtro", (request, response)=>{
    const tituloRequisitado = request.query.titulo

    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})

app.get("/filmes/:identificacao", (request, response)=>{
    const idRequisitado = request.params.identificacao

    response.status(200).json(filmes.find(filme => filme.id == idRequisitado))
    
})

app.listen(8080, ()=>{
    console.log("Uhull ta fruncionando na porta 8080")
})