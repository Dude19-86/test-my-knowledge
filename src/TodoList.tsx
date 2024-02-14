import React from 'react';

export type TaskType = {
    id: string
    title: string
    isDone: string
}

type TodoListPropsType = {
    tasks: TaskType[]
}
export const TodoList = (props: TodoListPropsType
) => {
    return (
        <div>
            TodoList
            {props.tasks.map(e => {
                return (
                    <li>
                        <span>{e.isDone}</span>
                    </li>
                )
            })}
        </div>
    );
};