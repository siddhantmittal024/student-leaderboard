const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

const studentRecord = require('./routes/studentRecord');

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Mount Routes
app.use('/api/student',studentRecord);

// app.get('/',(req,res)=>{
//     res.send('Hello!')
// })

app.listen(PORT, () => {
  console.log(`HELLO FROM THE SERVER!!RUNNING ON PORT ${PORT}`);
});
