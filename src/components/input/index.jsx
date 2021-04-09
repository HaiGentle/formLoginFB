import './style.css'

export default function InputComponent (props) {
    const {handleOnChange, placeholder} = props;
    return (
        <input onChange={(e) => handleOnChange(e)} placeholder={placeholder} />
    )
}