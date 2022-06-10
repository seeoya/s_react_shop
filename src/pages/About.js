import { Link, Outlet } from "react-router-dom";
import css from "./About.module.css";

function About() {
    return (
        <>
            <Outlet>ㅁㄴㅇㅁㄴㅇ</Outlet>
            <div>어바웃입니다아</div>

            {/* 단순 CSS import가 아니라 module일 경우
                import에서 받아온 후 css.abc 등으로 클래스 해시값 가져와야 함. */}
            <div className={css.abc}>테스트용 디브</div>
            <Link to="/about">어바웃</Link>
            <Link to="member">멤버</Link>
            <Link to="location">로케이션</Link>
            <Outlet>안에 있는 엘리먼트 보여주는 자리</Outlet>
        </>
    );
}

export default About;
