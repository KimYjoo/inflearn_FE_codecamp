const checkNumber1 = () => {
    number = document.getElementById("phoneNumber1").value;
    if(number.length == 3){
        document.getElementById("phoneNumber2").focus();
    }
};
const checkNumber2 = () => {
    number = document.getElementById("phoneNumber2").value;
    if(number.length == 4){
        document.getElementById("phoneNumber3").focus();
    }
};
const checkNumber3 = () => {
    number = document.getElementById("phoneNumber3").value;
    if(number.length == 4){
        document.getElementById("getToken").disabled = false;
    }
};

let isConfirmed = false;
let isStarted = false;
const getToken = () => {
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("token").innerText = token;
    let time = 180;
    let min, sec;
    let interval = setInterval(function() {
        if(!isStarted) {
            isStarted = true;
            document.getElementById("auth").disabled = false;
            document.getElementById("getToken").disabled = true;

        }
        if(time >= 0) {
            min = String(Math.floor(time / 60));
            sec = String(time % 60).padStart(2, "0");
            document.getElementById("timer").innerText = min + ":" + sec;
            time -= 1;
            if(isConfirmed) {
                clearInterval(interval);
            }
        }
        else {
            clearInterval(interval);
        }
    }, 1000)
};

const authConfirmed = () => {
    isConfirmed = true;
    document.getElementById("auth").innerText = "인증 완료";
    document.getElementById("auth").disabled = true;
    document.getElementById("signup").disabled = false;
};

const checkSignup = () => {
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const location = document.getElementById("location");

    const emailError = document.getElementById("email-input-error");
    const emailFormError = document.getElementById("email-form-error");
    const nameError = document.getElementById("name-form-error");
    const password1Error = document.getElementById("password1-input-error");
    const password2Error = document.getElementById("password2-input-error");
    const passwordUncorrectError = document.getElementById("password-uncorrect-error");
    const locationError = document.getElementById("location-input-error");

    emailError.hidden = true;
    emailFormError.hidden = true;
    passwordUncorrectError.hidden = true;
    password1Error.hidden = true;
    password2Error.hidden = true;
    locationError.hidden = true;
    
    if(!email.value){
        //email 입력 없음
        emailError.hidden = false;
        email.focus();
    }
    else if(email.value.indexOf("@") == -1){
        //email의 입력 오류
        emailFormError.hidden = false;
        email.focus();
    }
    else if(!name.value){
        //name 입력 없음
        nameError.hidden = false;
        name.focus();
    }
    else if(!password1.value){
        //password1 입력 없음
        password1Error.hidden = false;
        password1.focus();
    }
    else if(!password2.value){
        //password2 입력 없음
        password2Error.hidden = false;
        password2.focus();
    }
    else if(password1.value != password2.value){
        //비밀번호가 다름
        passwordUncorrectError.hidden = false;
        password2.focus();
    }
    else if(!location.value){
        //location 입력 없음
        locationError.hidden = false;
        location.focus();
    }
    else {
        alert("코드캠프 가입을 축하드립니다!")
    }


};