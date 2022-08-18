global.express = require('express');
require('dotenv').config();

const app = express();
const employee = require('./routes/employee')


app.use(express.json())
app.use(process.env.EMPLOYEE_PREFIX_URL, employee);

let host = process.env.SERVER_HOST;
let port = process.env.SERVER_PORT;

app.listen((host,port), () => {
    console.log(`Connected to server at ${host}:${port}`);
});