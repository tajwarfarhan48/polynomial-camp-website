import '../output.css';

function Button({ label, link }) {
    return (
        <button class="bg-red rounded-full px-4 py-2 w-fit"><a target="_blank" rel="noreferrer" href={link}>{ label }</a></button>
    );
}

export default Button;