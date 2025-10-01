import { CREATE_BOARD } from "./BoardNew.quaries";
import BoardNewUI from "./BoardNew.presenter";
import { useState } from 'react'
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { useForm} from 'react-hook-form'
export default function BoardNew(){
    const [createBoard] = useMutation(CREATE_BOARD)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();
    const onSubmit = async (data) => {
        console.log(data);
        const {writer, password, title, contents} = data;
        try{
            const {data: result} = await createBoard({
                variables: {
                    createBoardInput: {
                        writer,
                        password,
                        title,
                        contents
                    }
                }
            })
            console.log('게시글 생성성공:', result)
            router.push(`/boards/${result.createBoard._id}`);
        } catch(e){
            alert(e)
        }
    }
    return(
            <BoardNewUI 
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
            />
    )
}