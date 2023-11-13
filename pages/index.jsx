import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import MobileHeader from "@/components/template/MobileHeader";
import Homemainsection from "@/components/template/homemainsection";
import '../src/app/globals.css';
import '../src/assets/css/style.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../src/assets/css/responsive.css';




function Home({ pageProps }) {
  

  return (
    <div className="ptr-fig-sc">
      <Header />
      <MobileHeader />
      <Homemainsection {...pageProps}/>


      {/* <Footer /> */}

    </div>
  )
}


export default Home