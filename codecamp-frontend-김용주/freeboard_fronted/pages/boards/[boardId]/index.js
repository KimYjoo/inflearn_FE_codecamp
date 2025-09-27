import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
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
    CommentContentsWrapper,
    InputCommentContents,
} from "../../../styles/boardDetail"

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            updatedAt
        }
    }
`
export default function DetailPage(){
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId:router.query.boardId }
    })
    console.log('라우터',router);
    console.log('데이터', data);
    return(
        <>
            <div>{router.query.boardId} 이동 완료!</div>
            <div>{data?.fetchBoard?.writer} 작성자1</div>
            <div> 제목</div>
            <div> 내용</div>


            <Container>
                <BoardWrapper>
                    <BoardHeader>
                        <WritterImage src="/user_image.png" alt="유저 프로필 사진"/>
                        <BoardInfoWrapper>
                            <WritterName>{data?.fetchBoard?.writer}</WritterName>
                            <WriteDate>Date : {data?.fetchBoard?.updatedAt}</WriteDate>
                        </BoardInfoWrapper>
                        <BoardAdditionalOptions>
                            <ButtonShare src="/share.png"></ButtonShare>
                            <ButtonLocation src="/location.png"></ButtonLocation>
                        </BoardAdditionalOptions>
                    </BoardHeader>
                    <DivideLine/>
                    <BoardBody>
                        <Title>{data?.fetchBoard?.title}</Title>
                        <Images></Images>
                        <Contents>{data?.fetchBoard?.contents}</Contents>
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
                    <EditOptionBox>삭제하기</EditOptionBox>
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
                            <InputCommentPassword placeholder="비밀번호"/>
                            <CommentStarsWrapper>
                                <CommentStar src="/empty_star.png"/>
                                <CommentStar src="/empty_star.png"/>
                                <CommentStar src="/empty_star.png"/>
                                <CommentStar src="/empty_star.png"/>
                                <CommentStar src="/empty_star.png"/>
                            </CommentStarsWrapper>
                        </NewCommentInfoWrapper>
                        <CommentContentsWrapper>
                            <InputCommentContents/>
                        </CommentContentsWrapper>
                    </NewCommentWrapper>
                </CommentWrapper>
            </Container>
            <div></div>
        </>
    )
}