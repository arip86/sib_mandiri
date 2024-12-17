//file child untuk lifting
function Lift({input, onInputChange}){
    return(
        <div>
            <h2>Contoh Lifting</h2>
            <input type="text" value={input} 
            onChange={(e) => onInputChange(e.target.value)} />
            <p>Input : {input}</p>
        </div>
    );
}

export default Lift;