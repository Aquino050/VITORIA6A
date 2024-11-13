import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";
import { useEffect, useState } from "react";

export default function Promessa() {
    const [pao, setpao] = useState("")
    useEffect(() => {
            setTimeout(async() => {
                document.title = "Promessa é dívida";
                const espera = await mudaPao("é uma dívida")
                setpao(espera);
            }, 4000)
    });
        return <>
            <Menu />
            <Container>
                Promessa {pao === "" ? <img src="./carregando.gif" width={100} height={70} /> : pao}
            </Container>
            <Footer />
        </>
}
function mudaPao(texto){
    return new Promise((resolva) => 
        setTimeout(() => {
            resolva(texto)       
        }, 1000));
}
