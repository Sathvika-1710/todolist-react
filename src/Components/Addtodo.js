import React, { useState } from 'react'

export const Addtodo = (props) => {
   const  [title,setTitle]=useState("")
    const [desc,setdesc]=useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or desc cannot be empty empty")
        }
        else{
            props.addtodo(title,desc)

        }

    }
    return (
        <div>
            <div className='container py-3 my-6' >
                <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="text" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc" />
                </div>
               
                <button type="submit" className="btn btn-success btn-small">Add Todo</button>
            </form>
            </div>
        </div>
    )
}
