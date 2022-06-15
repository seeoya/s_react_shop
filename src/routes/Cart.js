import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, increaseAge, increaseCount, decreaseCount } from "../store";

function Cart() {
    // redux state 가져오기
    let state = useSelector((state) => {
        return state;
    });

    let dispatch = useDispatch();

    return (
        <div>
            <h4>
                {state.user.name}({state.user.age})의 장바구니
            </h4>
            <button onClick={() => dispatch(changeName())}>이름변경</button>
            <button onClick={() => dispatch(increaseAge(2))}>나이변경</button>
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
