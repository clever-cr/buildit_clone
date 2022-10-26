import Footer from '../components/Common/Footer'
import NavBar from '../components/Common/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
      )
}

export default MyApp
