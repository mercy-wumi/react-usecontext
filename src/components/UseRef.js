import React, { useRef } from 'react'
import Nav from './Nav'

const UseRef = () => {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
        alert(inputEl.current.value)
    };
    return (
        <>
            <Nav />
            <main>
                <input ref={inputEl} type="text" />
                <button onClick={onButtonClick}>submit</button>
                <p>The useRef prints out the word typed in and focus on the input text</p>
            </main>
        </>
    )
}

export default UseRef