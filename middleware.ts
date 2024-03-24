import { getToken } from "next-auth/jwt";
import { signIn, useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import Keycloak from 'keycloak-js';
import { authOptions } from "./app/api/auth/[...nextauth]/route";


export const config = {
  matcher: ['/dashboard/:path*'],
};

export async function middleware(req: NextRequest) {
  const secret = process.env.SECRET; // Use environment variable for secrets
  const session = await getToken({ req, secret }).catch((error) => {
    console.error('Authentication error:', error);
    return null; // Return null on error to handle the error gracefully
  });

  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = '/api/auth/signin';
    // Optional: Add a query parameter to indicate why the user was redirected
    url.searchParams.set('reason', 'unauthenticated');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}