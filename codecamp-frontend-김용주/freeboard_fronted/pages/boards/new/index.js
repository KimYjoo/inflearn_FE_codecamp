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
    ButtonPost } from '../../../styles/boardNew'
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

const CREATE_BOARD = gql`
    mutation createBoard(
        $createBoardInput: CreateBoardInput!
    ){
        createBoard(
            createBoardInput:$createBoardInput
        ){
            _id
        }
    }
`
export default function unregisteredPostPage() {
    const [createBoard] = useMutation(CREATE_BOARD)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();
    const onSubmit = async (data) => {
        console.log(data);
        const {writer, password, title, contents} = data;
        try{
            const {data: result} = await createBoard({
                variables: {
                    createBoardInput: {
                        writer,
                        password,
                        title,
                        contents
                    }
                }
            })
            console.log('게시글 생성성공:', result)
            router.push(`/boards/${result.createBoard._id}`);
        } catch(e){
            alert(e)
        }
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
                                <InputText type='text' placeholder='이름을 입력해주세요.' {...register('writer', { required: '이름을 입력해주세요.'})}/>
                                <InputError>{errors.writer?.message}</InputError>
                            </UnregisteredItem>
                            <UnregisteredItem>
                                <Tip>비밀번호</Tip>
                                <InputText type='password' placeholder='비밀번호를 입력해주세요.' {...register('password', { required: '비밀번호를 입력해주세요.'})}/>
                                <InputError>{errors.password?.message}</InputError>
                            </UnregisteredItem>
                        </UnregisteredAuth>
                        <PostItem>  
                            <Tip>제목</Tip>
                            <InputText placeholder='제목을 작성해주세요.' {...register('title', { required: '제목을 입력해주세요.'})}/>
                            <InputError>{errors.title?.message}</InputError>
                        </PostItem>
        
                        <PostItem>
                            <Tip>내용</Tip>
                            <InputConTents placeholder='내용을 작성해주세요.' {...register('contents', { required: '내용을 입력해주세요.'})}/>
                            <InputError>{errors.contents?.message}</InputError>
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