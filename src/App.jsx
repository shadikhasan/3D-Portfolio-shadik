import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Services } from "./components";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <About />
        <Experience />
        <Tech />
        <div className="bg-gradient-to-bl from-slate-900 to-cyan-700 w-full rounded-[10px]">
          <Services />
        </div>
        
        <Works />
        <Feedbacks />

        <AboutMe/>
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
