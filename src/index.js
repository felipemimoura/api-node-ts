const express = require("express")

const app = express()

app.get("/project", function(request, response){
  return response.json(["projeto 01", "projeto 02"])
})

app.listen(3000, function(){
  console.log("SERVER IS RUNNING")
})