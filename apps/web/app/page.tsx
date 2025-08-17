import { client } from "@repo/db/client";  
 
 
   

export default  async function Home() { // in next js  we can make the function async
const user1 =await client.user.findFirst();
  return (
    <div>
      {user1?.name}
      {user1?.email}
     


    </div>
    
   
  );
}
