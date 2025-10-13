import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "../list/BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
export default function BoardList(){
    try{
        const router = useRouter();
        const [page, setPage] = useState(1);
        const {data:boardResults} = useQuery(FETCH_BOARDS, {
            variables:{page:page}
        })
        const {data:bestBoardResults} = useQuery(FETCH_BOARDS_OF_THE_BEST);
        const onClickDetail = (id) => {
            router.push(`/boards/${id}`);
        }
        const onClickNew = () => {
            router.push(`/boards/new`);
        }
        
        return (
            <BoardListUI 
                bests={bestBoardResults?.fetchBoardsOfTheBest}
                boards={boardResults?.fetchBoards}
                onClickDetail={onClickDetail}
                onClickNew={onClickNew}
            />
        )
    }catch (e){
        alert(e);
    }
    
}