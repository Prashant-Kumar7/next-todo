import { NextRequest, NextResponse } from "next/server";
import client from "@/db"



export async function PATCH(req:NextRequest) {

    const body = await req.json()
    try {
        const newTodo = await client.todo.update({

            data : {
                todo : body.newTodo
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