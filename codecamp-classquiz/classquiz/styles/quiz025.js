import styled from "@emotion/styled";

export const Wrapper = styled.div`
    margin: 0;
    box-sizing: border-box;
    width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 50px;
    background-image: url('/background.png');
    color: #FFFFFF;
    font-family: 'Noto Sans', sans-serif;

`

export const WrapperHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding : 168px 0 144px 0;
    
`

export const AppIcon = styled.img`
    width: 66px;
    margin-bottom: 27px;
`

export const AppTitle = styled.div`
    font-size: 60px;
    font-weight: 700;
`

export const WrapperBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LoginBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 38px;
    padding-bottom: 50px;
`

export const LoginEmailBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const LoginPasswordBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #7D7D7D;
    `

export const DeleteAllButton = styled.img`
    width: 20px;
    height: 20px;
    margin-bottom: 11px;
    `

export const LoginInput = styled.input`
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    align-content: start;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    padding-bottom: 7px;
    
    &:focus{
        outline: none;
    }
`

export const LoginInputError = styled.div`
    color: #FF1B6D;
    font-size: 16px;
`

export const ButtonBody = styled.div`
    width: 100%;
    height: 76px;
    
`

export const LoginButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: rgba(255,27,109,0.6);
    border: none;
    font-size: 26px;
    font-weight: 700;
    border-radius: 38px;
    color: white;
`

export const LoginOptionBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 33px;
    padding: 38px 0;
`

export const OptionBox = styled.div`
    font-size: 20px;
`

export const OptionDivideLine = styled.div`
    height: 21px;
    border: 1px solid #9F9F9F;
`

export const LoginExtra = styled.div`
    width: 100%;
    display: flex;
    padding: 20px 0;
`

export const KakaoLoginButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: rgba(255,27,109,0);
    border-radius: 38px;
    border: 1px solid #FFE100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px
`

export const KakaoIcon = styled.img``

export const KakaoLoginTitle = styled.span`
    font-size: 26px;
    font-weight: 700;
    color: #FFE100;
`

