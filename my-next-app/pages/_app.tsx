import '../app/globals.css'
import 'animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/NavBar'
import { Footer } from '@/components/Footer'

function MyApp ({ Component, pageProps }: AppProps) {
    return <div>
        <Navbar />
         <div>
            <Component {...pageProps} />
         </div>

        <Footer />
    </div>
}

export default MyApp