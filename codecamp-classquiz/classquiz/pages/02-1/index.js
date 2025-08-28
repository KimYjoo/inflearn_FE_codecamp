import { useState } from "react"

export default function quiz0201() {

    const [helloWorld, setHelloWorld] = useState("안녕하세요");

    function onClickChangeButton() {
        setHelloWorld("반갑습니다.");
    }
    return (
        <>
            <button onClick={onClickChangeButton}>{helloWorld}</button>
        </>
       
    )
}