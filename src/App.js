// react-bootstrap 홈페이지에서 npm으로 install
// 대문자 컴포넌트 (Button, Navbar, Nav 등등...)는 import 필요
// import { useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";

import logo from "./logo.svg";

// js는 .js 없어도 사용 가능
// import { a, b } from "./data";

import Detail from "./pages/Detail";
import Main from "./pages/Main";
import About from "./pages/About";
import Event from "./pages/Event";

import "./App.css";

// 라이브러리 가져오기

// let _PUBLIC_URL = process.env.PUBLIC_URL;

function App() {
    // 페이지 이동 함수
    // <Link to={주소}> </Link> 대신 onClick={() => navigate("path")}로 기존 항목에 사용 가능
    let navigate = useNavigate();

    return (
        <>
            <div className="App">
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/">쇼핑몰 DEMO</Link>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate("/")}>홈</Nav.Link>
                            <Nav.Link onClick={() => navigate("/detail")}>디테일</Nav.Link>
                            <Nav.Link onClick={() => navigate("/about")}>어바웃</Nav.Link>
                            <Nav.Link onClick={() => navigate("/event")}>이벤트</Nav.Link>

                            {/* 숫자 넣으면 앞으로 뒤로가기 됨 */}
                            <Nav.Link onClick={() => navigate(1)}>앞으로가기</Nav.Link>
                            <Nav.Link onClick={() => navigate(-1)}>뒤로가기</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/detail" element={<Detail />}></Route>
                    <Route path="/about" element={<About />}>
                        {/* Nested Routes */}
                        {/* 태그를 열고 사이에 넣어줌 */}
                        {/* /about/member */}
                        <Route path="member" element={<div>멤버임</div>} />
                        {/* /about/location */}
                        <Route path="location" element={<div>로케이션임</div>} />
                    </Route>
                    <Route path="/event" element={<Event />}>
                        <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
                        <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
                    </Route>

                    {/* 모든 페이지 (404 페이지) */}
                    <Route path="*" element={<div>없는 페이지. 404 페이지</div>} />
                </Routes>
            </div>
        </>
    );
}

export default App;
