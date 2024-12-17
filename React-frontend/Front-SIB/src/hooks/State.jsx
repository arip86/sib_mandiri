import React, {useState} from "react";

function Counter(){
     const [count, setCount] = useState(0);
    //  membuat varible untuk menyimpan sebuah proses dengan useState

     return (
        <div>
            <h2>Contoh useState</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incerement</button> 
            {/* statenya adalah mengubah dari nilai 0 ke 1 dan seterusnya */}
            <button onClick={() => setCount(count - 1)}>Decremenet</button>
        </div>
     )
}
export default Counter;