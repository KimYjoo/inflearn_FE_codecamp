let isStarted = false;

let auth = () => {
    if(isStarted === false) {
    // if(true) {
        //타이머가 작동중이 아닐때
        isStarted = true;
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("target").innerText = token;
        document.getElementById("target").style.color = "#" + token;
    
        let time = 180;
        let timer = setInterval(function() {
            if (time >= 0){
                let min = Math.floor( time / 60 );
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec;
                document.getElementById("finish").disabled = false;
                time = time - 1;
            } else {
                document.getElementById("finish").disabled = true;
                isStarted = false;
                clearInterval(timer)
            }
        }, 1)
    
    }
    else{
        //타이머가 작동중일때
        // document.getElementById("finish").disabled = false;
    }

}


let changeFocus2 = () => {
    let number1 = document.getElementById("phoneNumber__input1").value;
    console.log(number1);
    if(number1.length == 3){
        document.getElementById("phoneNumber__input2").focus();
    }
}
let changeFocus3 = () => {
    let number2 = document.getElementById("phoneNumber__input2").value;
    console.log(number2);
    if(number2.length == 4){
        document.getElementById("phoneNumber__input3").focus();
    }
}