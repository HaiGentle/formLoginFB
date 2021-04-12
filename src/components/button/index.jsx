import './style.css'

export default function ButtonComponent (props) {
    const {title, color, width, ...extProps} = props;
    return (
        <button 
            className="btn"
            style={{width, backgroundColor: color}}
            {...extProps}
        > 
            {title} 
        </button>
    )
}