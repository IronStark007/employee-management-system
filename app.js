global.express = require('express');
require('dotenv').config();

const app = express();
const employee = require('./routes/employee')


app.use(express.json())
app.use(process.env.EMPLOYEE_PREFIX_URL, employee);


let port = process.env.PORT || 8000;

app.listen(port,() => {
    console.log(`Connected to server on port: ${port}`);
});