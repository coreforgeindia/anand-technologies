import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const canonicalUrl = new URL(request.url)
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0].trim()
  const requestProtocol = forwardedProtocol ? `${forwardedProtocol}:` : canonicalUrl.protocol
  const requestHost = (
    request.headers.get('x-forwarded-host') ??
    request.headers.get('host') ??
    canonicalUrl.hostname
  ).split(',')[0].trim()
  const requestHostname = requestHost.split(':')[0].toLowerCase()
  let shouldRedirect = false

  const isLocalhost =
    requestHostname === 'localhost' ||
    requestHostname === '127.0.0.1' ||
    requestHostname.startsWith('192.168.') ||
    requestHostname.startsWith('10.') ||
    requestHostname.endsWith('.local')

  if (requestProtocol === 'http:' && !isLocalhost && process.env.NODE_ENV !== 'development') {
    canonicalUrl.protocol = 'https:'
    shouldRedirect = true
  }

  if (requestHostname === 'www.anandtechnologies.co.in' || requestHostname === 'anandtechnologies.co.in') {
    canonicalUrl.hostname = 'anandtechnologies.co.in'
    shouldRedirect ||= requestHostname === 'www.anandtechnologies.co.in'
    if (requestProtocol === 'https:') canonicalUrl.protocol = 'https:'
  }

  if (canonicalUrl.pathname.length > 1 && canonicalUrl.pathname.endsWith('/')) {
    canonicalUrl.pathname = canonicalUrl.pathname.replace(/\/+$/, '')
    shouldRedirect = true
  }

  return shouldRedirect ? NextResponse.redirect(canonicalUrl, 301) : NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
