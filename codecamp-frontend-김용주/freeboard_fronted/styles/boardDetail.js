import styled from "@emotion/styled";

export const DivideLine = styled.div`
    width: 100%;
    border-top: 1px solid #BDBDBD;
`
export const Container = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
`
export const BoardWrapper = styled.div`
    width: 100%;
    padding: 80px 102px;
    box-shadow: 0 4px 20px 0 #00000033;
`

export const BoardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`
export const WritterImage = styled.img`
    width: 56px;
    height: 56px;
    padding: 4.67px;
`
export const BoardInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 12px;
`
export const WritterName = styled.div`
    font-size: 24px;
    font-weight: 500;
    `
export const WriteDate = styled.div`
    font-size: 16px;
    color: #828282;
    `
export const BoardAdditionalOptions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

export const ButtonShare = styled.img`
    width: 32px;
    height: 32px;
    &:hover{
        cursor: pointer;
    }
`
export const ButtonLocation = styled.img`
    width: 32px;
    height: 32px;
    &:hover{
        cursor: pointer;
    }
`


export const BoardBody = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`
export const Title = styled.h1`
    width: 100%;
    font-size: 36px;
`
export const Images = styled.img`
    width: 100%;
`
export const Contents = styled.div`
    width: 100%;
`
export const YoutubeVideos = styled.div`
    margin: 120px 0;
`
export const BoardLikes = styled.div`
    display: flex;
    flex-direction: row;
`
export const LikesWrapper = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
`
export const LikeThumbsUpImage = styled.img`
    width: 24px;
    height: 24px;
`
export const LikeThumbsDownImage = styled.img`
    width: 24px;
    height: 24px;
`
export const ThumbsUpCount = styled.div`
    color: #FFD600;
`
export const ThumbsDownCount = styled.div`
    color: #828282;
`
export const BoardEditWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 101px 0 87px 0;
`
export const EditOptionBox = styled.div`
    width: fit-content;
    height: 45px;
    border: 1px solid #BDBDBD;
    font-size: 16px;
    padding: 0 60px;
    align-content: center;
`

export const CommentWrapper = styled.div`
`
export const CommentStarsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const CommentStar = styled.img`
    width: 24px;
    height: 24px;
`
export const CommentMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    padding: 40px 0;
`
export const CommentMenuTitle = styled.div`
    font-weight: 500;
    font-size: 18px;
`
export const CommentMenuIcon = styled.img`
    width: 24px;
    height: 24px;
`
export const NewCommentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 31px;
`
export const NewCommentInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-bottom: 20px;
`
export const InputCommentWriterName = styled.input`
    width: 180px;
    font-size: 16px;
    padding: 14px 20px;
`
export const InputCommentPassword = styled.input`
    width: 180px;
    font-size: 16px;
    padding: 14px 20px;
`
export const ContentsWrapper = styled.div`
    width: 100%;
    display: flex;
    border: 1px solid #BDBDBD;
    flex-direction: column;
`
export const CommentContentsWrapper = styled.div`
    width: 100%;
`
export const InputCommentContents = styled.textarea`
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 108px;
    font-size: 16px;
    padding:20px;
    resize: none;
    border:none;
    border-bottom: 1px solid #F2F2F2;
    &:focus{
        outline: none;
    }
`
export const CommentsContentsFooter = styled.div`
    width: 100%;
    height: 52px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const CommentContentsLimit = styled.div`
    color: #BDBDBD;
    line-height: 52px;
    padding-left: 20px;
`
export const CommentSubmit = styled.div`
    background-color: black;
    color: white;
    text-align: center;
    line-height: 52px;
    vertical-align: middle;
    padding: 0 16px;
    font-size: 16px;
`

export const PostedCommentsContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #BDBDBD;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`
export const PostedCommentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`
export const PostedCommentWriterImage = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 12px;
    padding: 4px;
`
export const PostedCommentHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`
export const PostedCommentWriterName = styled.div`
    font-size: 16px;
    font-weight: 500;
`
export const PostedCommentContents = styled.div`
    font-size: 16px;
    color: #4F4F4F;
    margin-top: 4px;
`
export const PostedCommentCreatedAt = styled.div`
    font-size: 12px;
    color:#BDBDBD;
    margin: 20px 0;
`
export const PostedCommentOptionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`
export const PostedCommentEdit = styled.div`
    width: 24px;
    height: 24px;
`
export const PostedCommentRemove = styled.div`
    width: 24px;
    height: 24px;
`