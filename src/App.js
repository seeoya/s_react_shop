// react-bootstrap 홈페이지에서 npm으로 install
// 대문자 컴포넌트 (Button, Navbar, Nav 등등...)는 import 필요
// import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";

import logo from "./logo.svg";

// js는 .js 없어도 사용 가능
// import { a, b } from "./data";

import Detail from "./pages/Detail";
import Main from "./pages/Main";

import "./App.css";

// 라이브러리 가져오기

// let _PUBLIC_URL = process.env.PUBLIC_URL;

function App() {
    return (
        <>
            <div className="App">
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/">쇼핑몰 DEMO</Link>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/">홈</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/detail">디테일</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/about">어바웃</Link>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/about" element={<div>어바웃</div>} />
                </Routes>
            </div>
        </>
    );
}

export default App;
