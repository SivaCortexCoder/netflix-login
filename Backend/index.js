import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json());


const email = 'test123@gmail.com'
const password = 'test123'

app.post('/verify',(req,res)=>{
    console.log(req.body)

    if(req.body.email.toLowerCase()===email.toLowerCase() && req.body.password===password){
        res.send(true)
        console.log("sucess")
    }
    else{
        res.send(false)
        console.log("failed")
    }


})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});