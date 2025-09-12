import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    Container,
    Wrapper,
    Title,
    WrapperBody,
    PostForm,
    InputError,
    UnregisteredAuth,
    UnregisteredItem,
    PostItem,
    Tip,
    InputText,
    InputConText,
    PostalCodeWrapper,
    UploadImageWrapper,
    MainSettingWrapper,
    RadioWrapper,
    InputRadio,
    RaidoLabel,
    InputPostalcode,
    ButtonPostalcode,
    UploadImage,
    SubmitWrapper,
    ButtonPost } from '../../../styles/post'

export default function port_unregistered() {
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    // const [title, setTitle] = useState('');
    // const [context, setContext] = useState('');
    // const [postalCode, setPostalCode] = useState('');
    
    // const [nameError, setNameError] = useState('');
    // const [passwordError, setPasswordError] = useState('');
    // const [titleError, setTitleError] = useState('');
    // const [contextError, setContextError] = useState('');

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    // function onChangeName(event){
    //     setName(event.target.value);
    // }
    // function onChangePassword(event){
    //     setPassword(event.target.value);
    // }
    // function onChangeTitle(event){
    //     setTitle(event.target.value);
    // }
    // function onChangeContext(event){
    //     setContext(event.target.value);
    // }
    // function onChangePostalCode(event){
    //     setPostalCode(event.target.value);
    // }

    function onClickCheckPost(){
         
    }

    return(
        <Container>
            <Wrapper>
                <Title>게시물 등록</Title>
                <PostForm onSubmit={handleSubmit(onSubmit)}>
                    <WrapperBody>
                        <UnregisteredAuth>
                            <UnregisteredItem>
                                <Tip>작성자</Tip>
                                <InputText placeholder='이름을 입력해주세요.' {...register('name', { required: '이름을 입력해주세요.'})}/>
                                <InputError>{errors.name?.message}</InputError>
                            </UnregisteredItem>
                            <UnregisteredItem>
                                <Tip>비밀번호</Tip>
                                <InputText placeholder='비밀번호를 입력해주세요.' {...register('password', { required: '비밀번호를 입력해주세요.'})}/>
                                <InputError>{errors.name?.message}</InputError>
                            </UnregisteredItem>
                        </UnregisteredAuth>
                        <PostItem>  
                            <Tip>제목</Tip>
                            <InputText placeholder='제목을 작성해주세요.' {...register('title', { required: '제목을 입력해주세요.'})}/>
                            <InputError>{errors.name?.message}</InputError>
                        </PostItem>
        
                        <PostItem>
                            <Tip>내용</Tip>
                            <InputConText placeholder='내용을 작성해주세요.' {...register('context', { required: '내용을 입력해주세요.'})}/>
                            <InputError>{errors.name?.message}</InputError>
                        </PostItem>
        
                        <PostItem>
                            <Tip>주소</Tip>
                            <PostalCodeWrapper>
                                <InputPostalcode placeholder='07250' />
                                <ButtonPostalcode>우편번호 검색</ButtonPostalcode>
                            </PostalCodeWrapper>
                            <InputText/>
                            <InputText/>
                        </PostItem>
        
                        <PostItem>
                            <Tip>유튜브</Tip>
                            <InputText placeholder='링크를 복사해주세요.'/>
                        </PostItem>
        
                        <PostItem>
                            <Tip>사진 첨부</Tip>
                            <UploadImageWrapper>
                                <UploadImage>
                                    <div>+</div>
                                    <div>Upload</div>
                                </UploadImage>
                                <UploadImage>
                                    <div>+</div>
                                    <div>Upload</div>
                                </UploadImage>
                                <UploadImage>
                                    <div>+</div>
                                    <div>Upload</div>
                                </UploadImage>
                            </UploadImageWrapper>
                        </PostItem>
        
                        <PostItem>
                            <Tip>메인 설정</Tip>
                            <MainSettingWrapper>
                                <RadioWrapper>
                                    <InputRadio type="radio" name="mainSetting" id="youtube" /> <RaidoLabel for='youtube'>유튜브</RaidoLabel>
                                </RadioWrapper>
                                <RadioWrapper>
                                    <InputRadio type="radio" name="mainSetting" id="image" /> <RaidoLabel for='image'>사진</RaidoLabel>
                                </RadioWrapper>
                            </MainSettingWrapper>
                        </PostItem>
        
                        <SubmitWrapper>
                            <ButtonPost onClick={onClickCheckPost}>등록하기</ButtonPost> 
                        </SubmitWrapper>  
                    </WrapperBody>
                </PostForm>
            </Wrapper>
        </Container>
    )
}