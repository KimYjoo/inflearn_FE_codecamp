import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 100px;
`

export const Wrapper = styled.div`
    width: 1200px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 60px 100px; 
`;

export const Title = styled.div`
    width: 100%;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
`;

export const PostForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WrapperBody = styled.div`
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 70px 0px;
`;

export const InputError = styled.div`
    width: 100%;
    font-size: 10px;
    color: red;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
export const UnregisteredAuth = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
`;

export const UnregisteredItem = styled.div`
    width: 486px;
`;

export const PostItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;


export const Tip = styled.span`
    font-size: 16px;
    font-weight: 500;
`;

export const InputText = styled.input`
    width: 100%;
    height: 52px;
    margin-top: 16px;
    box-sizing: border-box;
    padding: 0px 16px;
    border: 1px solid #BDBDBD;
    font-size: 16px;
    &::placeholder{
        color: #BDBDBD;
    }
`

export const InputConTents = styled.textarea`
    width: 100%;
    height: 480px;
    margin-top: 16px;
    padding: 14px 16px;
    box-sizing: border-box;
    border: 1px solid #BDBDBD;
    font-size: 16px;
    &::placeholder{
        color: #BDBDBD;
    }
`


export const PostalCodeWrapper = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const InputPostalcode = styled.input`
    width: 77px;
    height: 52px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #BDBDBD;
    margin: 0px 16px 0px 0px;
    &::placeholder{
        color: #BDBDBD;
    }
`

export const ButtonPostalcode = styled.button`
    height: 52px;
    font-size: 16px;
    background-color: black;
    padding: 0px 16px;
    color: white;
`

export const UploadImageWrapper = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `

export const MainSettingWrapper = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const RadioWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const InputRadio = styled.input`
    width: 24px;
    height: 24px;
    display: inline-block;
    &:checked{
        background-color: #FFD600; 
    }
`
export const RaidoLabel = styled.label`
    font-size: 16px;
    position: relative;
    top: -3px;
`

export const UploadImage = styled.div`
    width: 78px;
    height: 78px;
    background-color: #BDBDBD;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    margin-right: 16px;
`

export const ButtonPost = styled.button`
    width: 179px;
    height: 52px;
    background-color: #FFD600;
    font-size: 16px;
    border: none;
`

export const SubmitWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 80px;
`