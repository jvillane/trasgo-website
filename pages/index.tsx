import type { NextPage } from 'next'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Characteristics from "../components/Characteristics";
import Features from '../components/Features';

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <NavBar/>
      <main>
        <Characteristics/>
        <Features/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
