const express = require("express")

const app = express()

app.get("/", function(request, response){
  return response.send("Hello world")
})

app.listen(3000, function(){
  console.log("SERVER IS RUNNING")
})