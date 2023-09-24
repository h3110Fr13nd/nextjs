import NextAuth from "next-auth";
import { authOptions } from "./auth";




export const handler: any = NextAuth(authOptions);

export { handler as GET, handler as POST} ;

