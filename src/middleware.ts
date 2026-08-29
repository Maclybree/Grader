import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { cookies: { get: (n) => req.cookies.get(n)?.value }})
  const { data: { user } } = await supabase.auth.getUser()
  const { data: profile } = user ? await supabase.from('profiles').select('role').eq('id', user.id).single() : { data: null }
  
  if (!user && !req.nextUrl.pathname.startsWith('/login') && !req.nextUrl.pathname.startsWith('/reset')) return NextResponse.redirect(new URL('/login', req.url))
  if (user && req.nextUrl.pathname.startsWith('/login')) return NextResponse.redirect(new URL(profile?.role==='admin'?'/admin':'/teacher', req.url))
  if (user && req.nextUrl.pathname.startsWith('/admin') && profile?.role!=='admin') return NextResponse.redirect(new URL('/teacher', req.url))
  return res
}
export const config = { matcher: ['/((?!_next|api|.*\\..*).*)'] }
