"use client"

import { Modal } from "flowbite-react";
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


    function handleSubmit(){

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

            <Modal show={click} size="3xl" onClose={handleClick} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                        <div className="">
                            <input autoFocus={true} name="todoInput" onChange={handleChange} className="bg-transparent w-full focus:outline-none focus:border-gray-400 focus:ring-0 font-semibold dark:text-gray-400 rounded-lg" placeholder={placeholder} type="text" />
                        </div>
                        <div>
                            <button onClick={handleSubmit}  className="bg-indigo-800 hover:bg-indigo-700 rounded-lg p-2">Submit</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
    )
}