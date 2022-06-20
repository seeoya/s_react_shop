import React, { useState, useEffect, useTransition, useDeferredValue } from "react";

function New() {
    let a = new Array(10000).fill(0);

    const [name, setName] = useState("");

    // 함수
    let [isPending, startTransition] = useTransition();

    // 변동사항이 생기면 늦게 처리함
    let bbb = useDeferredValue(name);

    return (
        <div style={{ background: "palegoldenrod" }}>
            <h1>뉴페이지</h1>

            <input
                type="text"
                onChange={(e) => {
                    // 성능 저하 부분에 콜백으로 추가
                    startTransition(() => {
                        // 브라우저가 동시 처리하지 않고, 이후에 이 작업 처리하도록 미룸
                        // input의 글자를 먼저 띄우고 아래를 실행함
                        setName(e.target.value);
                    });
                }}
            />

            {isPending
                ? "로딩중"
                : a.map((o, i) => {
                      return <div key={i}>{name}</div>;
                  })}
        </div>
    );
}

export default New;
