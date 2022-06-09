// react-bootstrap 홈페이지에서 npm으로 install
// 대문자 컴포넌트 (Button, Navbar, Nav 등등...)는 import 필요
import { useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
// js는 .js 없어도 사용 가능
// import { a, b } from "./data";
import data from "./data";

let _PUBLIC_URL = process.env.PUBLIC_URL;

function App() {
    let [shoes, setShoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">쇼핑몰 DEMO</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">a</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="main-banner"></div>

            <img src={_PUBLIC_URL + "/img/sub_banner1.jpg"} alt="" />
            <Container className="sub-banner">
                <Row>
                    {shoes.map((shoes, i) => {
                        return <SubBannerItem key={shoes.id} shoes={shoes} tel={"010" + i} />;
                    })}
                </Row>
            </Container>
        </div>
    );
}

function SubBannerItem(props) {
    let { shoes, tel } = props;

    return (
        <Col sm={4} className="item">
            <div className="img-wrap">
                <img src={_PUBLIC_URL + "/img/banner/sub_banner" + shoes.id + ".jpg"} alt="" />{" "}
            </div>
            <div>
                <h4>{shoes.title}</h4>
                <div>{shoes.content}</div>
                <div>{tel}</div>
            </div>
        </Col>
    );
}
export default App;
