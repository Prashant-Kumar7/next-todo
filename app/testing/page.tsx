import { Calender } from "@/components/Calender";
import { SideBar } from "@/components/SideBar";
import { SlidingSideBar } from "@/components/SlidingSideBar";
import TodoPage from "@/components/TodoPage";
import client from "@/db"

export default async function(){

    const todos = await client.todo.findMany({})

    return (
        <div className="grid grid-cols-12 w-screen h-screen">
            {/* <div className="col-span-1 border-r border-gray-700 dark:bg-slate-900">
                <SideBar/>
            </div> */}
            <div className="col-span-2">
                <SlidingSideBar/>
            </div>
            <div className="col-span-7 flex justify-center">
                <TodoPage todoList = {todos}/>
            </div>
            <div className="col-span-3 p-6 flex justify-center  dark:bg-slate-900 border-gray-700">
                <Calender/>
            </div>
        </div>
    )
}