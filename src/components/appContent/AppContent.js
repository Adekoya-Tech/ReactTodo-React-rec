import { useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';

function AppContent() {
    const todoList = useSelector((state) => state.todo.todoList)
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time))
    return (
        <div>
            {
                sortedTodoList && sortedTodoList.length > 0 ? sortedTodoList.map((todo) => <TodoItem todo={todo} key={todo.id} />) : (<p style={{ textAlign: "center", marginTop: "2rem" }}>No Task Added Yet</p>)
            }
        </div>
    )
}
export default AppContent
