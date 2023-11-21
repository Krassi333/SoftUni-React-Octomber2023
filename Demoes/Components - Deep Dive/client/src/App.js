import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";


function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
            .then(res => res.json())
            .then(data => {
                setTodos(Object.values(data));
                setLoading(false);
                console.log(Object.values(data));
            })
    }, [])

    function toggleTodoStatus(id) {
        console.log(id);
        setTodos(state => state.map(t => t._id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t));
    }

    function toggleAddNewTodo() {
        const lastId = todos[todos.length - 1]._id;
        let idNumber = Number(lastId.slice(5)) + 1;
        let newId = 'todo_' + idNumber;
        const text = prompt('Add new task:');

        setTodos(state => [{ _id: newId, text, isComplete: false }, ...state]);
    }

    return (
        <div>

            <Header></Header>


            <main className="main">


                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn" onClick={() => toggleAddNewTodo()}>+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">

                        {isLoading
                            ? <Loading></Loading>
                            : <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus}></TodoList>
                        }

                    </div>
                </section>
            </main>

            <Footer />

        </div>

    );
}

export default App;
