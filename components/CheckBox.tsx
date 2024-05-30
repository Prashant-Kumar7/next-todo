"use client"

import { atomFamilyItemId } from "@/hooks";
import axios from "axios";
import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil"


interface TodoItem {
    id : string;
    setTask : any
    task: boolean
}



export default function CheckBox({id, setTask, task}:TodoItem){

    function handleChange(e:any){
        console.log(e.target)
        axios.patch("http://localhost:3000/api/todo", {status: !task, todoId: id})
        setTask((prevValue: boolean)=> !prevValue)
    }


    return (
        <div  className="round mr-4 ">
              <input onChange={handleChange} name="checkbox" checked={task} type="checkbox" id={id} />
              <label className="dark:bg-gray-900 dark:border-0 dark:hover:bg-gray-700" htmlFor={id}></label>
        </div>
    )
}