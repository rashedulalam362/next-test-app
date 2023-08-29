import { NextResponse } from "next/server";
import { headers } from "next/headers";
export async function GET(req, res){
   
    const headerList=headers()
    let user_id=headerList('user_token')

    return NextResponse.json({ "message": user_id})
  
}