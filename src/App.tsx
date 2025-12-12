import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import About from './components/About';
import Coctails from './components/Coctails';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Art from './components/Art.tsx';
import Menu from './components/Menu.tsx';
import Contact from './components/Contact.tsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Coctails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
