import '../output.css';

function Button({ label, link }) {
    return (
        <button class="bg-teal rounded-full px-4 py-2 w-fit"><a target="_blank" rel="noreferrer" href={link}><p class="font-bold">{ label }</p></a></button>
    );
}

export default Button;