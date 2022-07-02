import React from 'react'

export default function Todo({todo,onDelete}) {
  return (
    <div id="container" >
        <h1>{todo.title} </h1>
        <p>{todo.desc} </p>
        <button className='btn btn-sm btn-danger' onClick={()=>{
            onDelete(todo)
        }}>Delete</button>
        
    </div>
  )
}

