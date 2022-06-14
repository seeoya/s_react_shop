import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Link } from "react-bootstrap";
import styled, { css } from "styled-components";

let _PUBLIC_URL = process.env.PUBLIC_URL;

let DfBtn = styled.button`
    padding: 10px;
    background: #ffff00;
    color: #000;
`;

let DefaultBox = styled.div`
    padding: 30px;
    border: 1px solid #000;

    // 네스팅 가능
    button {
        border: 3px solid;

        &.pp {
            font-size: 2rem;
        }
    }
`;

// 선언한 스타일 재사용
let DdBtn = styled(DfBtn)`
    // props 가져오기, if문 사용 가능
    color: ${(props) => props.color || "blue"};

    ${(props) =>
        props.big &&
        css`
            width: 100px;
            height: 60px;
        `}
`;

function Detail(props) {
    let [ttestt, setTtestt] = useState(true);
    let [iValue, setIValue] = useState("");
    let [tab, setTab] = useState(0);

    useEffect(() => {
        // mount, update 될 때 (렌더링 될 때) 실행됨.
        // html 렌더링 이후에 작동.
        // 어려운 연산, 서버에서 데이터 가져오기, 타이머 등 여기에 적으면 좋음

        if (ttestt) {
            setTimeout(() => {
                let box = document.getElementsByClassName("ttestt")[0];
                if (box) {
                    box.style.display = "none";
                    setTtestt(false);
                    console.log("use Effect 실행");
                }
            }, 1000);
        }

        // clean up. 아래 return은 useEffect 실행되기 전에 실행됨.
        return () => {
            // 클린업 함수 위치
            // 기존 타이머 제거하는 등.
            // 초기 mount 시에는 실행 안 되지만 unmount 시에는 실행됨
            console.log("리턴 먼저 실행");
        };
    }, [ttestt]);
    // dependency
    // [] 안에 state를 넣으면 해당 state가 변경될 때만 변경. []로 비워두면 한번만 실행

    useEffect(() => {
        let a = /\D/g;

        if (a.test(iValue)) {
            alert("숫자만 입력하세요.");
            setIValue(iValue.replace(a, ""));
        }
    }, [iValue]);

    // :id 자리에 적은 거
    let { id } = useParams(),
        // arr[id]로 찾을 경우, 정렬 등으로 state 변경 시 문제 발생
        shoe = props.shoes.find((o) => o.id == id);

    if (shoe) {
        return (
            <>
                <div>{iValue}</div>
                <input type="text" placeholder="숫자만 입력하세요." onChange={changeIValue} value={iValue} />
                <br />
                <button onClick={() => setTtestt(!ttestt)}>박스를 {ttestt ? "끕니다" : "켭니다"}</button>
                {ttestt ? (
                    <div className="ttestt" style={{ background: "yellow" }}>
                        시간제 or 토글 박스
                    </div>
                ) : null}

                <DefaultBox>
                    <DfBtn>123</DfBtn>
                    <DdBtn className="pp" color="#f0f">
                        1234
                    </DdBtn>
                    <DdBtn big>1234</DdBtn>
                </DefaultBox>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={_PUBLIC_URL + "/img/banner/sub_banner" + shoe.id + ".jpg"} alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="col-md-6">
                            <h4 className="pt-5">
                                {shoe.title} {id}
                            </h4>
                            <p>{shoe.content}</p>
                            <p>{shoe.price}</p>
                            <button className="btn btn-danger">주문하기</button>
                        </div>
                    </div>
                </div>

                <Nav variant="pills" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link onClick={() => setTab(0)} eventKey="link0">
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => setTab(1)} eventKey="link1">
                            Option 2
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => setTab(2)} eventKey="link2">
                            Option 3
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* if문을 컴포넌트로 분리할 수도 있음  */}
                <TabInner tab={tab} />
            </>
        );
    } else {
        return (
            <>
                <div>{id} 의 결과 아이템이 없습니다.</div>
            </>
        );
    }

    function changeIValue(e) {
        setIValue(e.target.value);
    }
}

// props 재지정이 귀찮으면 바로 parameter에서 {} 로 props 가져올 수 있음
function TabInner({ tab }) {
    // let { tab } = props;

    // switch (tab) {
    //     case 0:
    //         return <div>내용0</div>;
    //     case 1:
    //         return <div>내용1</div>;
    //     case 2:
    //         return <div>내용2</div>;
    // }

    // array 이용해서 이런 식으로도 되겠네요
    // 생각 못했네...
    return [<div>내용0입니다</div>, <div>내용1입니다</div>, <div>내용2라네요</div>][tab];
}

export default Detail;
