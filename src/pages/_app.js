import '@/styles/globals.css'
import Navbar from "@/components/Layout/Navbar";
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps }) {
  return (
   
    // here session provider is working like contextAPI of react //
     <SessionProvider session={pageProps.session}> 
     <Navbar />
      <Component {...pageProps} />
    </SessionProvider>

     
  
  );
}
