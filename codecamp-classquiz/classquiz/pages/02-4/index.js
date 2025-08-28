import { useState } from 'react'
import {
    ErrorMassage,
} from '../../styles/quiz024'

export default function quiz0204Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const [errorEmailCheck, setEmailCheck] = useState('');
    const [errorPasswordCheck, setPasswordCheck] = useState('');
    

    function onChangeEmail(event) {
        setEmail(event.target.value);
    }
    function onChangePassword(event) {
        setPassword(event.target.value);
    }
    function onChangeCheckPassword(event) {
        setCheckPassword(event.target.value);
    }
    function onClickCheckRegister() {
        if (!email.includes('@')){
            setEmailCheck('이메일 형식을 확인해주세요. @가 없음');
        } else if (password !== checkPassword) {
            setPasswordCheck('패스워드를 확인해주세요. 패스워드가 다름');
        } else {
            setEmailCheck('');
            setPasswordCheck('');
        }
    }

    return(
        <div>
            <div>
                <input onChange={onChangeEmail}/>
                <ErrorMassage>{errorEmailCheck}</ErrorMassage>
                <input type='password' onChange={onChangePassword}/>
                <input type='password' onChange={onChangeCheckPassword}/>
                <ErrorMassage>{errorPasswordCheck}</ErrorMassage>
            </div>
            <button onClick={onClickCheckRegister}>가입하기</button>
        </div>
    )
}