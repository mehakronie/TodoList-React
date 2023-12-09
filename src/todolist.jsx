import React, { useState } from "react";
import { usetodo } from "./todocontext";
import './App.css'

export function Todolist({ todo }) {
    const [todomsg, settodomsg] = useState(todo.todo)
    const [istodoeditable, setistodoeditable] = useState(false)
    const { updatetodo, deletetodo, toggle } = usetodo()
    const togglecomplete = () => {
        toggle(todo.id)
    }
    const edittodo = () => {
        updatetodo(todo.id, { ...todo, todo: todomsg })
        setistodoeditable(false)
    }
    return (
        <>
            <input
                className="checkbox1"
                type="checkbox"
                checked={todo.complete}
                onChange={togglecomplete}
            />
            <input
                className={todo.complete ? "strike " : ''}
                type="text"
                value={todomsg}
                onChange={(e) => { settodomsg(e.target.value) }}
                readOnly={!istodoeditable}
            />
            <button onClick={
                () => {
                    if (todo.complete) return

                    if (istodoeditable) {
                        edittodo()
                    } else { setistodoeditable((prev) => !prev) }
                }}
                disabled={todo.complete}
            >edit</button>
            <button onClick={() => deletetodo(todo.id)}>delete</button>
        </>
    )
}