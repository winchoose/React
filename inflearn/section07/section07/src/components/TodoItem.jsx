import "./TodoItem.css"
import { memo } from "react";
import { useContext } from "react";
import { TodoDispatchContext } from "../App";
const TodoItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    const onClickDeleteButton = ()=>{
        onDelete(id)
    }
    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} checked={isDone} type="checkbox"/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}
/*export default memo(TodoItem, (prevProps, nextProps) => {

//반환값에 따라 props가 바뀌었는지 안바뀌었는지 판단
//T -> props 바뀌지 않음 -> 리렌더링 x
//F -> props 바뀜 -> 렌더링 o

if(prevProps.id !== nextProps.id) return false;
if(prevProps.isDone !== nextProps.isDone) return false;
if(prevProps.content !== nextProps.content) return false;
if(prevProps.date !== nextProps.date) return false;

return true;

});*/
export default memo(TodoItem);