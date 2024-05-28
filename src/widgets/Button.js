import '../output.css';

function Button({ label, link }) {
    return (
        <a target="_blank" rel="_noreferrer" href={link}><button className="transition duration-100 ease-in bg-teal hover:bg-darkTeal active:bg-veryDarkTeal rounded-full px-4 py-2 w-fit"><p className="font-bold">{ label }</p></button></a>
    );
}

export default Button;