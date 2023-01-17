import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link, Outlet } from "react-router-dom";

function Event() {
    // for (let i = 0; i < 1e10; i++) {}

    axios.get("https://codingapple1.github.io/userdata.json").then((data) => {
        console.log(data.data);
    });

    let arr = [];

    // for (let i = 0; i < 5000; i++) {
    //     arr.push(Math.floor(Math.random(1) * 3));
    // }

    return (
        <>
            <br />
            <Link to="/event">이벤트</Link>
            <Link to="one">이벤1</Link>
            <Link to="two">이벤2</Link>
            <br />
            <br />

            <h4>오늘의 이벤트</h4>

            <Outlet></Outlet>
            <br />

            {arr.map((o, i) => {
                // return o;
                return <img key={i} src={"./img/banner/sub_banner" + o + ".jpg"} alt="" />;
            })}
            {/* {
                {
                    a: <div>a입니다</div>,
                    b: <div>b입니다</div>,
                    c: <div>c입니다</div>,
                    d: <div>d입니다</div>
                }["c"]
            } */}
        </>
    );
}

export default Event;
