import React, { useRef, useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function TdEdit({children,action,globalStateUpdate,tdType,updateReset,id}) {
    let [editable,setEditable] = useState(false);
    let [value,setValue]= useState(children)
    let tdContent = useRef(children);

    const {updating,isUpdated,updateErr} = globalStateUpdate;

    const dispatch = useDispatch();

    const handleDoubleClick=()=>{
        setEditable(true);
    }

    const handleBlur=()=>{
        setEditable(false);
        setValue(tdContent.current.textContent);
        let updateObj={[tdType]:tdContent.current.textContent};
        //console.log({...updateObj});
        dispatch(action(id,{...updateObj}));
        tdContent.current.style.color="green";
        setTimeout(()=>{
            dispatch({type:updateReset});
            tdContent.current.style.color="black";
        },3000)
    }
  

  return (
    <td ref={tdContent} contentEditable={editable} onDoubleClick={handleDoubleClick} onBlur={handleBlur} >
        {value}
    </td>
  )
}
