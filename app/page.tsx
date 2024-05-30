import TodoItem from "@/components/TodoItem";
import AddButton from "./testing/page";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center pt-6 items-start">
      <div className="flex flex-col w-7/12 justify-center">
        <div className="text-center mb-6">
          <h1 className="font-bold text-2xl">ToDo List</h1>
        </div>
        <div>
          <button className="p-2 bg-indigo-600 font-semibold text-white rounded-lg w-full border">ADD NEW TASK +</button>
        </div>

        <div className="flex-col mt-6">
          <div className="flex font-semibold text-sm p-2 w-full bg-gray-100 rounded-t-lg justify-between mb-2">
            <span className="ml-4">Task</span>
            <span className="mr-6">Action</span>
          </div>


        </div>


    </div>
    </div>
  )
}
