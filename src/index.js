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
  const params = request.params
  console.log(params)
  return response.json(["projeto 04", "projeto 02", "projeto 03"])
})
app.delete("/project/:id", function(request, response)  {
  return response.json([ "projeto 02", "projeto 03"])
})

app.listen(3000, function(){
  console.log("SERVER IS RUNNING")
})