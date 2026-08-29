import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { cookies: { get: (n) => req.cookies.get(n)?.value, set: () => {} }})
  const { data: { user } } = await supabase.auth.getUser()
  if (!user && !req.nextUrl.pathname.startsWith('/login')) return NextResponse.redirect(new URL('/login', req.url))
  if (user && req.nextUrl.pathname.startsWith('/login')) return NextResponse.redirect(new URL('/dashboard', req.url))
  return res
}
export const config = { matcher: ['/((?!_next|api|.*\\..*).*)'] }
