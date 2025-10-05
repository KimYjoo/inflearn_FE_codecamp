// const classmates = [
//     { name:"철수" , age:10, school:"토끼초"},
//     { name:"영희" , age:13, school:"다람쥐초"},
//     { name:"훈이" , age:11, school:"토끼초"},
// ]

// const candy = classmates.map(item => ({...item, candy: item.school === "토끼초" ? 20 : 0}))

// console.log(candy)


// const filtered = classmates.filter(({school}) => school === "토끼초").map(item => ({...item, candy:20}));
// console.log(filtered)

// const child = classmates.filter(({school}) => school === "다람쥐초").map(({name, ...rest}) => ({...rest, name:`${name}어린이`}))
// console.log(child)




export default function MapFilter() {
    const fruits = [
        {number:1 , title:"ㄱ"},
        {number:2 , title:"ㄴ"},
        {number:3 , title:"ㄷ"},
        {number:4 , title:"ㄹ"},
        {number:5 , title:"ㅁ"},
        {number:6 , title:"ㅂ"},
        {number:7 , title:"ㅅ"},
        {number:8 , title:"ㅇ"},
        {number:9 , title:"ㅈ"},
        {number:10 , title:"ㅊ"},
    ];
    return(
        <>{fruits.filter(({number}) => number % 2 === 0).map(({number, title}) => (<div>{number} : {title}</div>))}</>
    )
}