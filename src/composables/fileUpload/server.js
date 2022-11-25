const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')

const app = express();

app.use(express.static('public'));
app.use(cors()); 
app.use(fileUpload());

app.post('/upload', (req, res) => {
    if (!req.files) {
        return res.status(500).send({msg: "file is not found"});
    }

    const file = req.files.file;

    const dirnameSplit = __dirname.split('\\');
    let dirname = "";

    for (let i = 0; i < 7; i++) {
        dirname += dirnameSplit[i] + "\\";
    }

    file.mv(`${dirname}/public/${file.name}`, function (err) {
        if (err) {
            console.log(err);
            console.log(dirname);
            return res.status(500).send({msg: "Error occurred"});
        }
        return res.send({name: file.name, path: `/${file.name}`})
    });
});

app.listen(4500, () => {
    console.log(`server is running at port 4500`);
})