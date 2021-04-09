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
        if(emailRef.current && passwordRef.current) {
            alert("Login Successfully")
        }
        else {
            alert("email required")
        }
    }

    return (
        <div className="form-login">
            <InputComponent 
                placeholder="Email hoặc số điện thoại"
                handleOnChange={handleOnChangeEmail}
            />
            <InputComponent 
                placeholder="Mật khẩu"
                handleOnChange={handleOnChangePassword}
            />
            <ButtonComponent 
                title="Đăng nhập" 
                color="#1877f2" 
                width={100}
                onClick={handleLogin}
            />
            <p>Quên mật khẩu?</p>
            <hr/>
            <ButtonComponent title="Tạo tài khoản mới" color="#42b72a" width={50} />
        </div>
    )
}
