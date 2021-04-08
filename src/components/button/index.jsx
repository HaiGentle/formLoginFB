import './style.css'

export default function ButtonComponent (props) {
    const {title, color, width} = props;
    return (
        <button style={{width: `${width}%`, backgroundColor: color}}> {title} </button>
    )
}