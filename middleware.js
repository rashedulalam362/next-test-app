import { NextResponse } from "next/server";

export function middleware(req,res) {


if (req.nextUrl.pathname.startsWith('/api/product')) {
    
    const reqHeader=new Headers(req.headers)
     reqHeader.set('user_token','123')
  
    return NextResponse.next({
        request:{headers:reqHeader}
    })
     
    
  }
  
}
  export const config = {
    matcher: ['/api/:path*', '/oderlist/:path*']
  }