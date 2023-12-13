const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

module.exports = async function sendToAPI(fileName, color = '', fileNameDes) {
    try {
        const inputPath = fileName;
        const formData = new FormData();
        formData.append('size', 'auto');
        formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

        if (color !== '') {
            formData.append('bg_color', color);
        }

        const response = await axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
                ...formData.getHeaders(),
                'X-Api-Key': '7C8s8WBCSYzfSm2KBx44vsjE',
            },
            encoding: null
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        fs.writeFileSync(fileNameDes, response.data);

        return `color_${fileName}`;
    } catch (error) {
        console.error('Request failed:', error);
        throw error; 
    }
};
