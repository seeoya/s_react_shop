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
            // state.find((o) => {
            //     if (o.id == id) {
            //         o.count += num;
            //     }
            // });
        },
        addCart(state, action) {
            state.push({ id: state[state.length - 1].id + 1, name: action.payload.title, count: 2141 });

            // let { title: name } = action.payload;

            // state.push({ id: state[state.length].id + 1, name: name, count: 321 });
        }
    }
});

export let { increaseCount, addCart } = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer
    }
});
