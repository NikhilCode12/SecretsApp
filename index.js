import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/',async (req,res)=>{
    try{
        const response = await axios.get('https://secrets-api.appbrewery.com/random');
        const secret = response.data.secret;
        const userName = response.data.username;
        res.render('index.ejs',{ secret : secret, user : userName });
    } catch(error){
        res.status(500).send(`Error : ${error.message}`);
    }
});

app.listen(port,()=>{ console.log(`Listening on port ${port}`) });