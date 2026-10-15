import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.protocol !== 'http:') return NextResponse.next()

  const httpsUrl = request.nextUrl.clone()
  httpsUrl.protocol = 'https:'
  return NextResponse.redirect(httpsUrl, 308)
}

export const config = {
  matcher: '/:path*',
  runtime: 'experimental-edge',
}
