import { useState } from "react";

// export default function quiz0203Page() {

//     function getAuthNumber() {
//         let authNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
//         document.getElementById("authNumber").innerText = authNumber;
//     }

//     return(
//         <>
//             <div id="authNumber">000000</div>
//             <button onClick={getAuthNumber}>인증번호전송</button>
//         </>
//     )
// }

export default function quiz0203Page() {
    const [authNumber, setAuthNumber] = useState('000000');

    function onClickGetAuthNumber() {
        let authNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
        setAuthNumber(authNumber);
    }

    return(
        <>
            <div>{authNumber}</div>
            <button onClick={onClickGetAuthNumber}>인증번호전송</button>
        </>
    )
}