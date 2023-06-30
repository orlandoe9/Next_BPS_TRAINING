import { NextResponse } from "next/server"

const allowedOrigins = process.env.NODE_ENV == 'production'
    ? ['https://www.yoursite.com', 'https://www.yoursite.com']
    : ['http://localhost:3000', 'http://www.google.com']

export function middleware(request: Request) {

    const origin = request.headers.get('origin')
    console.log(origin)

    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400, 
            statusText: "Bad Request",
            headers: {
                'Content-TYpe': 'text/plain'
            }
        })
    }

    console.log('Middleware!')
    
    console.log(request.method)
    console.log(request.method)


    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path'
}