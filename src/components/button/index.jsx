import './style.css'

export default function ButtonComponent (props) {
    const {title, color, width, ...buttonProps} = props;
    return (
        <button 
            style={{width: `${width}%`, backgroundColor: color}}
            {...buttonProps}
        > 
            {title} 
        </button>
    )
}