import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })


    //   add more provider 
  ],

  pages: {
    signIn: "/login",
  }


}
export default NextAuth(authOptions)