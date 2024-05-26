import '../output.css';

function Quote({ text, author }) {
    return (
        <div class="bg-purple rounded-md p-4 space-y-6 flex flex-col">
            <p class={"leading-relaxed tracking-wide font-light text-white text-center text-xl"}>{text}</p>
            <p class="font-bold text-white text-center text-sm">{author}</p>
        </div>
    );
  }
  
export default Quote;