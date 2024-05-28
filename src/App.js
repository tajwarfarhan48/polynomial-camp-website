import './output.css';
import './App.css';
import Navbar from './widgets/Navbar.js';
import Banner from './widgets/Banner.js';
import Intro from './widgets/Intro.js';
import Camp1 from './widgets/Camp1.js';
import Outline from './widgets/Outline.js';
import FAQ from './widgets/FAQ.js';
import Camp2 from './widgets/Camp2.js';
import Camp3 from './widgets/Camp3.js';
import Camp4 from './widgets/Camp4.js';
import Team from './widgets/Team.js';
import Fees from './widgets/Fees.js';
import Footer from './widgets/Footer.js';

function App() {
  return (
    <div className="flex flex-col items-center bg-black justify-center">
      <Navbar />
      <Banner />
      <div className="mx-6 max-w-[1200px] flex flex-col justify-center items-center">
        <Intro />
        <Team />
        <Camp1 />
        <Camp2 />
        <Camp3 />
        <Camp4 />
        <Outline />
        <Fees />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
