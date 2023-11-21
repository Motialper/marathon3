const express = require('express')
const app = express()


let fileupload = require("express-fileupload");
app.use(fileupload());

let cors = require('cors')
app.use(cors())

app.use(express.static('upload_img'))
app.use(express.static('upload_img_no_bg'))
app.use(express.static('upload_img_with_color'))
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const path = require('path');




app.post('/upload_img', function (req, res) {
  if (!req.files || !req.files.myFile) {
    return res.status(400).send('No file uploaded.');
  }
  
  console.log(req.files)

  const uploadedFile = req.files.myFile;
  
  
  let time = new Date().getTime();
  let fileName = `${time}_${uploadedFile.name}`;

  uploadedFile.mv(`${__dirname}/upload_img/${fileName}`, (err) => {
    if (err) {
      console.error(err); 
      return res.status(500).send(err);
    } else {

     

      const inputPath = `${__dirname}/upload_img/${fileName}`;
      const formData = new FormData();
      formData.append('size', 'auto');
      formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

      axios({
        method: 'post',
        url: 'https://api.remove.bg/v1.0/removebg',
        data: formData,
        responseType: 'arraybuffer',
        headers: {
          ...formData.getHeaders(),
          'X-Api-Key': 'qC1yTxAfNgkd6HnVCwVM1cGU',
        },
        encoding: null
      })
      .then((response) => {
        if(response.status != 200) return console.error('Error:', response.status, response.statusText);
      
        (async () => {
        fs.writeFileSync(`${__dirname}/upload_img_no_bg/no_bg:${fileName}`, response.data);
      }) ();
        res.send(fileName);
      })
      .catch((error) => {
        console.error('Request failed:', error);
        res.status(500).send(error.message);
      });
          }
        });

        
      })
      app.post('/upload_image_with_color', function (req, res) {
  
        console.log(req)
      
        
        let fileName=req.body.UploadedFileName;
        let color=req.body.color;

            const inputPath = `${__dirname}/upload_img_no_bg/no_bg:${fileName}`;
            const formData = new FormData();
            formData.append('size', 'auto');
            formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
            formData.append('bg_color', color)
            axios({
              method: 'post',
              url: 'https://api.remove.bg/v1.0/removebg',
              data: formData,
              responseType: 'arraybuffer',
              headers: {
                ...formData.getHeaders(),
                'X-Api-Key': 'qC1yTxAfNgkd6HnVCwVM1cGU',
              },
              encoding: null
            })
            .then((response) => {
              if(response.status != 200) return console.error('Error:', response.status, response.statusText);
            
              (async () => {
              fs.writeFileSync(`${__dirname}/upload_img_color/color:${fileName}`, response.data);
            }) ();
              res.send('color:'+fileName);
            })
            .catch((error) => {
                return console.error('Request failed:', error);
            });
                }
            );
      
      app.listen(5000)