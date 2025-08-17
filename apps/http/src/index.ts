import    express from 'express';
const app=express();
app.use(express.json());
import {client} from "@repo/db/client"

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.post('/data',async(req,res)=>{
    const {name,email,password}=req.body;
    await client.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }


    })

    res.json({msg:"yes done creating user "})
})
app.listen(800, () => {
    console.log("Server is running on port 800");
})