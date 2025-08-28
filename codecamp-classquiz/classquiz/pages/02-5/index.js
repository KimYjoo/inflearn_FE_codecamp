import { useState } from 'react'
import {
    Wrapper,
    WrapperHeader,
    AppIcon,
    AppTitle,
    WrapperBody,
    LoginBody,
    LoginEmailBox,
    LoginPasswordBox,
    InputBox,
    DeleteAllButton,
    LoginInput,
    LoginInputError,
    ButtonBody,
    LoginButton,
    LoginOptionBody,
    OptionBox,
    OptionDivideLine,
    LoginExtra,
    KakaoLoginButton,
    KakaoIcon,
    KakaoLoginTitle,
} from '../../styles/quiz025'

export default function quiz025Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function onChangeEmail(event) {
        setEmail(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onClickLogin() {
        if(!email || !email.includes('@')){
            setEmailError('이메일 주소를 다시 확인해주세요.')
        } else if(!password||!(password.length >= 8 && password.length <= 16)){
            setPasswordError('8~16자의 영문, 숫자, 특수 문자의 사용 가능합니다.')
        } else {
            setEmailError('')
            setPasswordError('')
        }
    }

    return(
        <Wrapper>
            <WrapperHeader>
                <AppIcon src='/AppIcon.png'/>
                <AppTitle>잇츠로드</AppTitle>
            </WrapperHeader>
            <WrapperBody>
                <LoginBody>
                    <LoginEmailBox>
                        <InputBox>
                            <LoginInput onChange={onChangeEmail}/>
                            <DeleteAllButton src='/deleteIcon.png'/>
                        </InputBox>
                        <LoginInputError>{emailError}</LoginInputError>
                    </LoginEmailBox>
                    <LoginPasswordBox>
                        <InputBox>
                            <LoginInput type='password' onChange={onChangePassword}/>
                            <DeleteAllButton src='/deleteIcon.png'/>
                        </InputBox>
                        <LoginInputError>{passwordError}</LoginInputError>
                    </LoginPasswordBox>
                </LoginBody>
                <ButtonBody>
                    <LoginButton onClick={onClickLogin}>로그인</LoginButton>
                </ButtonBody>
                <LoginOptionBody>
                    <OptionBox>이메일 찾기</OptionBox>
                    <OptionDivideLine></OptionDivideLine>
                    <OptionBox>비밀번호 찾기</OptionBox>
                    <OptionDivideLine></OptionDivideLine>
                    <OptionBox>회원가입</OptionBox>
                </LoginOptionBody>
                <LoginExtra>
                    <ButtonBody>
                        <KakaoLoginButton>
                            <KakaoIcon src='/kakaoIcon.png'/>
                            <KakaoLoginTitle>카카오톡으로 로그인</KakaoLoginTitle>
                        </KakaoLoginButton>
                    </ButtonBody>
                </LoginExtra>
            </WrapperBody>
        </Wrapper>
    )
}