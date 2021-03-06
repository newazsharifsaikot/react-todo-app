import Todo from './Todo'
function TodoList({todos, setTodos,filteredTodos }){
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => {
                    return (
                        <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                    )
                })}
            </ul>
        </div>
    )
}
export default TodoList;