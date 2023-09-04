import { SessionProvider } from "next-auth/react"

// eslint-disable-next-line react/prop-types
export default function App({Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}