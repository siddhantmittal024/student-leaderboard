const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
import cookieParser from 'cookie-parser';
const dotenv = require('dotenv');

const app = express();

dotenv.config();



const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Mount Routes

app.get('/',(req,res)=>{
    res.send('Hello!')
})

app.listen(PORT, () => {
  console.log(`HELLO FROM THE SERVER!!RUNNING ON PORT ${PORT}`);
});
