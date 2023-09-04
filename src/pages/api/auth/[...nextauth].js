import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers:[
    GoogleProvider({
            clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
          }), 
    ],
    secret:import.meta.env.VITE_JWT_SECRET
})