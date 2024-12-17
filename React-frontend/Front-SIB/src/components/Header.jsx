

function Header(){
    // css inline style
    const headerStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    };
    const titleStyle = {
        fontSize: '2.5rem',
        margin: '0',
    };
    const menuStyleUl = {
        listStyle: 'none',
        padding: '0',
        margin: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
    };
  
    return (

        <nav>
            <header style={headerStyle}>
                <h1 style={titleStyle}>PT. Surya Laksana Sejahtera</h1>
                <p>Perusahaan bergerak dibidang Tambang</p>
                </header>
              
            {/* <ul style={menuStyleUl}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
        </nav>
    )
}
export default Header;