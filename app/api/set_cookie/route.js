import { NextResponse } from "next/server"

export async function GET(){

    return NextResponse.json({
        status: 200, 
    },{
        status: 200,
        headers: { 'Set-Cookie': 'theme=dark; Path=/' },


    }
      

    )
}