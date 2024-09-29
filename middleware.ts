import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { origin } = request.nextUrl
    const cookieStore = cookies()
    const token = cookieStore.get('meu-cookie') 
    // um cookie com esse nome (meu-cookie) deve existir no navegador para que a pessoa tenha acesso

    if (!token) {
        return NextResponse.redirect(new URL(origin))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}