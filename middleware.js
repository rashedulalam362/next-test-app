import { NextResponse } from "next/server";

export function middleware(req,res) {


if (req.nextUrl.pathname.startsWith('/api/product')) {
    
    const reqHeader=new Headers(req.headers)
    const berear = reqHeader.get('token')
     
   if(berear ==='example-123'){
    return NextResponse.next()
    }else{

      return NextResponse.json({msg:'Failed'},{status:401})
    }
  
}
}

export const config = {
    matcher: ['/api/:path*', '/oderlist/:path*']
  }