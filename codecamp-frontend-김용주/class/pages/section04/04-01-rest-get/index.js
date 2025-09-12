import axios from 'axios'

export default function RestGetPage(){

    function onClickAsync(){
        axios.get("https://koreanjson.com/posts/1")
        console.log(result)
    }

    function onClickSync(){

    }

    return (
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
        </div>
    )
}