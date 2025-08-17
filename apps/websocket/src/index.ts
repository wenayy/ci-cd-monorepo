import { WebSocketServer }  from "ws";
import {client} from "@repo/db/client"

const server = new WebSocketServer({ port: 8080 });

server.on("connection",async(socket)=>{
    await client.user.create({
        data:{
            name:Math.random().toString(36).substring(7,12),
            password:Math.random().toString(36).substring(7,12),
            email:"vinayjjoshi.310@gmail.c"
        }
    })
    socket.send("hi there u are connected in server")
})

