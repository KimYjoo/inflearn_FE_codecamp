import * as S from './BoardList.styles'
import {formattedDate} from '/src/commons/libraries/utils'
export default function BoardListUI(props){
    console.log(props.bests)
    

    return(
        <S.Container> 
            <S.BestContainer>
                <S.BestBoardsTitle>베스트 게시글</S.BestBoardsTitle>
                <S.BestBoardsWrapper>
                    {props.bests?.map((value) => (
                        <S.BestBoardBox key={value._id} onClick={() => props.onClickDetail(value._id)}>
                            <S.BestThumbNail src="" alt="게시글 썸네일" />
                            <S.BestTitle>{value.title}</S.BestTitle>
                            <S.BestBoardWrapper>
                                <S.BestProfileWrapper>
                                    <S.BestWriterInfo>
                                        <S.BestWriterImage src='/user_image.png' alt='유저 이미지'/>
                                        <S.BestWriterName>{value.writer}</S.BestWriterName>
                                    </S.BestWriterInfo>
                                    <S.BestDate>{formattedDate(value.createdAt)}</S.BestDate>
                                </S.BestProfileWrapper>
                                <S.BestLikesWrapper>
                                    <S.BestLikesImage src="/thumb_up.png" alt="따봉" />
                                    <S.BestLikesCount>{value.likeCount}</S.BestLikesCount>
                                </S.BestLikesWrapper>
                            </S.BestBoardWrapper>
                        </S.BestBoardBox>
                    ))}
                </S.BestBoardsWrapper>
            </S.BestContainer>
            <S.SearchWrapper>
                <S.SearchInputWrapper>
                    <S.SearchIcon src='/search.png'/>
                    <S.SearchTitleInput placeholder='제목을 검색해주세요.'/>
                </S.SearchInputWrapper>
                <S.SearchDateInput placeholder='YYYY.MM.DD ~ YYYY.MM.DD'/>
                <S.SearchButton>검색하기</S.SearchButton>
            </S.SearchWrapper>
            <S.Table>
                <S.THeader>
                    <S.THeadRow>
                        <S.TDataNumber>번호</S.TDataNumber>
                        <S.TDataTitle>제목</S.TDataTitle>
                        <S.TDataWriter>작성자</S.TDataWriter>
                        <S.TDataDate>날짜</S.TDataDate>
                    </S.THeadRow>
                </S.THeader>
                <S.Tbody>
                    {props.boards?.map((value, index) => (
                        <S.TBodyRow key={index} onClick={()=>props.onClickDetail(value?._id)}>
                            <S.TData>{10 - index}</S.TData>
                            <S.TData>{value?.title}</S.TData>
                            <S.TData>{value?.writer}</S.TData>
                            <S.TData>{formattedDate(value?.createdAt)}</S.TData>
                        </S.TBodyRow>
                    ))}
                </S.Tbody>
            </S.Table>
            <S.TableFooter>
                <S.TableNavWrapper>
                    <S.NavLeftButton src='/left.png'/>
                    <S.NavNumber>1</S.NavNumber>
                    <S.NavRightButton src='/right.png'/>

                </S.TableNavWrapper>
                <S.NewBoardButton onClick={props.onClickNew}>
                    <S.NewBoardIcon src='/create.png'/>
                    <S.NewBoardText>게시물 등록하기</S.NewBoardText>
                </S.NewBoardButton>
            </S.TableFooter>
        </S.Container>
    )
}