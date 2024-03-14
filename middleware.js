import NextAuth from "next-auth";
import { authConfig } from "./app/authconfig";
const nextAuthOptions = {
  ...authConfig,};
export default NextAuth(nextAuthOptions).auth;

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};