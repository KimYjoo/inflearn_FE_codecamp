import { CREATE_BOARD } from "./BoardNew.queries";
import BoardNewUI from "./BoardNew.presenter";
import { useState } from 'react'
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

export default function BoardNew(){
    const [createBoard] = useMutation(CREATE_BOARD)
    const router = useRouter();

    const [writer, setWriter] = useState();
    const [password, setPassword] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();
    
    const [writerError, setWriterError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [titleError, setTitleError] = useState();
    const [contentsError, setContentsError] = useState();

    const [isActive, setIsActive] = useState(false);

    const onSubmit = async () => {
        if (!(writer && password && title && contents)){
            if(!writer){
                setWriterError('작성자를 입력해주세요.');
            }
            else{
                setWriterError('');
            }

            if(!password){
                setPasswordError('비밀번호를 입력해주세요.');
            }
            else{
                setPasswordError('');
            }

            if(!title){
                setTitleError('제목을 입력해주세요.');
            }
            else{
                setTitleError('');
            }

            if(!contents){
                setContentsError('내용을 입력해주세요.');
            }
            else{
                setContentsError('');
            }
        }
        else{
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
    }
    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        if(contents && password && title && event.target.value){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
        if(writer && contents && title && event.target.value){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if(writer && password && contents && event.target.value){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }
    const onChangeContents = (event) => {
        setContents(event.target.value);
        if(writer && password && title && event.target.value){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }
    return(
            <BoardNewUI 
                onSubmit={onSubmit}
                onChangeWriter={onChangeWriter}
                onChangePassword={onChangePassword}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                writerError={writerError}
                passwordError={passwordError}
                titleError={titleError}
                contentsError={contentsError}
                isActive={isActive}
            />
    )
}