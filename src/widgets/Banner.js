import '../output.css';
// import PolynomialSVG from '../static/svg/polynomial.svg';
// import CampSVG from '../static/svg/camp.svg';

function Banner() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center animate-[fadeIn_1.1s_ease-in_1]">
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-purple text-center">POLYNOMIAL</h1>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-purple text-center">CAMP</h1>
                <p  className="text-lg md:text-2xl lg:text-3xl font-extralight text-purple text-center my-4">Where Ideas Come to Be Explored</p>
                {/* <img className="size-50" src={PolynomialSVG}></img>
                <img className="size-24" src={CampSVG}></img> */}
                {/* <p  className="text-md md:text-xl lg:text-2xl font-extralight text-purple text-center my-4">Where Ideas Come to Be Explored</p> */}
            </div>
        </div>
    );
  }
  
export default Banner;