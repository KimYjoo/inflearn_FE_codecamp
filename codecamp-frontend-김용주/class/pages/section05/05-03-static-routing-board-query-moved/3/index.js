import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:907){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage(){
    const { data } = useQuery(FETCH_BOARD);

    console.log(data);

    return(
        <>
            <div>3번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {data?.fetchBoard?.writer}</div> {/*조건부 랜더링 and 옵셔널 체이닝*/}
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data? data.fetchBoard.contents : "로딩중!!"}</div>
        </> 
    )

}