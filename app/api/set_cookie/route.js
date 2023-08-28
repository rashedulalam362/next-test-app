import { NextResponse } from "next/server"

export async function GET(){

    return NextResponse.json({
     
    },{
        status: 200,
        headers: { 'Set-Cookie': 'theme=dark; Path=/' ,
        'Set-Cookie2': 'theme2=dark2; Path=/'
    },


    }
      

    )
}