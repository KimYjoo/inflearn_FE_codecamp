import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const CREATE_BOARD = gql`
    mutation createProfile(
        $name: String
        $age: Int
        $school: String
    ){
        createProfile(
            name: $name
            age: $age
            school: $school
        ) {
            _id
            number
            message
        }
    }
`

export default function GraphqlPage() {
    const [createProfile] = useMutation(CREATE_BOARD)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [school, setSchool] = useState('')

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }
    const onChangeSchool = (event) => {
        setSchool(event.target.value)
    }

    const onClickSubmit = async () => {
        const maked_profile = await createProfile({
            variables: {
                name: name,
                age: Number(age),
                school: school,
            }
        })
        console.log(maked_profile)
    }

    return (
        <>
            <div>이름 <input onChange={onChangeName}/></div>
            <div>나이 <input onChange={onChangeAge}/></div>
            <div>학교 <input onChange={onChangeSchool}/></div>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </>
    )
}