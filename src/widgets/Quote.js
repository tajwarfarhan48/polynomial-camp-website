import '../output.css';

function Quote({ text, author }) {
    return (
        <div className="w-full flex justify-center">
            <div className="bg-black border border-purple rounded-md p-4 space-y-6 flex flex-col max-w-md">
                <p className={"leading-relaxed tracking-wide font-light text-cream text-center text-lg"}>{text}</p>
                <p className="font-bold text-cream text-center text-sm">{author}</p>
            </div>
        </div>
    );
  }
  
export default Quote;