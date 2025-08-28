// export default function quiz0202() {

import { useState } from "react";

//     function counter() {
//         let number = Number(document.getElementById("countNumber").innerText) + 1
//         document.getElementById("countNumber").innerText = String(number);
//     }
//     return( 
//         <>
//             <div>
//                 <div id="countNumber">0</div>
//                 <button onClick={counter}>카운트증가</button>
//             </div>
           
//         </>
       
//     )
// }

export default function quiz0202() {
    const [number, setNumber] = useState(0);

    function counter() {
        setNumber(number + 1);
    }

    return( 
        <>
            <div>
                <div>{number}</div>
                <button onClick={counter}>카운트증가</button>
            </div>
        </>
    )
}