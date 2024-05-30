"use client"

import { Animation } from "@/components/Delete"
import TodoItem from "@/components/TodoItem"
import { useState } from "react"
import ThemeSwitcher from "./ThemeSwitcher"

interface TodoList {
    todoList : [{
            id: string
            todo: string
            dateTime: string
            status : boolean
        }
    ]
}


interface Item {
    id: string
    todo: string
    // dateTime: string
    status : boolean
}


export default  function TodoPage( {todoList} : any){

    const [todoItems, setTodoItems] = useState([...todoList])
    const [click, setClick] = useState(false)


    function handleclick(){
        setClick(!click)
    }

    function updateItem(item : Item){
        setTodoItems((prevValue)=>{
            return(prevValue.map((obj)=>obj.id === item.id ? { ...obj, todo: item.todo } : obj))
        })
    }


    function deleteItem(id: string){
        setTodoItems((prevValue) =>{
            return ( prevValue.filter((item)=>{
                return item.id != id
            }) )
        })
    }


    return (
        <div className="w-screen h-screen dark:text-gray-300 ">
            <div className="w-full h-full flex justify-center pt-6 items-start">
                <div className="flex flex-col w-7/12 justify-center">
                    <ThemeSwitcher/>
                    <div className="text-center mb-6">
                        <h1 className="font-bold text-2xl">ToDo List</h1>
                    </div>
                    <div className="flex justify-center w-full">
                        <button onClick={handleclick} className="p-2 hover:bg-indigo-700 w-full bg-indigo-600 font-semibold text-white dark:border-0 dark:bg-indigo-800 dark:hover:bg-indigo-700 rounded-lg border">ADD NEW TASK +</button>
                    </div>

                    <div className="flex-col mt-6 ">
                        <div className="flex font-semibold dark:border-0 dark:bg-gray-800 text-sm p-2 w-full bg-gray-300 rounded-t-lg justify-between mb-2">
                            <span className="ml-4">Task</span>
                            <span className="mr-6">Action</span>
                        </div>

                        {todoItems.map((singleTodo: any)=>{


                            return (
                                <TodoItem 
                                id={singleTodo.id} 
                                todoItem = {singleTodo.todo} 
                                dateTime = {singleTodo.dateTime} 
                                status={singleTodo.status}
                                deleteItem={deleteItem}
                                updateItem={updateItem}
                                
                        />
                            )    
                        })}

                        <TodoItem
                        id="1"
                        todoItem="testing this todo for new changes"
                        dateTime="new date"
                        status={false}
                        deleteItem={deleteItem}
                        />

                    </div>

                </div>
            </div>

            <Animation placeholder="Enter Todo" setTodoItems={setTodoItems} title="New Task" click={click} setClick={setClick}/>


            {/* <div className="">
                
                <div className= {click?"hidden":"backdrop-blur-xs bg-opacity-25 bg-gray-500 absolute flex justify-center items-center p-6 inset-0 left-0"} >
                    <div className="flex-col items-center w-5/12 bg-white p-4 rounded-lg">
                        <div className="flex justify-between">
                            <div className="text-lg ml-1">Task</div>
                            <div onClick={handleclick} className="text-md cursor-pointer bg-gray-200 px-2 rounded-full hover:bg-gray-300"> x </div>
                        </div>
                        <input className="border-2 mt-2 w-full pl-2 text-lg rounded-md py-1" placeholder="Enter Todo" type="text" />
                        <button className=" mt-4 p-1 px-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700">Submit</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}