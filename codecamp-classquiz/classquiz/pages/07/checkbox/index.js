import { useState } from "react"

export default function CheckboxPage() {
    const [checkAll, setCheckAll] = useState(false);
    const [item, setItem] = useState([
        {number:1, title:"9월달 시스템 점검 안내입니다.", createdAt:"2020.09.19", checked:false},
        {number:2, title:"안녕하세요! 공지사항 전달드립니다.", createdAt:"2020.09.17", checked:false},
        {number:3, title:"개인정보 처리방침 변경 사전 안내", createdAt:"2020.09.12", checked:false},
        {number:4, title:"iOS 10.0 이하 지원 중단 안내", createdAt:"2020.08.10", checked:false},
        {number:5, title:"이용약관 변경 사전 안내", createdAt:"2020.08.01", checked:false},
        {number:6, title:"개인정보 처리방침 변경 사전 안내", createdAt:"2020.07.19", checked:false},
    ])
  
    const onChangeCheckbox = (event) => {
        setCheckAll(event.target.checked);
        setItem(item.map(( {checked, ...rest} ) => ({...rest, checked:event.target.checked})))
    } 

    const onChangeEachCheckbox = (event) => {
        setItem(item.map(value => {
            if(value.number === Number(event.target.id)) return {...value, checked:event.target.checked}
            else return value
        }));

        const isAllChecked = (item.filter(( {checked, number} ) => checked && number !== Number(event.target.id))).length
        if(event.target.checked){
            if(isAllChecked === item.length-1){
                setCheckAll(true);
            }
        }
        else{
            setCheckAll(false);
        }
    }

    const makeBoard = ({number, title, createdAt, checked}) => (
        <div key={number}>
            <input key={number} id={number} type="checkbox" checked={checked} onChange={onChangeEachCheckbox}/>
            <div>{number}</div>
            <div>{title}</div>
            <div>{createdAt}</div>
        </div>
    )

    return(
        <>
            <div>
                <input onChange={onChangeCheckbox} type="checkbox" checked={checkAll}/>
                <div>번호</div>
                <div>제목</div>
                <div>작성일</div>
            </div>
            {item.map(makeBoard)}
        </>
    )
}