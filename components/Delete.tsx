"use client"

import axios from "axios";
import { useState } from "react"



interface clickType {
    click : boolean
    setClick : any
    placeholder : string
    title: string
    setTodoItems? : any
    id? : string 
    UpdateTodoItems? : any
}

export function Animation({click, setClick, placeholder, title, setTodoItems, id, UpdateTodoItems}: clickType){

    
    function handleClick(){
        setClick(!click)
    }


    function handleSubmit(event: any){

        if(title === "Update"){
            axios.patch("http://localhost:3000/api/todo/update", {newTodo: input , todoId : id}).then((response)=>{
                UpdateTodoItems(response.data.newTodo)
                setClick(!click)
            })
        } else {
            axios.post("http://localhost:3000/api/todo", {todo : input}).then((response)=>{
                setTodoItems((prevValue:any)=>{
                    return ([...prevValue, response.data.todos])
                })
                setClick(!click)
            })
        }
        
    }


    const [input, setInput] = useState("");

    function handleChange(event: any){
        setInput(event.target.value)
    }


    return (
  
            <div className={click? "top-0 left-0 top-0 w-screen h-screen backdrop-blur-xs bg-opacity-25 bg-slate-700 absolute flex justify-center items-center": "hidden"} >
                <div className="flex justify-center items-center w-full h-full">
                    <div className="bg-white w-5/12 dark:bg-gray-900 p-6 rounded-lg">
                        <div className="flex justify-between mb-4">
                            <span className="pl-2 font-semibold">{title}</span>
                            <span onClick={handleClick} className="text-md cursor-pointer bg-gray-200 dark:bg-gray-700 px-2 rounded-full">x</span>
                        </div>
                        <input name="todoInput" onChange={handleChange} className="border-2 dark:bg-gray-900 dark:border-gray-700 w-full text-lg pl-2 rounded-md mb-4" type="text" placeholder={placeholder}  />
                        {/* <div className="flex mb-4">
                            <input className="border-2 rounded-md px-2 text-lg"  placeholder="date-time" type="datetime-local" name="" id="" />
                        </div> */}
                        <div>
                            <button onClick={handleSubmit} className="bg-indigo-600 dark:bg-indigo-800 dark:hover:bg-indigo-700  px-2 py-1 hover:bg-indigo-700 text-white  text-md rounded-md">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}