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
    InputConTents,
    PostalCodeWrapper,
    UploadImageWrapper,
    MainSettingWrapper,
    RadioWrapper,
    InputRadio,
    RadioLabel,
    InputPostalcode,
    ButtonPostalcode,
    UploadImage,
    SubmitWrapper,
    ButtonPost } from './BoardNew.styles'

export default function BoardNewUI(props){
    return(
            <Container>
                <Wrapper>
                    <Title>게시물 등록</Title>
                    <PostForm onSubmit={props.handleSubmit(props.onSubmit)}>
                        <WrapperBody>
                            <UnregisteredAuth>
                                <UnregisteredItem>
                                    <Tip>작성자</Tip>
                                    <InputText type='text' placeholder='이름을 입력해주세요.' {...props.register('writer', { required: '이름을 입력해주세요.'})}/>
                                    <InputError>{props.errors.writer?.message}</InputError>
                                </UnregisteredItem>
                                <UnregisteredItem>
                                    <Tip>비밀번호</Tip>
                                    <InputText type='password' placeholder='비밀번호를 입력해주세요.' {...props.register('password', { required: '비밀번호를 입력해주세요.'})}/>
                                    <InputError>{props.errors.password?.message}</InputError>
                                </UnregisteredItem>
                            </UnregisteredAuth>
                            <PostItem>  
                                <Tip>제목</Tip>
                                <InputText placeholder='제목을 작성해주세요.' {...props.register('title', { required: '제목을 입력해주세요.'})}/>
                                <InputError>{props.errors.title?.message}</InputError>
                            </PostItem>
            
                            <PostItem>
                                <Tip>내용</Tip>
                                <InputConTents placeholder='내용을 작성해주세요.' {...props.register('contents', { required: '내용을 입력해주세요.'})}/>
                                <InputError>{props.errors.contents?.message}</InputError>
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
                                        <InputRadio type="radio" name="mainSetting" id="youtube" /> <RadioLabel htmlFor='youtube'>유튜브</RadioLabel>
                                    </RadioWrapper>
                                    <RadioWrapper>
                                        <InputRadio type="radio" name="mainSetting" id="image" /> <RadioLabel htmlFor='image'>사진</RadioLabel>
                                    </RadioWrapper>
                                </MainSettingWrapper>
                            </PostItem>
            
                            <SubmitWrapper>
                                <ButtonPost>등록하기</ButtonPost> 
                            </SubmitWrapper>  
                        </WrapperBody>
                    </PostForm>
                </Wrapper>
            </Container>
        )
}