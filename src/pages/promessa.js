import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";
import { useState } from "react";

export default function Promessa() {
    const [pao, setpao] = useState("");
    setTimeout(() => {
        document.title = "Promessa é dívida";
        setpao("é divída");
    }, 4000);
    return<>
        <Menu />
        <Container>
            Promessa {pao==="" ?"<Carregando>": pao}
            <img src='' alt="Girl in a jacket" width='500' height='600'></img>
        </Container> 
        <Footer />
    </>
}