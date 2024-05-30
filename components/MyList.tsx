interface MyList {
    List : string
}


export function MyList({List}:MyList){
    return (
        <div className=" px-4 font-bold text-gray-400 ">
            <button className=" text-left pl-4 my-1 w-full rounded-lg p-2 hover:bg-gray-800 focus:bg-blue-950 focus:text-gray-200">{List}</button>    
        </div>
    )
}