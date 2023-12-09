import React from "react";
import { usetodo } from "./todocontext";
import { useState } from "react";

export function Todoform() {
    const [todo, settodo] = useState()
    const { addtodo } = usetodo()

    const handler = (e) => {
        e.preventDefault()
        if (!todo) return

        addtodo({ todo: todo, complete: false })

        settodo('')
    }
    return (
        <>
            <center>
                <form onSubmit={handler} style={{ fontFamily: 'fantasy' }}>
                    <input
                        type="text"
                        placeholder="enter task"
                        value={todo ?? ''}
                        onChange={e => settodo(e.target.value)}
                    />

                    <button type="submit">Add</button>
                </form>
            </center>
        </>
    )

}