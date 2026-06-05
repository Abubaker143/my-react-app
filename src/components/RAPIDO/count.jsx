import { useState } from "react";


function Counter() {

 const [count, setCount] = useState(1);
 const [count2, setCount2] = useState(2);
 const [name, setName] = useState("abu");

 return (
   <>
     <h1>{count}</h1>
     <h1>{name}</h1>


     <button onClick={() => setCount(count *5)}>
       Increment
     </button>
     <h1>{count2}</h1>
      <button onClick={() => setCount2(count2 /5)}>
       Decrement
     </button>
       < button onClick={() => setName("u")}>
         Change Name
         </button>
   </>
 );
}
export default Counter;