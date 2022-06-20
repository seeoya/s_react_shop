// react-bootstrap 홈페이지에서 npm으로 install
// 대문자 컴포넌트 (Button, Navbar, Nav 등등...)는 import 필요
// import { useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { createContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import logo from "./logo.svg";

// js는 .js 없어도 사용 가능
// import { a, b } from "./data";

import Detail from "./routes/Detail";
import Main from "./routes/Main";
import About from "./routes/About";
import Event from "./routes/Event";
import Cart from "./routes/Cart";

import "./App.css";

// 라이브러리 가져오기

import data from "./data/data";

let _PUBLIC_URL = process.env.PUBLIC_URL;

// state 보관함인 context 생성
export let Context1 = createContext();

function App() {
    // 최근 본 글 목록
    // detail.js로 이동
    // useEffect(() => {
    //     if (!localStorage.getItem("recent")) {
    //         localStorage.setItem("recent", JSON.stringify([]));
    //     }
    // });

    // 페이지 이동 함수
    // <Link to={주소}> </Link> 대신 onClick={() => navigate("path")}로 기존 항목에 사용 가능
    let navigate = useNavigate();

    let [stock, setStock] = useState(321);
    let [shoes, setShoes] = useState(data);
    let [loading, setLoading] = useState(false);

    // localstorage 사용 + json
    let obj = { name: "kim" };
    // 문자열로 변환
    localStorage.setItem("data", JSON.stringify(obj));
    // text로 가져옴
    let text = localStorage.getItem("data");
    // console.log(text);
    // console.log(JSON.parse(text));

    let state = useSelector((state) => {
        return state;
    });
    let dispatch = useDispatch();

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
                            <NavDropdown title="디테일" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1" onClick={() => navigate("/detail/0")}>
                                    0
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2" onClick={() => navigate("/detail/1")}>
                                    1
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.3" onClick={() => navigate("/detail/2")}>
                                    2
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.4" onClick={() => navigate("/detail/3")}>
                                    3
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link onClick={() => navigate("/detail/0")}>디테일</Nav.Link> */}

                            <Nav.Link onClick={() => navigate("/about")}>어바웃</Nav.Link>
                            <Nav.Link onClick={() => navigate("/event")}>이벤트</Nav.Link>
                            <Nav.Link onClick={() => navigate("/cart")}>장바구니</Nav.Link>

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
                    <Route path="/cart" element={<Cart />}></Route>

                    {/* 모든 페이지 (404 페이지) */}
                    <Route path="*" element={<div>없는 페이지. 404 페이지</div>} />
                </Routes>

                <Recent recent={state.recent} />
                <h3>스테이트</h3>
                {state.recent}
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

function Recent(props) {
    let recent = props.recent;
    console.log(recent);

    return (
        <div>
            <h4>최근 본 아이템</h4>
            <div>
                {recent.map((o) => {
                    let fData = data.find((p) => p.id == o);
                    console.log(fData);
                    if (fData) {
                        return (
                            <div key={o}>
                                <Link to={`/detail/${fData.id}`}>{fData.title}</Link>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default App;
