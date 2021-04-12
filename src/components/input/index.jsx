import './style.css'

export default function InputComponent (props) {
    const {placeholder, width, ...extProps} = props;
    return (
        <input 
            className="inpt"
            placeholder={placeholder} 
            style={{width}}
            {...extProps}
        />
    )
}