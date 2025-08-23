import {Wrapper, Title, WrapperBody, UnregisteredAuth, UnregisteredItem, PostItem, Tip, InputText, InputConText, ETCItem, InputPostalcode, ButtonPostalcode, UploadImage, ButtonPost} from '../../../styles/post'

export default function port_unregistered() {
    return(
        <Wrapper>
            <Title>게시물 등록</Title>
            <WrapperBody>
                <UnregisteredAuth>
                    <UnregisteredItem>
                        <Tip>작성자</Tip>
                        <InputText placeholder='이름을 입력해주세요.'/>
                    </UnregisteredItem>
                    <UnregisteredItem>
                        <Tip>비밀번호</Tip>
                        <InputText placeholder='비밀번호를 입력해주세요.'/>
                    </UnregisteredItem>
                </UnregisteredAuth>
                <PostItem>
                    <Tip>제목</Tip>
                    <InputText placeholder='제목을 작성해주세요.'/>
                </PostItem>
                <PostItem>
                    <Tip>내용</Tip>
                    <InputConText placeholder='내용을 작성해주세요.'/>
                </PostItem>
                <PostItem>
                    <Tip>주소</Tip>
                    <ETCItem>
                        <InputPostalcode placeholder='07250'/>
                        <ButtonPostalcode>우편번호 검색</ButtonPostalcode>
                    </ETCItem>
                    <InputText/>
                    <InputText/>
                </PostItem>
                <PostItem>
                    <Tip>유튜브</Tip>
                    <InputText placeholder='링크를 복사해주세요.'/>
                </PostItem>
                <PostItem>
                    <Tip>사진 첨부</Tip>
                    <ETCItem>
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
                    </ETCItem>
                </PostItem>
                <PostItem>
                    <Tip>메인 설정</Tip>
                    <ETCItem>
                        <input type="radio" name="mainSetting" id="" /> 유튜브
                        <input type="radio" name="mainSetting" id="" /> 사진
                    </ETCItem>
                </PostItem>
            </WrapperBody>
            <ButtonPost>등록하기</ButtonPost>

        </Wrapper>
    )
}