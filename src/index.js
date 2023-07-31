const express = require("express")
const {v4: uuidv4} = require("uuid")

const app = express()
app.use(express.json()) // Configurando o express para utilizar JSON

const projects = []

app.get("/project", function(request, response){
  const query = request.query
  return response.json(projects)
})

app.post("/project", function(request, response)  {
  const {name, owner} = request.body
  const project = {id: uuidv4(), name, owner}
  projects.push(project)
  return response.status(201).json(project)
})

app.put("/project/:id", function(request, response)  {
  // Pegando o valor recebido por parametro
  const {id} = request.params
  // Pegando as informações enviadas pelo body
  const {name, owner} = request.body

  // Buscando o index do projeto
  const projectIndex = projects.findIndex(p => p.id === id)

  // Validando se existe o id no Projeto
  if(projectIndex < 0){
    return response.status(404).json({message: "Projeto não encontrado"})
  }

  if(!name || !owner){
    return response.status(400).json({message: "Name e owner são obrigatórios"})
  }
  const project = {
    id, name, owner
  }

  projects[projectIndex] = project
  
  return response.json(project)
})
app.delete("/project/:id", function(request, response)  {
  return response.json([ "projeto 02", "projeto 03"])
})

app.listen(3000, function(){
  console.log("SERVER IS RUNNING")
})