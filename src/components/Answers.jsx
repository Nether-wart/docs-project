import { useState } from "react";
import AnswerContext from './AnswerContext'

export default function Answers({children}){
    const [isShow,setShow]=useState(false)
    return (
        <>
        <button onClick={()=>setShow(!isShow)}>{isShow?'恢复':'显示全部'}</button>
        <AnswerContext value={isShow}>
            {children}
        </AnswerContext>
        </>
    )
}