const express = require("express");
const app = express();

app.use(express.static(__dirname+"/dist/"));

app.listen(3000, (err) => {
  if(!err){
    console.log('启动成功....')
  } else {
    console.log(err)
  }
})
