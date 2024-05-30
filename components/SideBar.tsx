"use client"

import { useState } from "react"
import { MyList } from "./MyList";
import { List } from "@material-tailwind/react";

export function SideBar(){


    const [myList, setMyList] = useState<string[]>([])
    const [field, setField] = useState(false)
    const [input, setInput] = useState("");

    function handleClick(){
        setField(!field)
    }

    function handleKey(e:any){
        if(e.key === "Enter"){
            setMyList((prevValue)=>{
                return [...prevValue, input]
            })
            setInput("")
        }
    }

    function handleChange(e:any){
        setInput(e.target.value);
    }

    return (
        <div className="flex flex-col w-full h-full">
                    <div className="font-bold text-2xl text-gray-400">
                        <h1 className="m-5 p-2">My List</h1>
                    </div>

                    {myList.map((item)=>{
                        return (
                            <MyList List={item} />
                        )
                    })}

                    {field?  <div className="px-3 py-1">
                        <input value={input} autoFocus={true} onChange={handleChange} onKeyUp={handleKey} style={{width:"13rem"}} className="border-0 focus:border-transparent focus:ring-0 p-2 dark:bg-gray-900 hover:bg-gray-800 rounded-lg text-gray-200 font-semibold" placeholder="Add List" type="text" />
                    </div>: <div className="px-4 py-1">
                        <button onClick={handleClick} className="rounded-lg p-2 pl-4 text-left hover:bg-gray-800 w-full">+ New List</button>
                    </div>}
                    

                    

                </div>
    )
}