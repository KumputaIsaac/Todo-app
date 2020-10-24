import React,{useState} from 'react'
import Form from './components/Form'
import Todolist from './components/Todolist'
import './App.css'

export default function App() {
  const [inputText, setinputText] = useState('');
  const [todos, settodos] = useState([]);
  return (
    <div className='App'>
      <header>
          <h1>Todo list</h1>
      </header>
      <Form inputText={inputText} settodos={settodos} todos={todos} setinputText={setinputText}/>
      <Todolist todos={todos}/>
    </div>
  )
}
 