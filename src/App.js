import './output.css';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Intro from './Intro.js';
import Camp1 from './Camp1.js';
import Outline from './Outline.js';
import FAQ from './FAQ.js';
import Camp2 from './Camp2.js';
import Camp3 from './Camp3.js';
import Camp4 from './Camp4.js';
import Team from './Team.js';

function App() {
  return (
    <div class="flex flex-col items-center justify-center">
      <Navbar />
      <Banner />
      <div class="mx-6 max-w-[1200px] flex flex-col justify-center items-center">
        <Intro />
        <Team />
        <Camp1 />
        <Camp2 />
        <Camp3 />
        <Camp4 />
        <Outline />
        <FAQ />
      </div>
    </div>
  );
}

export default App;
