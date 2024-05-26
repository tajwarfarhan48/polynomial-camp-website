import '../output.css';

function Banner() {
    return (
        <div class="h-screen flex items-center justify-center">
            <div class="flex flex-col items-center justify-center animate-[fadeIn_1.1s_ease-in_1]">
                <h1 class="text-5xl lg:text-9xl font-black text-purple text-center">POLYNOMIAL</h1>
                <h1 class="text-5xl lg:text-9xl font-black text-purple text-center">CAMP</h1>
                <p class="text-center text-purple my-4 text-lg lg:text-3xl font-light">Where Ideas Come to Be Explored</p>
            </div>
        </div>
    );
  }
  
export default Banner;