import '../output.css';
import Button from './Button';

function Navbar() {
    return (
      <div className="sticky top-0 z-50 w-full bg-black flex justify-between">
        <div className="flex items-center text-purple text-lg font-black m-4"><p>POLYNOMIAL CAMP</p></div>
        <div className="m-4"><Button label={"Sign Up"} link={"https://docs.google.com/forms/d/e/1FAIpQLScg_J3PzjgXD_rF1rz3AqbQy_TjTJpHOfGUAvhYCzygBFzpeA/viewform"} /></div>
      </div>
    );
  }
  
export default Navbar;