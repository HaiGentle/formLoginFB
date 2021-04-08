import './style.css'

export default function InputComponent (props) {
    const {handleOnChange, placeholder} = props;
    return (
        <input onChange={handleOnChange} placeholder={placeholder} />
    )
}