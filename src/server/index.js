// src/server/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path"); 
const { analyzeUrl } = require("./analyze");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());

const API_KEY = process.env.API_KEY;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.post("/", async (req, res) => {
    const { URI } = req.body;
    const analysisResult = await analyzeUrl(URI, API_KEY);

    if (analysisResult.msg) {
        return res.send({ msg: analysisResult.msg, code: analysisResult.code });
    }

    return res.send({ sample: analysisResult.sample, code: analysisResult.status });
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
