import React, { useRef } from 'react'
import ButtonComponent from '../../components/button'
import InputComponent from '../../components/input'
import './style.css'

export default function FormLoginContainer() {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleOnChangeEmail = (e) => {
        emailRef.current = e.target.value;
    }
    const handleOnChangePassword = (e) => {
        passwordRef.current = e.target.value;
    }
    const handleLogin = () => {
        let mess = "";
        if(!emailRef.current) {
            mess = "Email is required";
        } else if(!passwordRef.current) {
            mess = "Password is required";
        } else {
            mess = "Login successfully!"
        }
        alert(mess);
    }

    return (
        <div className="form-login">
            <InputComponent 
                placeholder="Email hoặc số điện thoại"
                onChange={handleOnChangeEmail}
            />
            <InputComponent 
                placeholder="Mật khẩu"
                onChange={handleOnChangePassword}
            />
            <ButtonComponent 
                title="Đăng nhập" 
                color="#1877f2" 
                width="100%"
                onClick={handleLogin}
            />
            <p className="p-remmember-pass">Quên mật khẩu?</p>
            <hr/>
            <ButtonComponent title="Tạo tài khoản mới" color="#42b72a" width="50%" />
        </div>
    )
}
