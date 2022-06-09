import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <>
            <Outlet>ㅁㄴㅇㅁㄴㅇ</Outlet>
            <div>어바웃입니다아</div>
            <Link to="/about">어바웃</Link>
            <Link to="member">멤버</Link>
            <Link to="location">로케이션</Link>
            <Outlet>안에 있는 엘리먼트 보여주는 자리</Outlet>
        </>
    );
}

export default About;
