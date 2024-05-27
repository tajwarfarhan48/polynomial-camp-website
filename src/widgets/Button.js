import '../output.css';

function Button({ label, link }) {
    return (
        <button className="transition duration-100 ease-in bg-teal hover:bg-darkTeal active:bg-veryDarkTeal rounded-full px-4 py-2 w-fit"><a href={link}><p className="font-bold">{ label }</p></a></button>
    );
}

export default Button;