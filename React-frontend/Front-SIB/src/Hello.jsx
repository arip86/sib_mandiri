function Hello(props){
    // const name = "Akhmad Arip"; contoh deklarasi variable 
    const {name} = props; //contoh deklarasi props
    return (
        <div>
        <h1>Hello React </h1>
        <p>Saya {name} - Frontend Enginer</p>
        </div>
        // pemanggilan jsx menggunakan {}
);    
}
export default Hello;