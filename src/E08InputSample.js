import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const change = (e) => {
        setText(e.target.value);
    }

    const reset = () => {
        setText('');
    }

    return (
        <div>
            <input onChange={change} value={text} />
            <button onClick={reset}>초기화</button>
            <div>
                <b>값 : </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;