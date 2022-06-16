import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
export let { changeName, increaseAge } = user.actions;

// redux
// 파일 하나에 state 저장해두고 props 없이 공유해서 사용
// npm install @reduxjs/toolkit react-redux

let stock = createSlice({
    name: "stock",
    initialState: [10, 11, 12]
});

let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
        { id: 31, name: "sad aas dwq fas", count: 164 }
    ],

    reducers: {
        increaseCount(state, action) {
            let { id, num } = action.payload;

            let n = state.findIndex((o) => {
                return o.id == id;
            });

            state[n].count += num;
        },
        addCart(state, action) {
            let { id, title } = action.payload;

            let n = state.findIndex((o) => {
                return o.id == id;
            });

            if (n < 0) {
                state.push({ id: id, name: title, count: 1 });
                alert("장바구니에 상품이 추가되었습니다.");
            } else {
                state[n].count++;
                alert("장바구니에 상품이 존재합니다.\n수량이 추가되었습니다.");
            }
        }
    }
});

export let { increaseCount, addCart } = cart.actions;

let recent = createSlice({
    name: "recent",
    initialState: [],

    reducers: {
        changeRecent(state, action) {
            // 최근 본 글 목록
            let recent = localStorage.getItem("recent");
            let list = recent ? [...JSON.parse(recent)] : [];

            list.unshift(action.payload);

            // list = [...new Set(list)];
            list = Array.from(new Set(list));
            // 중복제거 set 자료형 > array로 다시 변경하면 편법 가능
            // 아니면 조건문으로 하면 될 듯

            let l = JSON.stringify(list),
                s = JSON.stringify(state);

            if (l != s) {
                localStorage.setItem("recent", JSON.stringify(list));
                return list;
            }
        }
    }
});

export let { changeRecent } = recent.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer,
        recent: recent.reducer
    }
});
