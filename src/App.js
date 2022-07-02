//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import {Todos} from './Components/Todos'
//import Todo from './Components/Todo'
import React,{useState, useEffect} from 'react';
import {Addtodo} from './Components/Addtodo'


function App() {
  let initTodo
  if(localStorage.getItem("todos")=== null){
    initTodo=[]
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))

  }
  const onDelete=(todo)=>{
    console.log(" i am on delete",todo)
    // let index=todos.indexOf(todo);
    // todos.splice(index,1)
    setTodos(todos.filter((e)=>{
      return e!==todo

    }))

  }
  const addtodo=(title,desc)=>{
    let sno;
    console.log("i am adding a todo",title,desc);
    if(todos.length===0){
      sno=1;
    }
    sno=todos[todos.length] +1
    let mytodo={
      sno :sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,mytodo]);

  }
  const [todos,setTodos]=useState([initTodo])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  })
  return (
    <div className="App">
      <Header title="My Todo List" searchBar={false}/> 
      <Addtodo addtodo={addtodo}/>
      <Todos todos={todos}  onDelete={onDelete}/>
      <Footer/>
      
    </div>
  );
}

export default App;
