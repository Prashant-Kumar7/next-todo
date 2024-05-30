import { Calender } from "@/components/Calender";
import { SideBar } from "@/components/SideBar";
import TodoPage from "@/components/TodoPage";
import client from "@/db"

export default async function(){

    const todos = await client.todo.findMany({})

    return (
        <div className="grid grid-cols-7 w-screen h-screen relative">
            <div className="col-span-1 border-r border-gray-700 dark:bg-slate-900">
                <SideBar/>
            </div>
            <div className="col-span-4 flex justify-center">
                <TodoPage todoList = {todos}/>
            </div>
            <div className="col-span-2 p-6 flex justify-center border-l dark:bg-slate-900 border-gray-700">
                <Calender/>
            </div>
        </div>
    )
}