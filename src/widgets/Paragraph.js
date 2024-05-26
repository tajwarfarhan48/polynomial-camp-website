import '../output.css';

function Paragraph({ color, text }) {
    if (color === undefined || color === null) color = 'cream';

    return (
        <p class={"leading-relaxed tracking-wide font-light text-lg text-" + color}>{text}</p>
    );
}

Paragraph.defaultProps = {

};

export default Paragraph;