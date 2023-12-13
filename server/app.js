const express = require('express');
const app = express();
const cors = require('cors');
const fileupload = require('express-fileupload');

app.use(cors());
app.use(fileupload());
app.use(express.static('upload_img'));
app.use(express.static('upload_img_no_bg'));
app.use(express.static('upload_img_color'));

const basePath = __dirname;

const sendToAPI = require('./send_to_api');

app.post('/upload_img', async function (req, res) {
    try {
        const time = new Date().getTime();
        const fileName = `${time}_${req.files.UploadedFile.name}`;
        const filePath = `${basePath}/upload_img/${fileName}`;
        const fileNameDes = `${basePath}/upload_img_no_bg/no_bg_${fileName}`;

        req.files.UploadedFile.mv(filePath, err => {
            if (err) {
                res.status(500).send(err);
            } else {
                (async () => {
                    await sendToAPI(filePath, '', fileNameDes);
                    res.send(fileName);
                })();
            }
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send(error.message);
    }
});

app.post('/upload_image_with_color', async function (req, res) {
    try {
        const fileName = req.body.UploadedFileName;
        const color = req.body.color;
        const inputPath = `${basePath}/upload_img_no_bg/${fileName}`;
        const fileNameDes = `${basePath}/upload_img_color/color_${fileName}`;

        (async () => {
            await sendToAPI(inputPath, color, fileNameDes);
            res.send(fileName);
        })();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send(error.message);
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
