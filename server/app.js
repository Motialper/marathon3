const express = require('express')
const app = express()


let fileupload = require("express-fileupload");
app.use(fileupload());

let cors = require('cors')
app.use(cors())

app.use(express.static('upload_img'))


app.post('/upload_img', function (req, res) {
  
  console.log(req.files)

  const uploadedFile = req.files.myFile;
  
  
  let time = new Date().getTime();
  let fileName = `${time}_${uploadedFile.name}`;

  uploadedFile.mv(`${__dirname}/upload_img/${fileName}`, (err) => {
    if (err) {
      console.error(err); 
      return res.status(500).send(err);
    } else {
      res.send(fileName);
    }
   });

  
})

app.listen(5000)