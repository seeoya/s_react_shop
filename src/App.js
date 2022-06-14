// react-bootstrap 홈페이지에서 npm으로 install
// 대문자 컴포넌트 (Button, Navbar, Nav 등등...)는 import 필요
// import { useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { createContext, useState } from "react";

import logo from "./logo.svg";

// js는 .js 없어도 사용 가능
// import { a, b } from "./data";

import Detail from "./pages/Detail";
import Main from "./pages/Main";
import About from "./pages/About";
import Event from "./pages/Event";

import "./App.css";

// 라이브러리 가져오기

import data from "./data/data";

let _PUBLIC_URL = process.env.PUBLIC_URL;

// state 보관함인 context 생성
export let Context1 = createContext();

function App() {
    // 페이지 이동 함수
    // <Link to={주소}> </Link> 대신 onClick={() => navigate("path")}로 기존 항목에 사용 가능
    let navigate = useNavigate();

    let [stock, setStock] = useState(321);
    let [shoes, setShoes] = useState(data);
    let [loading, setLoading] = useState(false);

    return (
        <>
            {loading && <Loading />}

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

                <div className="abc">테스트용 app의 디브</div>
                <Routes>
                    <Route exact path="/" element={<Main shoes={shoes} setShoes={setShoes} data={data} setLoading={setLoading} />} />

                    {/* <Route path="/detail" element={<Detail shoes={shoes} />}></Route> */}
                    {/* 에서 파라미터를 추가함. url parameter :id 이용 */}
                    <Route
                        path="/detail/:id"
                        element={
                            // state공유를 원하면 context로 감싸기
                            <Context1.Provider value={{ stock, shoes }}>
                                <Detail shoes={shoes} />
                            </Context1.Provider>
                        }
                    ></Route>

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

function Loading() {
    return (
        <div className="loading">
            <div className="loading-wrap">
                <div className="loading-wheel"></div>
            </div>
        </div>
    );
}

export default App;
