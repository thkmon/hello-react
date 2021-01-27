import React, { useState } from 'react';

function MultiInputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickName: ''
    });

    const { name, nickName } = inputs;

    const change = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        // 리액트에서 객체 업데이트는 우선 객체를 복사해야 함.

        setInputs({
            // 스프레드 문법으로 객체 복사 : 불변성을 지켜야 리액트가 상태변화 감지 가능
            ...inputs,
            [name]: value
        });
    };

    const reset = () => {
        setInputs({
            name: '',
            nickName: ''
        });
    };
    
    return (
        <div>
            <input name="name" placeholder="이름" onChange={change} value={name} />
            <input name="nickName" placeholder="닉네임" onChange={change} value = {nickName} />
            <button onClick={reset}>초기화</button>
            <div>값 : {name} / {nickName}</div>
        </div>
    );
}

export default MultiInputSample;