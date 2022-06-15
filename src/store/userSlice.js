import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: { name: "kim", age: 20 },

    // 기존 state 변경
    reducers: {
        changeName(state) {
            state.name = "park";
        },
        increaseAge(state, action) {
            // parameter 가져오려면 payload
            action = action.payload;

            state.age += action;
        },
        addName(state) {
            return [...state, "kim"];
        }
    }
});

// state 변경 함수 등 내보내기. 선언과 내보내가 한번에~
export let { changeName, increaseAge } = user.actions;
export default user;
