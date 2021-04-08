import React from 'react'
import ButtonComponent from '../../components/button'
import InputComponent from '../../components/input'
import './style.css'

export default function FormLoginContainer() {
    return (
        <div className="form-login">
            <InputComponent placeholder="Email hoặc số điện thoại" />
            <InputComponent placeholder="Mật khẩu" />
            <ButtonComponent title="Đăng nhập" color="#1877f2" width={100} />
            <p>Quên mật khẩu?</p>
            <hr/>
            <ButtonComponent title="Tạo tài khoản mới" color="#42b72a" width={50} />
        </div>
    )
}
