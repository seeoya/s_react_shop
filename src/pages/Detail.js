import { useParams } from "react-router-dom";
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
    // :id 자리에 적은 거
    let { id } = useParams(),
        // arr[id]로 찾을 경우, 정렬 등으로 state 변경 시 문제 발생
        shoe = props.shoes.find((o) => o.id == id);

    if (shoe) {
        return (
            <>
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
            </>
        );
    } else {
        return (
            <>
                <div>{id} 의 결과 아이템이 없습니다.</div>
            </>
        );
    }
}

export default Detail;
