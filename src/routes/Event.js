import { Link, Outlet } from "react-router-dom";

function Event() {
    return (
        <>
            <Link to="/event">이벤트</Link>
            <Link to="one">이벤1</Link>
            <Link to="two">이벤2</Link>

            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </>
    );
}

export default Event;
