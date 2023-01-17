import { useMemo } from "react";
import { useState, useEffect, memo } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, increaseAge, increaseCount, decreaseCount } from "../store";

// memo로 감싸면 특정 상황에서만 렌더링
// props가 변할 때만 재렌더링됨
// 기존 props와 같은지 비교 작업을 하므로 props가 길고 복잡하면 비교 작업에 시간이 걸림
// 따라서 꼭 필요한 무거운 comp에만 붙일 것

// let Child = memo(() => {
//     console.log("재렌더링");
//     return <div>자식 di123v</div>;
// });

// function ffunc() {
//     console.log("ffunc 실행");
//     return;
// }

function Cart() {
    // redux state 가져오기
    let state = useSelector((state) => {
        return state;
    });

    let dispatch = useDispatch();

    const [count, setCount] = useState(0);
    const [ccc, setCcc] = useState(0);

    // useMemo는 필요할 때만 렌더링해줌
    // let ress = useMemo(() => {
    //     ffunc();
        //dependency로 한 번만 실행되게 할 수 있음
        // 혹은 props 변했을 때만
    // }, [ccc]);

    return (
        <div>
            {/* <Child count={count} /> */}
            {/* <Child /> */}

            {/* {count} */}
            {/* {ccc}
            <button onClick={() => setCount(count + 1)}>버튼버튼</button>
            <button onClick={() => setCcc(ccc + 1)}>버튼1버튼</button> */}
            <br />
            <h4>
                {state.user.name}({state.user.age})의 장바구니
            </h4>
            <button onClick={() => dispatch(changeName())}>이름변경(store/state)</button>
            <button onClick={() => dispatch(increaseAge(2))}>나이변경(store/state)</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>count</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch(increaseCount({ id: item.id, num: 1 }));
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => {
                                            dispatch(increaseCount({ id: item.id, num: -1 }));
                                        }}
                                    >
                                        -
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;
