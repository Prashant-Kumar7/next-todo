interface MyList {
    List : string
}


export function MyList({List}:MyList){
    return (
        <div className=" font-bold text-gray-400 ">
            <h2 className="mx-4 my-1 rounded-lg p-2 hover:bg-gray-800">{List}</h2>    
        </div>
    )
}