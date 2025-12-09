import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Coctails from './components/Coctails';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

gsap.registerPlugin(ScrollTrigger, SplitText);  

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero/>
      <Coctails/>
    </main>
  );
};

export default App;