import React from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import "../../assets/fonts/ionicons.min.css"
import "../../assets/css/Features-Small-Icons-icons.css"
import "../../assets/css/Login-Form-blue-Gradient-Blue-gradient-login-form.css"
import "../../assets/css/Login-Form-blue-Gradient.css"

const Login = () => {
    return (
        <div>
            <section>
                <div className="lgp-hd">
                    <h2><strong>Nền tảng điều phối xử lý sự cố an toàn thông tin mạng quốc gia</strong></h2>
                    <h5><strong>login to view Dashboard</strong></h5>
                </div>
                <div className="container login-cont">
                    <div className="row">
                        <div className="col-10 col-sm-6 col-md-4 col-lg-4 offset-1 offset-sm-3 offset-md-4 offset-lg-4 login-col">
                            <i className="icon ion-lock-combination"></i>
                            <form className="login-form" method="post">
                                <div className="form-group mb-3"><input className="form-control form-control-lg lg-frc" type="text" required placeholder="Enter User ID" /></div>
                                <div className="form-group mb-3"><input className="form-control form-control-lg lg-frc" type="password" required placeholder="Enter Password" /></div>
                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" defaultChecked /><label className="form-check-label text-white" htmlFor="formCheck-1">Khởi động cùng windowns</label></div>
                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label text-white" htmlFor="formCheck-2">Mở cửa sổ trương trình khi khởi động</label></div>
                                <div className="form-group mb-3"><button className="btn btn-light btn-lg login-btn" type="submit"><strong>Login</strong></button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;
