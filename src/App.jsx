import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Conect from './components/4-contect/Conect'
import Planetaria from './components/5-Planetaria/Planetaria'
import Footer from './components/6-footer/Footer'
import ScrollToTop from "react-scroll-to-top";
export default function App() {
  return (
    <div className="continer border">
      <ScrollToTop smooth top={400}  className='top' component={<p style={{ color: "#fff"}}>^</p>}  style={{borderRadius:'50%', width:'40px',height:'39px',background:'#345'}}/>
       <Header/>
       <Hero/>
       <div className='print'/>
       <Main/>
       <div className='print'/>
       <Conect/>
       <div className='print'/>
       <Planetaria/>
       <div className='print'/>
       <Footer/>
    </div>
  )
}
