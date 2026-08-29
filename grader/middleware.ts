import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  let res = NextResponse.next()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (n) => req.cookies.get(n)?.value, set: () => {}, remove: () => {} } }
  )
  const { data: { session } } = await supabase.auth.getSession()

  if (!session && req.nextUrl.pathname.startsWith('/admin') || req.nextUrl.pathname.startsWith('/teacher')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  if (session && req.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/teacher', req.url))
  }
  return res
}
export const config = { matcher: ['/admin/:path*', '/teacher/:path*', '/login'] }
