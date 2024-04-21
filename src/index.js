const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const { PORT } = require('./config/server.config');
const connectToDB = require('./config/db.config')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())



app.use('/test', (req, res) => {
    res.json({ message: "All is well" })
})

app.listen(PORT, async () => {
    console.log(`Server started at PORT: ${PORT}`);
    await connectToDB();
});