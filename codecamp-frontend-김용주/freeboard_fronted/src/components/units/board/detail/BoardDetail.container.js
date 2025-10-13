import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
export default function BoardDetail(){
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId:router.query.boardId }
    });
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickDelete = (boardId) => {
        try{
            if(confirm('정말 삭제하겠습니까?')){
                deleteBoard({
                    variables: {
                        boardId
                    }
                });
                router.push('/boards');
            }
            
        } catch (e){
            console.log('게시글 삭제 중 오류 발생', e);
        }
    }
    return <BoardDetailUI 
                data={data}
                onClickDelete={onClickDelete}
            />
}