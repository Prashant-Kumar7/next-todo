
"use client"

import CheckBox from "./CheckBox";
import { useState } from "react";
import { Animation } from "./Delete";
import axios from "axios";

interface TodoItem {
    todoItem: string
    dateTime: string
    status : boolean
    id : string
    deleteItem : any
    updateItem? : any
}

export default function TodoItem({id , todoItem, status, dateTime, deleteItem, updateItem}:TodoItem){

  const [editClick, setEditClick] = useState(false)
  const [task, setTask] = useState(status)


  function handleEditClick(){
    setEditClick(!editClick);
  }

  


    return (
        <div className={task?"flex shadow p-2 mb-2 justify-between bg-green-300 dark:border-0 dark:bg-emerald-700 ":"flex shadow dark:border-0 dark:bg-gray-800 p-2 mb-2 justify-between bg-white"}>
          <div className="flex">

              <CheckBox id={id} task={task} setTask={setTask}/>
  

            <span className={task?"line-through" : ""}>{todoItem}
                <p className="text-xs dark:text-gray-400 text-gray-200">{dateTime}</p>
            </span>
          </div>
          <div className="flex">
          {task? <div></div> : <svg onClick={handleEditClick}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-indigo-700 hover:text-indigo-600 h-6 mr-4 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>}
            <svg onClick={()=>{
              deleteItem(id)
              axios.delete("http://localhost:3000/api/todo" , {data : {todoId : id}})
            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-red-500 h-6 mr-2 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </div>

          <Animation placeholder="Update Todo" title="Update" UpdateTodoItems={updateItem} id ={id} click = {editClick} setClick = {setEditClick}/>


        </div>
    )
}