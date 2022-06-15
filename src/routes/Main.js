import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

let _PUBLIC_URL = process.env.PUBLIC_URL;
let ajaxPage = 1;

function Main(props) {
    let { shoes, setShoes, data, setLoading } = props;
    let [moreBtn, setMoreBtn] = useState(true);

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
            {moreBtn && (
                <button
                    onClick={() => {
                        setLoading(true);
                        ajaxPage = ajaxPage + 1;

                        if (ajaxPage < 4) {
                            axios
                                .get("https://codingapple1.github.io/shop/data" + ajaxPage + ".json")
                                // .get("https://codingapple1.github.io/shop/data" + ajaxPage + ".json")
                                .then((result) => {
                                    // 성공했을 때
                                    setShoes([...shoes, ...result.data]);
                                    setLoading(false);
                                })
                                .catch(() => {
                                    // 실패했을 때
                                    alert("통신 실패");
                                    setLoading(false);
                                });
                        } else {
                            ajaxPage = ajaxPage - 1;
                            alert("자료가 없습니다.");
                            setLoading(false);
                            setMoreBtn(false);
                        }

                        // 서버로 데이터 전송하는 post
                        // axios.post("/asdasd", { name: "kim" });

                        // 여러 post 전송할 땐 promise로
                        // '전부 성공했을 때' 조건은 then 아래에 작성 가능
                        // Promise.all([axios.get("url1"), axios.get("url2")]).then(() => {
                        //     // 둘 다 성공했을 때 여기에 작성
                        // });

                        // js 기본 함수인 fetch로 가져올 수도 있음
                        // 이 땐 .json 으로 json 형식 변환 필요
                        // fetch("https://codingapple1.github.io/shop/data2.json")
                        //     .then((response) => response.json())
                        //     .then((data) => {
                        //         // console.log(data);
                        //         setShoes([...shoes, ...data]);
                        //     });
                    }}
                >
                    더보기
                </button>
            )}
        </>
    );
}

function SubBannerItem(props) {
    let { shoes, tel } = props;

    return (
        <Col sm={4} className="item">
            <div className="img-wrap">
                <img src={_PUBLIC_URL + "/img/banner/sub_banner" + shoes.id + ".jpg"} alt="" />
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
