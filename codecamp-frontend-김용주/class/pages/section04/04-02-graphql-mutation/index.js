import { useMutation, gql } from "@apollo/client"


const 나의그래프큐엘셋팅 = gql`
    mutaion{
        createBoard(wri)
    }
`

export default function GraphqlMutationPage() {
    const [나의함수] = useMutation()

    const onClickSubmit = async () => {
        const result = await 나의함수()
        console.log(result)
    }

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}