import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "./Container";

function Layout({children}){
    return(
<>
<Header/>
<Navbar/>
<main>
    <Container>
    {children}
    </Container>
</main>
<Footer/>
</>
    )
}
export default Layout