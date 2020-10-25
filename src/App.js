import React,{useState,useEffect} from 'react'
import Form from './components/Form'
import Todolist from './components/Todolist'
import './App.css'

export default function App() {
  const [inputText, setinputText] = useState('');
  const [todos, settodos] = useState([]);
  const [status, setstatus] = useState('all');
  const [filteredtodos, setfilteredtodos] = useState([]);

useEffect(()=>{
  const getlocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      settodos(todoLocal)
    }
  }

  getlocalTodos()
},[])

  useEffect(()=>{

    const filterhandler = () =>{
      switch(status){
        case 'completed':
          setfilteredtodos(todos.filter((todo) => todo.completed===true))
          break;
        case 'uncompleted':
          setfilteredtodos(todos.filter((todo) => todo.completed===false))
          break;
        default:
          setfilteredtodos(todos)
          break;
  
      }
    }

    const savelocaltodo=()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
    }
     

    filterhandler();
    savelocaltodo();
  },[todos,status])

  

  
 
  return (
    <div className='App'>
      <header>
          <h1>Todo list</h1>
      </header>
      <Form setstatus={setstatus} inputText={inputText} settodos={settodos} todos={todos} setinputText={setinputText}/>
      <Todolist filteredtodos={filteredtodos} todos={todos} settodos={settodos} />
    </div>
  )
}
 