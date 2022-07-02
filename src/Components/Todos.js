import React from 'react'
import Todo from '../Components/Todo'

export const Todos = (props) => {
    return (
        <div className='container'>
            <h3>To-do List</h3>
            {/* {props.todos} */}
            {props.todos.length === 0 ? <h1>No Todos To Display</h1> :
                
                    props.todos.map((todo) => {
                        return (
                            <>
                                <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
                                

                            </>
                        )
                        

                    })
                
            }


        

        </div>
    )
    
}
