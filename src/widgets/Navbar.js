import '../output.css';
import Button from './Button';

function Navbar() {
    return (
      <div class="sticky top-0 z-50 w-full bg-black flex justify-between">
        <div class="flex items-center text-purple text-lg font-black m-4"><p>POLYNOMIAL CAMP</p></div>
        <div class="m-4"><Button label={"Sign Up"} link={""} /></div>
      </div>
    );
  }
  
export default Navbar;