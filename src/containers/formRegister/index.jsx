import React from 'react'
import ButtonComponent from '../../components/button'
import InputComponent from '../../components/input'
import RegisterPolicy from '../../components/policy'
import RegisterTitleCpn from '../../components/registerTitle'
import SelectCpn from '../../components/select'
import './style.css'

const unitDDMMYY = (arr) => {
    if (arr.length > 31) {
        let date = new Date();
        const currentYear = date.getFullYear();
        for (let i = 0; i < arr.length; i++) {
            arr[i] = currentYear - i;
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = i + 1;
        }
    }

    return arr;
}
export default function FormRegisterContainer() {
    let dd = new Array(31), mm = new Array(12), yy = new Array(150);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const registerFormData = new FormData(e.target);
        let mess = "";
        if (!registerFormData.get("firstName")) {
            mess = "Firt name is required";
        } else if (!registerFormData.get("lastName")) {
            mess = "Last name is required";
        } else if (!registerFormData.get("email")) {
            mess = "Email or phone number is required";
        } else if (!registerFormData.get("password")) {
            mess = "Password is required";
        } else if (isNaN(registerFormData.get("dd")) || isNaN(registerFormData.get("mm")) || isNaN(registerFormData.get("yy"))) {
            mess = "Birthday error!";
        } else if (!registerFormData.get("gender")) {
            mess = "Gender is required";
        } else {
            mess = "Register successfully!"
        }
        alert(mess);
    }

    return (
        <div className="form-register">
            <form onSubmit={handleRegisterSubmit}>
                <RegisterTitleCpn title="Đăng ký" text="Nhanh chóng và dễ dàng" />
                <div className="register__fullname">
                    <InputComponent
                        width="48%"
                        placeholder="Họ"
                        name="firstName"
                    />
                    <InputComponent
                        width="48%"
                        placeholder="Tên"
                        name="lastName"
                    />
                </div>
                <InputComponent
                    placeholder="Số đi động hoặc email"
                    name="email"
                />
                <InputComponent
                    placeholder="Mật khẩu mới"
                    type="password"
                    name="password"
                />
                <p className="register__birthday-title">Ngày sinh?</p>
                <div className="register__birthday">
                    <SelectCpn
                        title="Ngày"
                        option={unitDDMMYY(dd)}
                        width="30%"
                        name="dd"
                    />
                    <SelectCpn
                        title="Tháng"
                        option={unitDDMMYY(mm)}
                        width="30%"
                        name="mm"
                    />
                    <SelectCpn
                        title="Năm"
                        option={unitDDMMYY(yy)}
                        width="30%"
                        name="yy"
                    />
                </div>
                <p className="register__gender-title">Giới tính?</p>
                <div className="register__gender">
                    <label htmlFor="male" className="register__male">
                        <span>Nam</span>
                        <InputComponent
                            id="male"
                            name="gender"
                            type="radio"
                            value="male"
                            width="12px"
                        />
                    </label>
                    <label htmlFor="female" className="register__female">
                        <span>Nữ</span>
                        <InputComponent
                            id="female"
                            name="gender"
                            type="radio"
                            value="female"
                            width="12px"
                        />
                    </label>
                    <label htmlFor="other" className="register__other">
                        <span>Tùy chỉnh</span>
                        <InputComponent
                            id="other"
                            name="gender"
                            type="radio"
                            value="other"
                            width="12px"
                        />
                    </label>
                </div>
                <RegisterPolicy policy="Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào." />
                <div className="register__btn-submit">
                    <ButtonComponent
                        width="100%"
                        title="Đăng ký"
                        color="#00a400"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}
