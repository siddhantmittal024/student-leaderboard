const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
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

if(process.env.NODE_ENV==='production'){
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')));
}

app.listen(PORT, () => {
  console.log(`HELLO FROM THE SERVER!!RUNNING ON PORT ${PORT}`);
});
