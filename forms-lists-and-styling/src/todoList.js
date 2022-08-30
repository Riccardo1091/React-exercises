import React, { useState } from 'react';

export function TodoList() {
    let [todos, setTodos] = useState(["Mica", "pizza", "e", "fichi", "eh"])

    function handleAddTodo(e) {
        e.preventDefault();
        setTodos(prevTodos => (
                todos = [...prevTodos, e.target.elements.addTodo.value]
        ))
    }

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input name="addTodo" type="text"/>
                <button type="submit">Add</button>
            </form>
            <ul className="todo-list">
                {todos.map((item, index) => <li key={item + index}>{item}</li>)}
            </ul>
        </>
    )
}
