import { useMemo, useState } from "react"

export default function CheckboxPage() {
    const [item, setItem] = useState([
        {number:1, title:"9월달 시스템 점검 안내입니다.", createdAt:"2020.09.19"},
        {number:2, title:"안녕하세요! 공지사항 전달드립니다.", createdAt:"2020.09.17"},
        {number:3, title:"개인정보 처리방침 변경 사전 안내", createdAt:"2020.09.12"},
        {number:4, title:"iOS 10.0 이하 지원 중단 안내", createdAt:"2020.08.10"},
        {number:5, title:"이용약관 변경 사전 안내", createdAt:"2020.08.01"},
        {number:6, title:"개인정보 처리방침 변경 사전 안내", createdAt:"2020.07.19"},
    ])
    const [checkList, setCheckList] = useState([]);
    
    const onChangeAll = () => {
        if(item.length !== checkList.length){
            setCheckList(item)
        }
        else{
            setCheckList([])
        }
    } 

    const onChangeEachCheckbox = (row) => {
        if(checkList.some((v) => v.number === row.number)){
            setCheckList(prev => prev.filter(v => v.number !== row.number));
        }
        else {
            setCheckList(prev => [...prev, row]);
        }
    }

    const isChecked = (row) => checkList.some(v => v.number === row.number)

    return(
        <>
            <div>
                <input onChange={onChangeAll} type="checkbox" checked={item.length === checkList.length}/>
                <div>번호</div>
                <div>제목</div>
                <div>작성일</div>
            </div>
            {item.map((row, index) => 
                <div key={row.number}>
                    <input 
                        type="checkbox" 
                        checked={isChecked(row)} 
                        onChange={() => onChangeEachCheckbox(row)}
                    />
                    <div>{row.number}</div>
                    <div>{row.title}</div>
                    <div>{row.createdAt}</div>
                </div>
            )}
        </>
    )
}