import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "../data/data";

let _PUBLIC_URL = process.env.PUBLIC_URL;

function Main() {
    let [shoes, setShoes] = useState(data);

    return (
        <>
            <div className="main-banner"></div>

            <img src={_PUBLIC_URL + "/img/sub_banner1.jpg"} alt="" />
            <Container className="sub-banner">
                <Row>
                    {shoes.map((shoes, i) => {
                        return <SubBannerItem key={shoes.id} shoes={shoes} tel={"010" + i} />;
                    })}
                </Row>
            </Container>
        </>
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

export default Main;
