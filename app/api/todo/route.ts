import { NextRequest, NextResponse } from "next/server";
import client from "@/db"
  

// interface Body{
//     todo : string
//     dateTime: string
// }


export async function POST(req:NextRequest) {
    const body = await req.json()

    console.log(body)

    try {
        const todos = await client.todo.create({
            data : {
                todo : body.todo,
                // dateTime : body.dateTime
            },
            select : {
                todo : true,
                id: true,
                status: true,
            }
        })

        return NextResponse.json({
            msg : "todo added successfully",
            todos : todos
        })
    } catch (error) {
        return NextResponse.json({
            msg : "error while adding new todo"
        })
    }
}


export async function DELETE(req:NextRequest) {

    const body = await req.json()
    try {
        await client.todo.delete({
            where : {
                id : body.todoId
            }
        })

        return NextResponse.json({
            mgs : "todo deleted successfully"
        })
    } catch (error) {
        return NextResponse.json({
            mgs : "some error occured during delete"
        })
    }
}


export async function PUT(req:NextRequest) {

    const body = await req.json()
    try {
        const newTodo = await client.todo.update({

            data : {
                todo : body.newTodo,
                // dateTime : body.dateTime
            },
    
    
            where : {
                id : body.todoId
            },

            select : {
                id : true,
                todo: true,
                status: true
            }
        })

        return NextResponse.json({
            msg : "todo updated successfully",
            newTodo : newTodo
        })

    } catch (error) {
        return NextResponse.json({
            msg: "error during update"
        })
    }
    
    
}


export async function PATCH(req: NextRequest) {
    const body = await req.json()


    try {

        await client.todo.update({
            data : {
                status : body.status
            },
            where : {
                id : body.todoId
            }
        })

        return NextResponse.json({
            msg: "todo status updated successfully"
        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            msg: "error during status patching"
        })
    }
    


}


export async function GET(req : NextRequest){

    const todo = await client.todo.findMany({})

    return NextResponse.json({
        todos : todo
    })
}