"use client"

import { clickAtom } from "@/hooks"
import { useRecoilState } from "recoil"

export function AddButton(){

    const [click, setClick] = useRecoilState(clickAtom) 

    function handleclick(){
        setClick(!click)
        console.log(click)
    }


    return (
            <div className="flex justify-center w-full">
                <button onClick={handleclick} className="p-2 hover:bg-indigo-700 w-full bg-indigo-600 font-semibold text-white rounded-lg border">ADD NEW TASK +</button>
            </div>
    )
}

export function InputField(){


    const [click, setClick] = useRecoilState(clickAtom) 

    function handleclick(){
        setClick(!click)
        console.log(click)
    }

    return (
            <div className="">
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
            </div>
    )
}