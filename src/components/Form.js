import React from 'react'

export default function Form({setinputText,todos,settodos,inputText}) {
    const inputtexthandler=(e)=>{
        setinputText(e.target.value)
    }
    const submittodohandler=(e)=>{
        e.preventDefault();
        settodos([
            ...todos,
            {text: inputText,completed: false, id: Math.random()*1000}
        ]);
        setinputText('')
    }
    return (
        <div>
            <form >
                <input value={inputText} onChange={inputtexthandler} type="text" className="todo-input"/>
                <button onClick={submittodohandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todo" className="filter-todo">
                        <option value="all">all</option>
                        <option value="completed">completed</option>
                        <option value="uncompleted">uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
