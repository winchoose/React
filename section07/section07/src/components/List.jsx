import { useState, useMemo} from "react";
import "./List.css"
import TodoItem from "./Todoitem";
const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    
    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }
        return todos.filter((todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase())
    );
    }
    const filteredTodos = getFilteredData();

    const onClickDeleteButton = (isDone)=>{
        if(isDone == true){
            onDelete()
        }
    }
    const { totalCount, doneCount, notDoneCount} = useMemo (()=>{
        const totalCount = todos.length;
        const doneCount = todos. filter(
            (todo) => todo.isDone
        ).length;
        const notDoneCount = totalCount - doneCount
        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])
    

    return (
    <div className="List">
        <h4>TOdo List 🦔</h4>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notdone: {notDoneCount}</div>
        <div className="Add">
        <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
        <button onClick={onClickDeleteButton}>선택 삭제</button>
        </div>
        <div className="todos_wrapper">
            {filteredTodos.map((todo)=>{
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
            })}
        </div>
    </div>
    )
}
export default List;