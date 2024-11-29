import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";
import Table from 'react-bootstrap/Table';

export default function Pesportes() {
    return <>
        <Menu />
        <Container>
            <Container className="border border-sm border-success rounded-pill text-center col-sm-6">
                Lista de produtos de esportes
            </Container>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th>Preço</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>

                        </tr>
                        <tr>
                           
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Container >
        <Footer />
    </>
}