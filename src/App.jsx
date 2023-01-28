import Home from './assets/components/Home'
import Header from './assets/components/Header'
import About from './assets/components/About'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'

export default function App() {
  return (
    <div className="bg-nicewhite transition-all dark:bg-semiblack flex flex-col items-center snap-y snap-mandatory">
      {console.log('me contrata <3 ')}
      <Home />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
