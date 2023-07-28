const express = require("express")

const app = express()

app.get("/project", function(request, response){
  const query = request.query
  console.log(query)
  return response.json(["projeto 01", "projeto 02"])
})

app.post("/project", function(request, response)  {
  return response.json(["projeto 01", "projeto 02", "projeto 03"])
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