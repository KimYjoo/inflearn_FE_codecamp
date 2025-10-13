import {
    DivideLine,
    BoardHeader,
    BoardWrapper,
    BoardBody,
    BoardEditWrapper,
    WritterImage,
    WritterName,
    WriteDate,
    BoardInfoWrapper,
    BoardAdditionalOptions,
    ButtonShare,
    ButtonLocation,
    Title,
    Images,
    Contents,
    YoutubeVideos,
    BoardLikes,
    LikesWrapper,
    LikeThumbsUpImage,
    LikeThumbsDownImage,
    ThumbsUpCount,
    ThumbsDownCount,
    EditOptionBox,
    Container,
    CommentWrapper,
    CommentMenuTitle,
    CommentMenuWrapper,
    CommentMenuIcon,
    NewCommentWrapper,
    NewCommentInfoWrapper,
    InputCommentWriterName,
    InputCommentPassword,
    CommentStarsWrapper,
    CommentStar,
    ContentsWrapper,
    InputCommentContents,
    CommentsContentsFooter,
    CommentContentsLimit,
    CommentSubmit,
    CommentContentsWrapper,
    PostedCommentsContainer,
    PostedCommentWriterImage,
    PostedCommentWrapper,
    PostedCommentEdit,
    PostedCommentOptionsWrapper,
    PostedCommentRemove,
    PostedCommentHeader,
    PostedCommentContents,
    PostedCommentCreatedAt,
    PostedCommentWriterName,
} from "./BoardDetail.styles"

import { formattedDate } from "/src/commons/libraries/utils"

export default function BoardDetailUI(props){

    return(
        <>
            <Container>
                <BoardWrapper>
                    <BoardHeader>
                        <WritterImage src="/user_image.png" alt="유저 프로필 사진"/>
                        <BoardInfoWrapper>
                            <WritterName>{props.data?.fetchBoard?.writer}</WritterName>
                            <WriteDate>Date : {formattedDate(props.data?.fetchBoard?.updatedAt)}</WriteDate>
                        </BoardInfoWrapper>
                        <BoardAdditionalOptions>
                            <ButtonShare src="/share.png"></ButtonShare>
                            <ButtonLocation src="/location.png"></ButtonLocation>
                        </BoardAdditionalOptions>
                    </BoardHeader>
                    <DivideLine/>
                    <BoardBody>
                        <Title>{props.data?.fetchBoard?.title}</Title>
                        <Images src="/test_image.jpg"></Images>
                        <Contents>{props.data?.fetchBoard?.contents}</Contents>
                        <YoutubeVideos></YoutubeVideos>
                        <BoardLikes>
                            <LikesWrapper>
                                <LikeThumbsUpImage src="/thumb_up.png"/>
                                <ThumbsUpCount>0</ThumbsUpCount>
                            </LikesWrapper>
                            <LikesWrapper>
                                <LikeThumbsDownImage src="/thumb_down.png"/>
                                <ThumbsDownCount>0</ThumbsDownCount>
                            </LikesWrapper>
                        </BoardLikes>
                    </BoardBody>
                </BoardWrapper>
                <BoardEditWrapper>
                    <EditOptionBox>목록으로</EditOptionBox>
                    <EditOptionBox>수정하기</EditOptionBox>
                    <EditOptionBox onClick={() => props.onClickDelete(props.data?.fetchBoard?._id)}>삭제하기</EditOptionBox>
                </BoardEditWrapper>
                <DivideLine/>
                <CommentWrapper>
                    <CommentMenuWrapper>
                        <CommentMenuIcon src="/comment.png"/>
                        <CommentMenuTitle>댓글</CommentMenuTitle>
                    </CommentMenuWrapper>
                    <NewCommentWrapper>
                        <NewCommentInfoWrapper>
                            <InputCommentWriterName placeholder="작성자"/>
                            <InputCommentPassword type="password" placeholder="비밀번호"/>
                            <CommentStarsWrapper>
                                <CommentStar src="/empty_star.png"/>
                                <CommentStar src="/empty_star.png"/>
                                <CommentStar src="/empty_star.png"/>
                                <CommentStar src="/empty_star.png"/>
                                <CommentStar src="/empty_star.png"/>
                            </CommentStarsWrapper>
                        </NewCommentInfoWrapper>
                        <ContentsWrapper>
                            <CommentContentsWrapper><InputCommentContents maxLength={100} placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."/></CommentContentsWrapper>
                            <CommentsContentsFooter>
                                <CommentContentsLimit>0/100</CommentContentsLimit>
                                <CommentSubmit>등록하기</CommentSubmit>
                            </CommentsContentsFooter>
                        </ContentsWrapper>
                    </NewCommentWrapper>
                    <PostedCommentsContainer>
                        <PostedCommentWriterImage src="/user_image.png"/>
                        <PostedCommentWrapper>
                            <PostedCommentHeader>
                                <PostedCommentWriterName>김용주</PostedCommentWriterName>
                                <CommentStarsWrapper>
                                    <CommentStar src="/empty_star.png"/>                        
                                    <CommentStar src="/empty_star.png"/>                        
                                    <CommentStar src="/empty_star.png"/>                        
                                    <CommentStar src="/empty_star.png"/>                        
                                    <CommentStar src="/empty_star.png"/>                        
                                </CommentStarsWrapper>
                            </PostedCommentHeader>
                            <PostedCommentContents>개쩌네!!</PostedCommentContents>
                            <PostedCommentCreatedAt>25/09/29</PostedCommentCreatedAt>
                        </PostedCommentWrapper>
                        <PostedCommentOptionsWrapper>
                            <PostedCommentEdit src={"/edit.png"}/>
                            <PostedCommentRemove src={"/remove.png"}/>
                        </PostedCommentOptionsWrapper>
                    </PostedCommentsContainer>
                    
                </CommentWrapper>
            </Container>
        </>
    )
}