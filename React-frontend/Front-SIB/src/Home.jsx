// import Hello from "./Hello"
function Home(){
    // const fruits = ["Apple", "Banana", "Chery"];
        // const handleClick = () =>{ //arrow function
        //     alert("Button clicked");
        // }

        let obj1 = {nama: "Alice"};
        let obj2 = {age: 25}

        let combineObject = {...obj1, ...obj2};
        console.log(combineObject);
    return(
        <main>
            {/* <button onClick={handleClick}>Click Me</button> */}
            {/* <ul> */}
                {/* contoh list atau menampilkan data lebih dari 1 
                dan datanya berupa array atau object */}
                {/* {fruits.map((fruit, index) =>(
                    <li key={index}>{fruit}</li>
                ))}
            </ul> */}

        {/* <Hello name="Arip"/>
        <Hello name="Andi"/>
        <Hello name="Ali"/>
        <Hello name="Aji"/> */}
        </main>
    )
}
export default Home